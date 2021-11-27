import React from "react";
import { imageBuilder } from "../../lib/sanity";
import { PersonQuery } from "../../lib/api/people";
import Container from "../container";
import {
  imageStyle,
  reasonStyle,
  tagsStyle,
  tagStyle,
  titleStyle,
} from "./styles.css";
import TextBlock from "../text-block";
import Link from "../link";

interface Props {
  person: PersonQuery;
}

export default function Person({ person }: Props) {
  console.log(person);
  const [latestAward, ...otherAwards] = person.titles;
  return (
    <Container>
      <p className={titleStyle}>{latestAward.title.name}</p>
      <img
        alt={`Cover Image for ${person.name}`}
        className={imageStyle}
        src={imageBuilder(person.mainImage).url() || undefined}
      />
      <TextBlock text={latestAward.description} />
      <TextBlock text={latestAward.reason} className={reasonStyle} />
      <p>Tildelt i {latestAward.year.substring(0, 4)}</p>
      <ul className={tagsStyle}>
        {person.associations.map((association) => (
          <li>
            <Link
              href={`/association/${association.slug.current}`}
              className={tagStyle}
            >
              {association.short || association.name}
            </Link>
          </li>
        ))}
      </ul>
      {otherAwards.map((award) => (
        <>
          <h2>Tidligere tildelt: {award.title.name}</h2>
          <TextBlock text={award.description} />
          <TextBlock text={award.reason} className={reasonStyle} />
          <p>Tildelt i {award.year.substring(0, 4)}</p>
        </>
      ))}
    </Container>
  );
}
