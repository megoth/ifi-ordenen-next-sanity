// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import blockContent from "./blockContent";
import title from "./title";
import association from "./association";
import award from "./award";
import person from "./person";
import source from "./source";
import event from "./event";
import siteSettings from "./siteSettings";
import page from "./page";
import buttonComponent from "./buttonComponent";
import buttonsComponent from "./buttonsComponent";
import textComponent from "./textComponent";
import navigation from "./navigation";
import link from "./link";
import navigationItem from "./navigationItem";
import dataComponent from "./dataComponent";
import dictionaryEntry from "./dictionaryEntry";
import album from "./album";
import albumImage from "./albumImage";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    person,
    association,
    title,
    award,
    event,
    source,
    siteSettings,
    page,
    buttonComponent,
    buttonsComponent,
    dataComponent,
    textComponent,
    link,
    navigationItem,
    navigation,
    dictionaryEntry,
    album,
    albumImage,
  ]),
});
