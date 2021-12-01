import React from "react";
import { AssociationQuery, getLogoStyle } from "../../../lib/api/associations";
import { imageBuilder } from "../../../lib/sanity";
import {
  associationStyle,
  textHasLogoStyle,
  textStyle,
  logoStyle,
} from "./styles.css";
import Link from "../../link";
import cn from "classnames";

interface Props {
  association: AssociationQuery;
}

export default function AssociationsItem({ association }: Props) {
  return (
    <li>
      <Link
        as={`/association/${association.slug}`}
        href="/association/[slug]"
        className={associationStyle}
        style={getLogoStyle(association)}
      >
        {association.logo && (
          <img
            src={imageBuilder(association.logo).url() || undefined}
            className={logoStyle}
          />
        )}
        <div
          className={cn(textStyle, {
            [textHasLogoStyle]: association.logo,
          })}
        >
          {association.name}
          {association.short ? ` (${association.short})` : ""}
        </div>{" "}
      </Link>
    </li>
  );
}
