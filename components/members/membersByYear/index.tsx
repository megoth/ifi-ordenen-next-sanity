import React, { useEffect, useState } from "react";
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
} from "../styles.css";
import { imageBuilder } from "../../../lib/sanity";
import Link from "../../link";
import { useRouter } from "next/router";
import cn from "classnames";
import TextBlock from "../../text-block";
import Button from "../../button";

interface Props {
  members: Array<PersonForListQuery>;
}

export default function MembersByYear({ members }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const [hidden, setHidden] = useState<string | null>(null);
  const usernames = members.map(({ slug }) => slug);
  const router = useRouter();
  useEffect(() => {
    const newSelected = router.asPath.substring(router.pathname.length + 1);
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
  }, [router]);
  return (
    <ul className={listStyle}>
      {members.map((person) => (
        <li
          className={cn(listItemStyle, {
            [personSelectedStyle]: selected === person.slug,
            [personHiddenStyle]: hidden === person.slug,
          })}
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
                <Link href={"/person"} className={personSelectedCloseStyle}>
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
            <Link href={`/person#${person.slug}`} className={personLinkStyle}>
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
