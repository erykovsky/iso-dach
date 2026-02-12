import config from "@payload-config";
import {
  REST_DELETE,
  REST_GET,
  REST_OPTIONS,
  REST_PATCH,
  REST_POST,
  REST_PUT,
} from "@payloadcms/next/routes";

const restConfig = Promise.resolve(config).then((cfg) => ({
  ...cfg,
  collections: cfg.collections ?? [],
  globals: cfg.globals ?? [],
  endpoints: cfg.endpoints ?? [],
}));

export const GET = REST_GET(restConfig);
export const POST = REST_POST(restConfig);
export const DELETE = REST_DELETE(restConfig);
export const PATCH = REST_PATCH(restConfig);
export const PUT = REST_PUT(restConfig);
export const OPTIONS = REST_OPTIONS(restConfig);
