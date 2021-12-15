import React, { useContext } from "react";
import { PersonForListQuery } from "../../../../lib/api/people";
import cn from "classnames";
import { imageBuilder } from "../../../../lib/sanity";
import TextBlock from "../../../text-block";
import Button from "../../../button";
import PeopleContext from "../../../../contexts/peopleContext";
import {
  listItemStyle,
  personButtonStyle,
  personHiddenStyle,
  personImageStyle,
  personNameStyle,
  personSelectedCloseInnerStyle,
  personSelectedCloseStyle,
  personSelectedDescriptionStyle,
  personSelectedImageStyle,
  personSelectedStyle,
  personTextStyle,
  personTitleStyle,
} from "./styles.css";

interface Props {
  person: PersonForListQuery;
}

export default function MembersListItem({ person }: Props) {
  const {
    hidden,
    username: selected,
    toggleUsername,
  } = useContext(PeopleContext);
  const selectUsername = (event) => {
    event.preventDefault();
    toggleUsername(person.slug);
  };
  return (
    <li
      className={cn(listItemStyle, {
        [personSelectedStyle]: selected === person.slug,
        [personHiddenStyle]: hidden === person.slug,
      })}
      key={person.slug}
      id={person.slug}
    >
      {selected === person.slug ? (
        <div>
          <div
            className={personSelectedImageStyle}
            style={{
              backgroundImage: `url(${
                imageBuilder(person.mainImage).height(350).width(400).url() ||
                undefined
              })`,
            }}
          >
            <Button
              className={personSelectedCloseStyle}
              onClick={selectUsername}
            >
              <span className={personSelectedCloseInnerStyle}>✖</span>
            </Button>
          </div>
          <div className={personSelectedDescriptionStyle}>
            <TextBlock text={[person.titles[0].description[0]]} />
            <Button href={`/person/${person.slug}`} variant={"on-green"}>
              Les hele begrunnelsen
            </Button>
          </div>
        </div>
      ) : (
        <Button
          className={personButtonStyle}
          onClick={selectUsername}
          variant="transparent"
        >
          <img
            alt={`Cover Image for ${person.name}`}
            className={personImageStyle}
            src={
              imageBuilder(person.mainImage).height(275).width(275).url() ||
              undefined
            }
          />
          <div className={personTextStyle}>
            <div className={personNameStyle}>{person.name}</div>
            <div className={personTitleStyle}>
              {person.titles[0].title.name}
            </div>
          </div>
        </Button>
      )}
    </li>
  );
}
