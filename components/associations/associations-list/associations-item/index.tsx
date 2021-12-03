import React, { useEffect, useRef, useState } from "react";
import {
  AssociationQuery,
  getLogoStyle,
} from "../../../../lib/api/associations";
import { imageBuilder } from "../../../../lib/sanity";
import {
  associationStyle,
  textHasLogoStyle,
  textStyle,
  logoStyle,
  logoIsHighStyle,
} from "./styles.css";
import Link from "../../../link";
import cn from "classnames";

interface Props {
  association: AssociationQuery;
}

export default function AssociationsItem({ association }: Props) {
  const image = useRef(null);
  const [isHigher, setIsHigher] = useState<boolean>(false);
  useEffect(() => {
    setIsHigher(image?.current?.height > image?.current?.width);
  }, [image]);
  return (
    <div>
      <Link
        as={`/association/${association.slug}`}
        href="/association/[slug]"
        className={associationStyle}
        style={getLogoStyle(association)}
      >
        {association.logo && (
          <div
            className={cn(logoStyle, {
              [logoIsHighStyle]: isHigher,
            })}
          >
            <img
              src={imageBuilder(association.logo).url() || undefined}
              ref={image}
            />
          </div>
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
    </div>
  );
}
