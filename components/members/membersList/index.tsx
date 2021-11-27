import React, { useEffect, useMemo, useState } from "react";
import { PersonForListQuery } from "../../../lib/api/people";
import {
  listItemStyle,
  listStyle,
  personHiddenStyle,
  personImageStyle,
  personLinkStyle,
  personNameStyle,
  personSelectedCloseStyle,
  personSelectedDescriptionStyle,
  personSelectedImageStyle,
  personSelectedStyle,
  personTextStyle,
  personTitleStyle,
} from "./styles.css";
import { imageBuilder } from "../../../lib/sanity";
import Link from "../../link";
import { useRouter } from "next/router";
import cn from "classnames";
import TextBlock from "../../text-block";
import Button from "../../button";

interface Props {
  members: Array<PersonForListQuery>;
}

export default function MembersList({ members }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const [hidden, setHidden] = useState<string | null>(null);
  const usernames = useMemo(() => members.map(({ slug }) => slug), [members]);
  const router = useRouter();
  const baseUrl = `/person${router.query.by ? `?by=${router.query.by}` : ""}`;
  useEffect(() => {
    const hasSelected = router.asPath.indexOf("#");
    const newSelected =
      hasSelected === -1 ? null : router.asPath.substring(hasSelected + 1);
    const selectedIndex = usernames.findIndex(
      (username) => username === newSelected
    );
    setSelected(newSelected);
    setHidden(
      selectedIndex % 2 === 1
        ? usernames[selectedIndex - 1]
        : selectedIndex % 2 === 0
        ? usernames[selectedIndex + 1]
        : null
    );
  }, [router, usernames]);
  return (
    <ul className={listStyle}>
      {members.map((person) => (
        <li
          className={cn(listItemStyle, {
            [personSelectedStyle]: selected === person.slug,
            [personHiddenStyle]: hidden === person.slug,
          })}
          key={person.slug}
        >
          {selected === person.slug ? (
            <div>
              <div
                className={personSelectedImageStyle}
                style={{
                  backgroundImage: `url(${
                    imageBuilder(person.mainImage)
                      .height(350)
                      .width(400)
                      .url() || undefined
                  })`,
                }}
              >
                <Link href={baseUrl} className={personSelectedCloseStyle}>
                  ✖
                </Link>
              </div>
              <div className={personSelectedDescriptionStyle}>
                <TextBlock text={[person.description[0]]} />
                <Button href={`/person/${person.slug}`} variant={"on-green"}>
                  Les hele begrunnelsen
                </Button>
              </div>
            </div>
          ) : (
            <Link
              href={`${baseUrl}#${person.slug}`}
              className={personLinkStyle}
            >
              <img
                alt={`Cover Image for ${person.name}`}
                className={personImageStyle}
                src={
                  imageBuilder(person.mainImage).height(200).width(200).url() ||
                  undefined
                }
              />
              <div className={personTextStyle}>
                <div className={personNameStyle}>{person.name}</div>
                <div className={personTitleStyle}>{person.title}</div>
              </div>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
