import React from "react";
import { getSortOrderForYear, PersonForListQuery } from "../../lib/api/people";
import Button from "../button";
import Container from "../container";
import {
  listItemStyle,
  listStyle,
  personImage,
  personName,
  personTitle,
} from "./styles.css";
import { imageBuilder } from "../../lib/sanity";
import Link from "../link";

interface Props {
  lastMembers: Array<PersonForListQuery>;
}

export default function LastMembers({ lastMembers }: Props) {
  const lastYear = Math.max.apply(
    null,
    lastMembers.map(({ year }) => year)
  );
  return (
    <Container variant={"green"}>
      <h2>Siste mottakere</h2>
      <ul className={listStyle}>
        {lastMembers
          .filter(({ year }) => year === lastYear)
          .sort((a, b) =>
            getSortOrderForYear(a) > getSortOrderForYear(b) ? 1 : -1
          )
          .map((person) => (
            <li key={person.slug} className={listItemStyle}>
              <Link href={`/person/${person.slug}`} className={personName}>
                <img
                  className={personImage}
                  alt={`Cover Image for ${person.name}`}
                  src={
                    imageBuilder(person.mainImage).width(75).height(75).url() ||
                    undefined
                  }
                />
              </Link>
              <div>
                <div>
                  <Link href={`/person/${person.slug}`} className={personName}>
                    {person.name}
                  </Link>
                </div>
                <div className={personTitle}>{person.title}</div>
              </div>
            </li>
          ))}
      </ul>
      <Button href={"/person"} variant={"on-green"}>
        Se alle mottakere
      </Button>
    </Container>
  );
}
