import React from "react";
import { AssociationQuery } from "../../../lib/api/associations";
import Link from "next/link";

interface Props {
  association: AssociationQuery;
}

export default function AssociationsItem({ association }: Props) {
  return (
    <li>
      <Link as={`/association/${association.slug}`} href="/association/[slug]">
        <a>
          {association.name}
          {association.short ? ` (${association.short})` : ""}
        </a>
      </Link>
    </li>
  );
}
