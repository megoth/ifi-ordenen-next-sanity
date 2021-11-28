import React, { Fragment } from "react";
import { imageBuilder } from "../../lib/sanity";
import { PersonQuery } from "../../lib/api/people";
import Container from "../container";
import { imageStyle, reasonStyle, titleStyle } from "./styles.css";
import TextBlock from "../text-block";
import Tags from "../tags";
import DateFormat from "../date-format";

interface Props {
  person: PersonQuery;
}

export default function Person({ person }: Props) {
  const [latestAward, ...otherAwards] = person.titles;
  const tags = person.associations?.reduce<Record<string, string>>(
    (memo, association) => {
      memo[`/association/${association.slug.current}`] =
        association.short || association.name;
      return memo;
    },
    {}
  );
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
      <p>
        Tildelt <DateFormat date={latestAward.date} format={"PPP"} />
      </p>
      {tags && <Tags tags={tags} />}
      {otherAwards?.map((award) => (
        <Fragment key={award._type}>
          <h2>Tidligere tildelt: {award.title.name}</h2>
          <TextBlock text={award.description} />
          <TextBlock text={award.reason} className={reasonStyle} />
          <p>Tildelt i {award.date.substring(0, 4)}</p>
        </Fragment>
      ))}
    </Container>
  );
}
