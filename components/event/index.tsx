import React from "react";
import { EventQuery } from "../../lib/api/history";
import Container from "../container";
import DateFormat from "../date-format";
import TextBlock from "../text-block";
import Tags from "../tags";
import Link from "../link";
import { listStyle } from "./styles.css";

interface Props {
  event: EventQuery;
}

export default function Event({ event }: Props) {
  const tags = event.associations?.reduce<Record<string, string>>(
    (memo, association) => {
      memo[`/association/${association.slug.current}`] =
        association.short || association.name;
      return memo;
    },
    {}
  );
  return (
    <Container>
      <p>
        {event.date ? (
          <span>
            Dato: <DateFormat date={event.date} format={"PPPP"} />
          </span>
        ) : (
          <span>
            År: <DateFormat date={event.year} format={"yyyy"} />
          </span>
        )}
      </p>
      {event.description && <TextBlock text={event.description} />}
      {tags && <Tags tags={tags} />}
      {event.sources && (
        <>
          <h2>Kilder</h2>
          <ul className={listStyle}>
            {event.sources.map((source, index) => (
              <li key={`source-${index}`}>
                {source.url ? (
                  <Link href={source.url}>{source.text}</Link>
                ) : (
                  source.text
                )}
              </li>
            ))}
          </ul>
        </>
      )}
    </Container>
  );
}
