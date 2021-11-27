import React, { Fragment } from "react";
import { DictionaryEntryQuery } from "../../lib/api/dictionary";
import Container from "../container";
import { termStyle } from "./styles.css";
import TextBlock from "../text-block";

interface Props {
  dictionaryEntries: Array<DictionaryEntryQuery>;
}

export default function DictionaryEntries({ dictionaryEntries }: Props) {
  return (
    <Container>
      <dl>
        {dictionaryEntries.map(({ name, slug, description }) => (
          <Fragment key={slug}>
            <dt id={slug} className={termStyle}>
              {name}
            </dt>
            <dd>
              <TextBlock text={description} />
            </dd>
          </Fragment>
        ))}
      </dl>
    </Container>
  );
}
