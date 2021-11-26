import React, { Fragment } from "react";
import { DictionaryEntryQuery } from "../lib/api/dictionary";
import BlockContent from "@sanity/block-content-to-react";

interface Props {
  dictionaryEntries: Array<DictionaryEntryQuery>;
}

export default function DictionaryEntries({ dictionaryEntries }: Props) {
  return (
    <dl>
      {dictionaryEntries.map(({ name, slug, description }) => (
        <Fragment key={slug}>
          <dt id={slug}>{name}</dt>
          <dd>
            <BlockContent
              blocks={description}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            />
          </dd>
        </Fragment>
      ))}
    </dl>
  );
}
