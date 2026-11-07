import { ClientConfig, createClient } from "next-sanity";
import { createClient as createSanityClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

const config: ClientConfig = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
};

const configuredSanityClient = createSanityClient(config);
const builder = createImageUrlBuilder(configuredSanityClient);

export const imageBuilder = (source: SanityImageSource) =>
  builder.image(source);
export const client = createClient(config);
export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
});

export const getClient = (usePreview: boolean) =>
  usePreview ? previewClient : client;
export default client;
