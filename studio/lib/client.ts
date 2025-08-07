import { ClientConfig, createClient } from "next-sanity";

const config: ClientConfig = {
  dataset: process.env.SANITY_STUDIO_API_DATASET!,
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID!,
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: process.env.SANITY_STUDIO_API_VERSION,
};

export default createClient(config);
