import { ClientConfig, createClient } from "next-sanity";
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const config: ClientConfig = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
};

const configuredSanityClient = sanityClient(config);
const builder = imageUrlBuilder(configuredSanityClient);

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
