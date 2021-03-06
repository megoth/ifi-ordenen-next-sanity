import React from "react";
import { PersonForListQuery } from "../../lib/api/people";
import Button from "../button";
import Container from "../container";
import {
  listItemStyle,
  listStyle,
  personImage,
  personLinkStyle,
  personName,
  personTitle,
} from "./styles.css";
import { imageBuilder } from "../../lib/sanity";
import Link from "../link";
import { format } from "date-fns";
import { onlyUnique } from "../../lib/utils";
import Arrow from "../arrow";

interface Props {
  lastMembers: Array<PersonForListQuery>;
}

export default function LastMembers({ lastMembers }: Props) {
  const fromDate = format(
    new Date(new Date().setMonth(new Date().getMonth() - 14)),
    "yyyy-MM-dd"
  );
  const dates = lastMembers
    .map(({ titles }) => titles[0].date)
    .filter(onlyUnique)
    .sort((a, b) => (a < b ? 1 : -1));
  const lastDatesSelection = dates.filter((date) => date > fromDate);
  const lastDates = lastDatesSelection.length ? lastDatesSelection : dates[0];
  return (
    <Container variant="green">
      <h2>
        {lastDatesSelection.length
          ? "Mottakere siste året"
          : "Siste" + " mottakere"}
      </h2>
      <ul className={listStyle}>
        {lastMembers
          .filter(({ titles }) => lastDates.indexOf(titles[0].date) !== -1)
          .map((person) => (
            <li key={person.slug} className={listItemStyle}>
              <Link href={`/person/${person.slug}`} className={personLinkStyle}>
                <img
                  className={personImage}
                  alt={`Cover Image for ${person.name}`}
                  src={
                    imageBuilder(person.mainImage)
                      .width(150)
                      .height(150)
                      .url() || undefined
                  }
                />
                <div>
                  <div className={personName}>{person.name}</div>
                  <div className={personTitle}>
                    {person.titles[0].title.name}
                  </div>
                </div>
              </Link>
            </li>
          ))}
      </ul>
      <Button href={"/person"} variant={"on-green"}>
        <span>Se alle mottakere</span>
        <Arrow />
      </Button>
    </Container>
  );
}
