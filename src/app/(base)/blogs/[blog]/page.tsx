import { SanityFetch } from "@/lib/SanityFetch";
import Navigation from "@/shared/Navigation";
import React, { Suspense } from "react";
import { SubmitContactForm } from "@/lib/actions/FormAction";
import Blogs from "@/widgets/Blogs";
import { CustomPortableText } from "@/components/customPortableText";
import { SchemaMarkup } from "@/lib/schemaMarkup";
import FAQSection from "@/PageSections/FAQSection";
import ReviewSection from "@/PageSections/ReviewSection";
import { Metadata, ResolvingMetadata } from "next";
import { SubmitButton } from "@/shared/SubmitButton";

interface ParamsI {
  params: { blog: string };
}

export async function generateMetadata(
  { params }: ParamsI,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const Data = await SanityFetch({
    Query: `*[_type == 'blog' && slug.current == '${params.blog}'
        ] {
            title,
            meta_title,
            meta_description
          }[0]`,
  });

  return {
    title:
      Data?.meta_title ?? Data?.title
        ? Data?.title
        : "Kingdom Capital - Real Estate",
    description: Data?.meta_description ?? (await parent).description ?? "",
  };
}

const MediaSlugPage = async ({ params }: { params: { blog: string } }) => {
  const Data = await SanityFetch({
    Query: `*[_type == 'blog' && slug.current == '${params.blog}'
        ] {
            title,
            slug,
            cover_image,
            content,
            sections[] {
              ...,
              title
            },
            schemaMarkup
          }[0]`,
  });

  return (
    <main className="max-width sm:py-6 py-2.5 sm:px-4 px-2">
      {/* Schema Markup */}
      {Data?.schemaMarkup && <SchemaMarkup schema={Data.schemaMarkup} />}

      <div className="flex flex-col-reverse gap-6">
        {/* Title */}
        <h1 className="lg:text-5xl md:text-4xl text-3xl leading-none font-bold">
          {Data.title}
        </h1>

        {/* Navigation */}
        <section>
          <Navigation
            from={[
              {
                title: "Blogs",
                link: "/blogs",
              },
            ]}
            title={Data?.title ?? ""}
            wrapperClassName="!block max-sm:!hidden"
          />
        </section>
      </div>

      {/* Content */}
      <section className="lg:mt-7 md:mt-6 mt-5">
        {Data.content && <CustomPortableText value={Data.content} />}
      </section>

      {Data &&
        Data.sections &&
        Data.sections.map((item: any, i: number) => {
          // FAQ Section
          if (item._type === "faq_section") {
            return (
              <section key={i} className="mt-14 space-y-8">
                <FAQSection
                  title={item.title}
                  FAQs={
                    item.faqs &&
                    item.faqs.map((items: any) => ({
                      question: items.question,
                      answer: items.answer,
                    }))
                  }
                />
              </section>
            );
          }
          // Reviews Section
          if (item._type === "review_section") {
            return (
              <section
                key={i}
                className="md:mt-16 mt-14 space-y-8 md:px-2 px-5"
              >
                <ReviewSection
                  title={item.title}
                  Reviews={item.reviews ?? []}
                />
              </section>
            );
          }
        })}

      {/* Interesting article Section */}
      <section className="max-w-screen-md mx-auto flex flex-col gap-10 mt-24">
        <div className="flex flex-col items-center gap-5">
          <h3 className="sm:text-4xl text-3xl font-semibold text-center">
            Interesting this article?
          </h3>
          <p className="xs:mt-3 text-center">Subscribe to receive news</p>
          <form
            action={SubmitContactForm}
            className="flex md:flex-row flex-col items-center w-full gap-2 max-w-[750px]"
          >
            <div className="flex items-center gap-2 w-full max-md:justify-center max-[450px]:flex-col">
              <input
                name="name"
                className="bg-white border focus:border-secondary outline-none transition-all duration-300 min-w-[220px] w-full md:max-w-[340px] min-[450px]:max-w-[220px] rounded-lg py-2 px-3 placeholder-black/40"
                type="text"
                placeholder="Name*"
              />
              <input
                name="email"
                className="bg-white border focus:border-secondary outline-none transition-all duration-300 min-w-[220px] w-full md:max-w-[340px] min-[450px]:max-w-[220px] rounded-lg py-2 px-3 placeholder-black/40"
                type="email"
                placeholder="E-mail*"
              />
            </div>
            <SubmitButton className="flex items-center justify-center max-w-[120px] w-full group relative overflow-hidden bg-secondary text-white rounded-lg py-2 px-5">
              <span className="relative text-white z-20">Subscribe</span>
              <span className="w-0 group-hover:w-full transition-all duration-500 absolute top-0 bottom-0 right-0 bg-primary/60"></span>
            </SubmitButton>
          </form>
        </div>
      </section>

      {/* Latest Blog Section */}
      <section className="md:mt-24 sm:mt-24 mt-20 md:px-2 px-5">
        <Suspense fallback={null}>
          <Blogs title="Latest Blog" />
        </Suspense>
      </section>
    </main>
  );
};

export default MediaSlugPage;
