import React from "react";
import { PageUpdateQuery } from "../../lib/api/page-updates";
import DateFormat from "../date-format";
import Link from "../link";
import { listStyle } from "./styles.css";
import Container from "../container";

interface Props {
  pageUpdates: Array<PageUpdateQuery>;
}

export default function PageUpdates({ pageUpdates }: Props) {
  return (
    <Container>
      <h2>Oppdateringer på siden</h2>
      <ul className={listStyle}>
        {pageUpdates.map(({ created, description, name, url }) => (
          <li key={url}>
            <span>{description}: </span>
            <Link href={url}>{name}</Link>
            <DateFormat
              format="PPPP"
              date={created}
              prefix={" ("}
              postfix={")"}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
}
