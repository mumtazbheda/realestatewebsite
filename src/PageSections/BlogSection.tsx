import { SanityFetch } from "@/lib/SanityFetch";
import SliderWrapper from "@/shared/SliderWrapper";
import React from "react";
import { urlForImage } from "../../sanity/lib/image";
import MediaBox from "@/shared/MediaBox";
import Link from "next/link";
import acticle_views from "@/assets/Svgs/acticle-views.svg";
import Image from "next/image";
import { Clock3Icon } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogSectionI {
  title: string;
  AgentName?: string;
  AgentSlug?: string;
  ImageBlog?: boolean;
  orderbyViews?: boolean;
  media_type?: string;
}

const BlogSection = async ({
  title,
  AgentName,
  AgentSlug,
  ImageBlog = true,
  orderbyViews = false,
  media_type = "news",
}: BlogSectionI) => {
  const Data = await SanityFetch({
    Query: `*[_type == 'media' && media_type == '${media_type}' ${
      AgentName && AgentName !== ""
        ? `&& references(*[_type == "agent" && name == '${AgentName}' || slug.current == '${AgentSlug}']._id)`
        : ""
    } ]
    ${orderbyViews ? `| order(views desc)` : ""}
    {
            title,
            slug,
            source,
            short_summary,
            cover_image,
            source_logo,
            published_on,
            views,
            agent -> {
                name,
                image,
                phone
            }
          }[0..4]`,
  });

  const cover_image =
    Data &&
    Data[0]?.cover_image &&
    urlForImage(Data[0].cover_image.asset._ref).url();
  const Agent_Image =
    Data &&
    Data[0]?.agent?.image &&
    urlForImage(Data[0].agent.image.asset._ref).url();

  return (
    <div>
      <h2 className="text-2xl font-semibold sm:mb-6 mb-4">{title}</h2>
      <div className="flex md:flex-row flex-col max-md:gap-6">
        {ImageBlog && (
          <div className="lg:w-2/5 md:w-1/2 max-lg:min-w-[50%]">
            {Data && Data.length !== 0 && (
              <MediaBox
                MediaBoxImage={cover_image}
                title={Data[0].title}
                summary={Data[0].short_summary}
                sourceImage={Agent_Image}
                source={Data[0].agent?.name}
                published={Data[0].published_on}
                AutoHeight={true}
              />
            )}
          </div>
        )}
        <div
          className={cn([
            "flex-grow flex flex-col justify-center",
            ImageBlog && "lg:py-9 lg:px-20 md:p-6 p-0.5",
          ])}
        >
          {Data &&
            Data.length !== 0 &&
            Data.slice(ImageBlog ? 1 : 0).map((item: any, index: number) => {
              const link =
                "/media/" + item.media_type + "/" + item.slug.current;
              return (
                <>
                  <div
                    key={index}
                    className={cn([
                      "flex flex-col gap-2 max-md:w-full",
                      ImageBlog ? "max-md:max-w-[500px] max-md:mx-auto" : "",
                    ])}
                  >
                    <Link href={link ? link : ""}>
                      <h3 className="text-base leading-tight font-semibold hover:text-secondary transition-all duration-300">
                        {item.title}
                      </h3>
                    </Link>
                    <div className="md:max-w-[300px] flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <Clock3Icon size={16} className="stroke-black/40" />
                        <p className="text-xs text-black/70 mt-[0.5px]">
                          {item.published_on}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Image
                          className="w-[18px] h-[18px]"
                          src={acticle_views}
                          alt="acticle_views"
                        />
                        {item.views && (
                          <span className="text-black/50 text-sm">
                            {item.views}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  {index + 1 < Data.slice(ImageBlog ? 1 : 0).length && (
                    <hr className="my-3.5" />
                  )}
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
