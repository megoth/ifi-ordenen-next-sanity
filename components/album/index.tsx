import React from "react";
import { AlbumWithImagesQuery } from "../../lib/api/gallery";
import Container from "../container";
import { imageBuilder } from "../../lib/sanity";
import TextBlock from "../text-block";
import { listStyle } from "./styles.css";

interface Props {
  album: AlbumWithImagesQuery;
}

export default function Album({ album }: Props) {
  return (
    <Container>
      <ul className={listStyle}>
        {album.images?.map((image, index) => (
          <li key={`${album.slug}-${index}`}>
            <img src={imageBuilder(image.image).url() || undefined} />
            <TextBlock text={image.description} />
          </li>
        ))}
      </ul>
    </Container>
  );
}
