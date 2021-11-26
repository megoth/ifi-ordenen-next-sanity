import { BiPhotoAlbum } from "react-icons/bi";

export default {
  name: "album",
  title: "Album",
  type: "document",
  icon: BiPhotoAlbum,
  fields: [
    {
      name: "name",
      title: "Navn",
      description: "Nødvendig",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      description: "Nødvendig",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "date",
      title: "Dato",
      type: "date",
    },
    {
      name: "images",
      title: "Bilder",
      type: "array",
      of: [{ type: "albumImage" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "slug.current",
      images: "images",
    },
    prepare(selection) {
      return {
        ...selection,
        media: selection.images?.[0]?.image || BiPhotoAlbum,
      };
    },
  },
};
