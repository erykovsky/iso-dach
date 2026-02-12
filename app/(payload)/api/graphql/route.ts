import config from "@payload-config";
import { GRAPHQL_PLAYGROUND_GET, GRAPHQL_POST } from "@payloadcms/next/routes";

const graphqlConfig = Promise.resolve(config).then((cfg) => ({
  ...cfg,
  collections: cfg.collections ?? [],
  globals: cfg.globals ?? [],
  endpoints: cfg.endpoints ?? [],
}));

export const GET = GRAPHQL_PLAYGROUND_GET(graphqlConfig);
export const POST = GRAPHQL_POST(graphqlConfig);
