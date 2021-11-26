import { getClient } from "../sanity";
import { LinkQuery } from "./link";

export interface SiteSettingsPage {
  siteSettings?: SiteSettingsQuery;
}

export interface SiteSettingsQuery
  extends Omit<Sanity.Schema.SiteSettings, "mainNav" | "subNav"> {
  mainNavItems: Array<LinkQuery>;
  subNavItems: Array<LinkQuery>;
}

export async function getSiteSettings(
  preview: boolean
): Promise<SiteSettingsQuery> {
  return await getClient(preview)
    .fetch(
      `*[ _id == "siteSettings" ]{
    title,
    description,
    "mainNavItems": mainNav -> items[]{
      text,
      "slug": navigationItemUrl.internalLink -> slug.current,
      "url": navigationItemUrl.externalUrl
    },
    "subNavItems": subNav -> items[]{
      text,
      "slug": navigationItemUrl.internalLink -> slug.current,
      "url": navigationItemUrl.externalUrl
    },
    footer
  }`
    )
    .then((results) => results[0]);
}
