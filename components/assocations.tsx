import React from "react";
import { AssociationQuery } from "../lib/api/associations";
import Link from "next/link";

interface Props {
  associations: Array<AssociationQuery>;
}

export default function Associations({ associations }: Props) {
  return (
    <div>
      <h2 className="text-3xl">Aktive foreninger</h2>
      <ul className="list-disc">
        {associations
          ?.filter(({ active }) => active)
          .map((association) => (
            <li key={association.slug}>
              <Link
                as={`/association/${association.slug}`}
                href="/association/[slug]"
              >
                <a className="hover:underline">{association.name}</a>
              </Link>
            </li>
          ))}
      </ul>
      <h2 className="text-3xl">Tidligere foreninger eller foreningsnavn</h2>
      <ul className="list-disc">
        {associations
          ?.filter(({ active }) => !active)
          .map((association) => (
            <li key={association.slug}>
              <Link
                as={`/association/${association.slug}`}
                href="/association/[slug]"
              >
                <a className="hover:underline">{association.name}</a>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
