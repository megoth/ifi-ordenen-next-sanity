import React from "react";
import { NextPageContext } from "next";
import { getPageUpdates, PageUpdateQuery } from "../lib/api/page-updates";
import { getSiteSettings, SiteSettingsQuery } from "../lib/api/site-settings";

const pageUpdatesRssXml = (pageUpdates: Array<PageUpdateQuery>) => {
  let latestPostDate: string = "";
  let rssItemsXml = "";
  pageUpdates.forEach((update) => {
    const postDate = Date.parse(update.created);
    if (!latestPostDate || postDate > Date.parse(latestPostDate)) {
      latestPostDate = update.created;
    }
    rssItemsXml += `
      <item>
        <title>${update.description}: ${update.name}</title>
        <link>
          ${update.url}
        </link>
        
        <pubDate>${update.created}</pubDate>
        <description>
        <![CDATA[${update.description}: ${update.name}]]>
        </description>
    </item>`;
  });
  return {
    rssItemsXml,
    latestPostDate,
  };
};

const getRssXml = (
  pageUpdates: Array<PageUpdateQuery>,
  siteSettings: SiteSettingsQuery
) => {
  const { rssItemsXml, latestPostDate } = pageUpdatesRssXml(pageUpdates);
  return `<?xml version="1.0" ?>
  <rss version="2.0">
    <channel>
        <title>RSS for ${siteSettings.title}</title>
        <link>https://ordenen.ifi.uio.no</link>
        <description>${siteSettings.description}</description>
        <language>no</language>
        <lastBuildDate>${latestPostDate}</lastBuildDate>
        ${rssItemsXml}
    </channel>
  </rss>`;
};

export default class Rss extends React.Component {
  static async getInitialProps({ res }: NextPageContext) {
    if (!res) {
      return;
    }
    const [pageUpdates, siteSettings] = await Promise.all([
      getPageUpdates(false),
      getSiteSettings(false),
    ]);
    res.setHeader("Content-Type", "text/xml");
    res.write(getRssXml(pageUpdates, siteSettings));
    res.end();
  }
}
