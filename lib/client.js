import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "lrnanal4",
  dataset: "production",
  apiVersion: "2023-01-06",
  useCdn: true,
  token: process.env.NEST_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
