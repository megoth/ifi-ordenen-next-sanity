import React, { useEffect, useState } from "react";
import { PersonForListQuery } from "../../../lib/api/people";
import {
  listItemStyle,
  listStyle,
  personImageStyle,
  personLinkStyle,
  personNameStyle,
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
  const router = useRouter();
  useEffect(() => {
    setSelected(router.asPath.substring(router.pathname.length + 1));
  }, [router]);
  return (
    <ul className={listStyle}>
      {members.map((person) => (
        <li
          className={cn(listItemStyle, {
            [personSelectedStyle]: selected === person.slug,
          })}
        >
          {selected === person.slug ? (
            <div>
              <div
                className={personSelectedImageStyle}
                style={{
                  backgroundImage: `url(${
                    imageBuilder(person.mainImage)
                      .height(280)
                      .width(300)
                      .url() || undefined
                  })`,
                }}
              />
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
                  imageBuilder(person.mainImage).height(150).width(150).url() ||
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
