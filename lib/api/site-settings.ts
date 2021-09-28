import { getClient } from "../sanity";

export interface SiteSettingsPage {
  siteSettings?: SiteSettingsQuery;
}

export interface SiteSettingsQuery extends Sanity.Schema.SiteSettings {}

export async function getSiteSettings(
  preview: boolean
): Promise<SiteSettingsQuery> {
  return await getClient(preview)
    .fetch(
      `*[ _id == "siteSettings" ]{
    title,
    description,
  }`
    )
    .then((results) => results[0]);
}
