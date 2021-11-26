import React from "react";
import { AlbumQuery } from "../lib/api/gallery";
import { imageBuilder } from "../lib/sanity";
import Link from "next/link";

interface Props {
  albums: Array<AlbumQuery>;
}

export default function Albums({ albums }: Props) {
  return (
    <ul>
      {albums
        .filter((album) => !!album.mainImage)
        .map(({ slug, mainImage, name }) => (
          <li key={slug}>
            <img
              width={200}
              height={200}
              src={
                imageBuilder(mainImage).width(200).height(200).url() ||
                undefined
              }
            />
            <div>
              <Link as={`/gallery/${slug}`} href="/gallery/[slug]">
                <a className="hover:underline">{name}</a>
              </Link>
            </div>
          </li>
        ))}
    </ul>
  );
}
