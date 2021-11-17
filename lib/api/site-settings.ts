import { getClient } from "../sanity";

export interface SiteSettingsPage {
  siteSettings?: SiteSettingsQuery;
}

export interface NavigationItem {
  text: string;
  slug: string;
}

export interface SiteSettingsQuery
  extends Omit<Sanity.Schema.SiteSettings, "mainNav" | "subNav"> {
  mainNavItems: Array<NavigationItem>;
  subNavItems: Array<NavigationItem>;
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
      "slug": navigationItemUrl.internalLink -> slug.current
    },
    "subNavItems": subNav -> items[]{
      text,
      "slug": navigationItemUrl.internalLink -> slug.current
    }
  }`
    )
    .then((results) => results[0]);
}
