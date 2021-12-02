import React from "react";
import { AssociationQuery } from "../../../lib/api/associations";
import Masonry from "react-masonry-css";
import { masonryGridColumnStyle, masonryStyle } from "./styles.css";
import AssociationsItem from "./associations-item";

interface Props {
  associations: Array<AssociationQuery>;
}

export default function AssociationsList({ associations }: Props) {
  const breakpointCols = {
    default: 4,
    959: 3,
    599: 2,
  };
  return (
    <Masonry
      breakpointCols={breakpointCols}
      className={masonryStyle}
      columnClassName={masonryGridColumnStyle}
    >
      {associations.map((association) => (
        <AssociationsItem association={association} key={association.slug} />
      ))}
    </Masonry>
  );
}
