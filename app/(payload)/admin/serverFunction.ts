"use server";

import type { ServerFunctionClient } from "payload";
import config from "@payload-config";
import { handleServerFunctions } from "@payloadcms/next/layouts";
import { importMap } from "./importMap";

const adminConfig = Promise.resolve(config).then((cfg) => ({
  ...cfg,
  collections: cfg.collections ?? [],
  globals: cfg.globals ?? [],
  endpoints: cfg.endpoints ?? [],
}));

export async function serverFunction(
  args: Parameters<ServerFunctionClient>[0],
): Promise<Awaited<ReturnType<ServerFunctionClient>>> {
  return handleServerFunctions({
    ...args,
    config: adminConfig,
    importMap,
  });
}
