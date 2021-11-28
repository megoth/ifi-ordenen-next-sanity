import S from "@sanity/desk-tool/structure-builder";
import { FiSettings } from "react-icons/fi";

export default () =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Innstillinger")
        .icon(FiSettings)
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !["siteSettings"].includes(listItem.getId())
      ),
    ]);
