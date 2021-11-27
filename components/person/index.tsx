import React, { Fragment } from "react";
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
  const [latestAward, ...otherAwards] = person.titles;
  return (
    <Container>
      <p className={titleStyle}>{latestAward.title.name}</p>
      <img
        alt={`Cover Image for ${person.name}`}
        className={imageStyle}
        src={imageBuilder(person.mainImage).width(600).url() || undefined}
      />
      <TextBlock text={latestAward.description} />
      <TextBlock text={latestAward.reason} className={reasonStyle} />
      <p>Tildelt i {latestAward.year.substring(0, 4)}</p>
      {person.associations && (
        <ul className={tagsStyle}>
          {person.associations.map((association) => (
            <li key={association.slug.current}>
              <Link
                href={`/association/${association.slug.current}`}
                className={tagStyle}
              >
                {association.short || association.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {otherAwards?.map((award) => (
        <Fragment key={award._type}>
          <h2>Tidligere tildelt: {award.title.name}</h2>
          <TextBlock text={award.description} />
          <TextBlock text={award.reason} className={reasonStyle} />
          <p>Tildelt i {award.year.substring(0, 4)}</p>
        </Fragment>
      ))}
    </Container>
  );
}
