import React from "react";
import { AlbumQuery } from "../../lib/api/gallery";
import { imageBuilder } from "../../lib/sanity";
import Container from "../container";
import { linkStyle, listStyle } from "./styles.css";
import Link from "../link";

interface Props {
  albums: Array<AlbumQuery>;
}

export default function Albums({ albums }: Props) {
  return (
    <Container>
      <ul className={listStyle}>
        {albums
          .filter((album) => !!album.mainImage)
          .map(({ slug, mainImage, name }) => (
            <li key={slug}>
              <Link
                as={`/gallery/${slug}`}
                href="/gallery/[slug]"
                className={linkStyle}
              >
                <img
                  src={
                    imageBuilder(mainImage).width(256).height(200).url() ||
                    undefined
                  }
                />
                <div>{name}</div>
              </Link>
            </li>
          ))}
      </ul>
    </Container>
  );
}
