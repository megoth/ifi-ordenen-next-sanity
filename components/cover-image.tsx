import React from "react";
import cn from "classnames";
import Link from "next/link";
import { imageBuilder } from "../lib/sanity";
import { PostQuery } from "../lib/api";

interface Props extends Pick<PostQuery, "title" | "coverImage" | "slug"> {}

export default function CoverImage({ title, coverImage, slug }: Props) {
  const image = (
    <img
      width={1240}
      height={540}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
      src={imageBuilder(coverImage).width(1240).height(540).url() || undefined}
    />
  );

  return (
    <div className="-mx-5 sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
