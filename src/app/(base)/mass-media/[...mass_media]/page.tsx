import { SanityFetch } from "@/lib/SanityFetch";
import Navigation from "@/shared/Navigation";
import Image from "next/image";
import React, { Suspense } from "react";
import acticle_views from "@/assets/Svgs/acticle-views.svg";
import { urlForImage } from "../../../../../sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { ArrowLeft, Share2Icon, StarIcon } from "lucide-react";
import { DecodeSlug } from "@/lib/helper/CreateSlug";
import readmoreArrow_icon from "@/assets/Svgs/arrow-readmore-hover.svg";
import Link from "next/link";
import Media from "@/widgets/Media";
import { SchemaMarkup } from "@/lib/schemaMarkup";
import { Metadata, ResolvingMetadata } from "next";

interface ParamsI {
  params: { mass_media: string[] };
}

export async function generateMetadata(
  { params }: ParamsI,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug =
    params.mass_media.length > 1 ? params.mass_media[1] : params.mass_media[0];

  const Data = await SanityFetch({
    Query: `*[_type == 'mass_media' && slug.current == '${slug}'] {
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

const MassMedia = async ({ params }: { params: { mass_media: string[] } }) => {
  const slug =
    params.mass_media.length > 1 ? params.mass_media[1] : params.mass_media[0];

  const Data = await SanityFetch({
    Query: `*[_type == 'mass_media' && slug.current == '${slug}'] {
            title,
            slug,
            short_summary,
            summary,
            views,
            cover_image,
            page_image,
            publisher -> {
                name,
                logo,
                url
            },
            published_on,
            schemaMarkup
          }[0]`,
  });

  const PublisherLogo =
    Data.publisher?.logo &&
    urlForImage(Data?.publisher?.logo?.asset._ref).url();

  const PageImage =
    Data && Data.page_image && urlForImage(Data?.page_image?.asset._ref).url();

  return (
    <main className="max-width py-6 sm:px-4 px-2">
      {/* Schema Markup */}
      {Data?.schemaMarkup && <SchemaMarkup schema={Data.schemaMarkup} />}

      {/* Navigation */}
      <section className="">
        <Navigation title={"Mid East.Info"} />
      </section>

      <section className="max-w-screen-md mx-auto flex flex-col gap-10 md:mt-8">
        <h1 className="md:text-[42px] text-[28px] leading-none font-bold">
          {Data.title}
        </h1>
        <div className="flex items-center justify-between max-w-sm">
          <div className="flex items-center gap-3">
            {PublisherLogo && (
              <Image
                unoptimized
                fill
                className="!w-[50px] !h-fit !relative"
                src={PublisherLogo}
                alt="Source logo"
              />
            )}
            <div className="space-y-1">
              {Data.publisher && (
                <div className="text-sm font-semibold">
                  {Data.publisher.name}
                </div>
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
        {Data.summary && (
          <div className="flex flex-col gap-2">
            <PortableText value={Data.summary} />
          </div>
        )}
        {PageImage && (
          <div className="relative after:absolute after:z-10 after:w-full after:bottom-0 after:h-24 after:bg-gradient-to-b after:from-white/0 after:to-white after:to-90%">
            <Image
              unoptimized
              fill
              className="!relative !w-full !h-full rounded-lg"
              src={PageImage}
              alt="Cover Image"
            />
          </div>
        )}
        <div className="flex flex-col items-center gap-4 -mt-2">
          {PublisherLogo && (
            <Image
              unoptimized
              fill
              className="md:max-w-[240px] max-w-[200px] min-h-[45px] !h-fit !relative"
              src={PublisherLogo}
              alt="Source logo"
            />
          )}
          <p className="md:text-xl text-lg text-center px-2">
            You can go to the source of the publication and read it in full
          </p>
          <div className="flex items-center gap-3">
            <Link href={"/"} className="max-md:hidden">
              <button className="flex items-center gap-2 bg-secondary text-white px-5 py-2 rounded-lg">
                <ArrowLeft size={20} strokeWidth={2.5} /> Go back
              </button>
            </Link>
            <Link
              target="_blank"
              href={Data.publisher?.url ? Data.publisher?.url : ""}
            >
              <button className="flex items-center gap-2 border border-secondary text-secondary px-5 py-2 rounded-lg">
                Go to {Data.publisher?.name}
                <Image
                  width={16}
                  height={16}
                  src={readmoreArrow_icon}
                  alt="readmore Arrow icon"
                />
              </button>
            </Link>
          </div>
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
                <div className="flex items-baseline gap-1 md:pl-1 pl-0.5">
                  <span className="text-2xl font-semibold">5</span>
                  <span className="text-sm text-black/50 max-md:hidden">
                    1 vote
                  </span>
                </div>
              </div>
            </div>
            <button className="max-md:hidden text-sm text-secondary border border-transparent hover:border-secondary transition-all duration-300 flex items-center gap-2 py-1 px-2.5 rounded-md">
              <Share2Icon size={15} />
              <span>SHARE</span>
            </button>
          </div>
        </div>
      </section>

      {/* Recent Media Section */}
      <section className="md:mt-40 mt-24 md:px-2 px-5">
        <Suspense fallback={null}>
          <Media title="Recent media posts" />
        </Suspense>
      </section>
    </main>
  );
};

export default MassMedia;
