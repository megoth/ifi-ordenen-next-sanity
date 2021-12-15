import React from "react";
import Container from "../container";
import { AssociationQuery, getLogoStyle } from "../../lib/api/associations";
import TextBlock from "../text-block";
import { EventForListQuery } from "../../lib/api/history";
import { PersonForListQuery } from "../../lib/api/people";
import Events from "../events";
import MembersList from "../members/membersList";
import Link from "../link";
import { detailsStyle, listStyle, logoStyle } from "./styles.css";
import { imageBuilder } from "../../lib/sanity";

interface Props {
  association: AssociationQuery;
  events: Array<EventForListQuery>;
  members: Array<PersonForListQuery>;
}

export default function Association({ association, events, members }: Props) {
  return (
    <>
      <Container>
        <div className={detailsStyle}>
          {association.logo && (
            <div className={logoStyle} style={getLogoStyle(association)}>
              <img
                src={
                  imageBuilder(association.logo).maxWidth(400).url() ||
                  undefined
                }
                alt={`Logo for ${association.name}`}
              />
            </div>
          )}
          <TextBlock text={association.description} />
          {(!association.active || association.previous || association.url) && (
            <>
              <h2>Annen informasjon</h2>
              <ul className={listStyle}>
                {!association.active && (
                  <li>
                    <strong>Ikke lenger aktiv</strong>
                  </li>
                )}
                {association.previous && (
                  <li>
                    <span>Tidligere kjent som </span>
                    <Link
                      href="/association/[slug]"
                      as={`/association/${association.previous.slug.current}`}
                    >
                      {association.previous.name}
                    </Link>
                  </li>
                )}
                {association.url && (
                  <li>
                    <span>Nettside: </span>
                    <Link href={association.url}>{association.url}</Link>
                  </li>
                )}
              </ul>
            </>
          )}
        </div>
      </Container>

      {members.length > 0 && (
        <Container>
          <h2>Siste ordensbærere</h2>
          <MembersList members={members} />
        </Container>
      )}

      {(events.length > 0 || members.length > 0) && (
        <>
          <Container>
            <h2>Historie</h2>
          </Container>
          <Events events={events} members={members} />
        </>
      )}
    </>
  );
}
