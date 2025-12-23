import { SanityFetch } from "@/lib/SanityFetch";
import Navigation from "@/shared/Navigation";
import Image from "next/image";
import React, { Suspense } from "react";
import acticle_views from "@/assets/Svgs/acticle-views.svg";
import { urlForImage } from "../../../../../../sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { SubmitContactForm } from "@/lib/actions/FormAction";
import { Share2Icon, StarIcon } from "lucide-react";
import agent_bg from "@/assets/images/bg-agent.jpg";
import AnimatedButton from "@/shared/AnimatedButton";
import BlogSection from "@/PageSections/BlogSection";
import Link from "next/link";
import { CreateSlug } from "@/lib/helper/CreateSlug";
import LifeStyle from "@/widgets/LifeStyle";
import { MediaTypes } from "@/lib/constants";
import MediaSlider from "./mediaSlider";
import { SchemaMarkup } from "@/lib/schemaMarkup";
import { Metadata, ResolvingMetadata } from "next";
import { SubmitButton } from "@/shared/SubmitButton";

interface ParamsI {
  params: { media: string; slug: string };
}

export async function generateMetadata(
  { params }: ParamsI,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const Data = await SanityFetch({
    Query: `*[_type == 'media' ${
      params.media ? `&& media_type == '${params.media}'` : ""
    }
    && slug.current == '${params.slug}'
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

const MediaSlugPage = async ({ params }: ParamsI) => {
  const Data = await SanityFetch({
    Query: `*[_type == 'media' ${
      params.media ? `&& media_type == '${params.media}'` : ""
    }
    && slug.current == '${params.slug}'
  ] {
            media_type,
            title,
            slug,
            short_summary,
            cover_image,
            top_content,
            page_image,
            bottom_content,
            agent -> {
                name,
                image,
                slug,
                about
            },
            published_on,
            views,
            schemaMarkup
          }[0]`,
  });

  const PublisherImage =
    Data.agent &&
    Data.agent.image &&
    urlForImage(Data.agent.image.logo.asset._ref).url();

  const PageImage =
    Data && Data.page_image && urlForImage(Data.page_image.asset._ref).url();

  const MediaType = MediaTypes.find((item) => item.value === Data.media_type);

  return (
    <main className="max-width py-6 sm:px-4 px-2">
      {/* Schema Markup */}
      {Data?.schemaMarkup && <SchemaMarkup schema={Data.schemaMarkup} />}

      {/* Navigation */}
      <section className="">
        <Navigation title={MediaType?.title} />
      </section>

      <section className="max-w-screen-md mx-auto flex flex-col gap-10 md:mt-8">
        {/* Title */}
        <h1 className="md:text-[42px] text-[28px] leading-none font-bold">
          {Data.title}
        </h1>

        {/* Publisher */}
        <div className="flex items-center justify-between max-w-sm">
          <div className="flex items-center gap-3">
            {PublisherImage && (
              <Image
                unoptimized
                fill
                className="!w-[50px] !h-fit !relative"
                src={PublisherImage}
                alt="Source logo"
              />
            )}
            <div className="space-y-1">
              {Data.agent.name && (
                <div className="text-sm font-semibold">{Data.agent.name}</div>
              )}
              <p className="text-xs text-black/70">
                Published on {Data.published_on}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {Data.views && (
              <span className="text-black/50 text-sm">{Data.views}</span>
            )}
            <Image width={16} src={acticle_views} alt="acticle_views" />
          </div>
        </div>

        {/* Media Slider Section */}
        <div>
          <Suspense fallback={null}>
            <MediaSlider />
          </Suspense>
        </div>

        {/* Top Content */}
        {Data.top_content && (
          <div className="flex flex-col gap-2">
            <PortableText value={Data.top_content} />
          </div>
        )}

        {/* Page Image */}
        {PageImage && (
          <div>
            <Image
              unoptimized
              fill
              className="!relative !w-full !h-full rounded-lg"
              src={PageImage}
              alt="Page Image"
            />
          </div>
        )}

        {/* Bottom Content */}
        {Data.bottom_content && (
          <div className="flex flex-col gap-2">
            <PortableText value={Data.bottom_content} />
          </div>
        )}
      </section>

      {/* Interesting article Section */}
      <section className="max-w-screen-md mx-auto flex flex-col gap-10 mt-16">
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

      <section className="max-w-screen-md mx-auto flex flex-col gap-14 mt-16">
        {/* Rate Article Section */}
        <div className="w-full flex items-center justify-between mt-4">
          <div className="flex items-center max-md:justify-between max-md:w-full gap-3">
            <span className="md:text-2xl text-lg md:font-semibold font-medium">
              Rate the article:
            </span>
            <div className="flex items-center gap-2">
              {["", "", "", "", ""].map((_, i: number) => (
                <StarIcon
                  key={i}
                  className="max-md:w-[16px]"
                  fill="#ffdb02"
                  stroke="#ffdb02"
                />
              ))}
              {/* <div className="flex items-baseline gap-1 md:pl-1 pl-0.5">
                <span className="text-2xl font-semibold">5</span>
                <span className="text-sm text-black/50 max-md:hidden">
                  1 vote
                </span>
              </div> */}
            </div>
          </div>
          <button className="max-md:hidden text-sm text-secondary border border-transparent hover:border-secondary transition-all duration-300 flex items-center gap-2 py-1 px-2.5 rounded-md">
            <Share2Icon size={15} />
            <span>SHARE</span>
          </button>
        </div>

        {/* Agent Section */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="relative flex justify-center w-[140px] h-[140px] rounded-full overflow-hidden">
            <Image
              className="absolute w-full h-full object-cover"
              src={agent_bg}
              alt="agent_bg"
            />
            {Data.agent.image && (
              <Image
                className="relative z-10 w-[85%] h-full object-cover object-top mt-2.5"
                src={Data.agent.image}
                alt="Agent's Image"
              />
            )}
          </div>
          {Data.agent.name && (
            <h3 className="text-2xl font-semibold">{Data.agent.name}</h3>
          )}
          {Data.agent.about && <p>{Data.agent.about}</p>}
          <Link
            href={
              Data.agent.slug
                ? `/agent/${Data.agent.slug.current}`
                : Data.agent.name
                ? `/agent/${CreateSlug(Data.agent.name)}`
                : "/"
            }
          >
            <AnimatedButton
              text="More by this author"
              hoverColor="bg-primary/50"
            />
          </Link>
        </div>
      </section>

      <section className="max-w-screen-md mx-auto flex flex-col gap-14 mt-20">
        <Suspense fallback={null}>
          <BlogSection
            title={"Popular articles"}
            ImageBlog={false}
            orderbyViews={true}
          />
        </Suspense>
      </section>

      {/* Latest News Section */}
      <section className="md:mt-40 mt-24 md:px-2 px-5">
        <Suspense fallback={null}>
          <LifeStyle title="Latest News" />
        </Suspense>
      </section>
    </main>
  );
};

export default MediaSlugPage;
