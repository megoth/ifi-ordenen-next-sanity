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
  const lastDate = lastMembers
    .map(({ titles }) => titles[0].date)
    .sort((a, b) => (a < b ? 1 : -1))[0];
  return (
    <Container variant={"green"}>
      <h2>Siste mottakere</h2>
      <ul className={listStyle}>
        {lastMembers
          .filter(({ titles }) => titles[0].date === lastDate)
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
                <div className={personTitle}>{person.titles[0].title.name}</div>
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
