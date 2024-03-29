import React from "react";
import {AlbumWithImagesQuery} from "../../lib/api/gallery";
import Container from "../container";
import {imageBuilder} from "../../lib/sanity";
import TextBlock from "../text-block";
import {listStyle} from "./styles.css";
import Link from "../link";
import toMarkdown from "@sanity/block-content-to-markdown";

interface Props {
    album: AlbumWithImagesQuery;
}

export default function Album({album}: Props) {
    return (
        <Container>
            <ul className={listStyle}>
                {album.images?.map((image, index) => (
                    <li key={`${album.slug}-${index}`}>
                        <Link href={imageBuilder(image.image).url() || undefined}>
                            <img
                                src={
                                    imageBuilder(image.image).width(256).url() || undefined
                                }
                                alt={toMarkdown(image.description)}
                            />
                        </Link>
                        <TextBlock text={image.description}/>
                    </li>
                ))}
            </ul>
        </Container>
    );
}
