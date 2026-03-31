import config from "@payload-config";
import { RootPage } from "@payloadcms/next/views";
import type { SanitizedConfig } from "payload";

import { importMap } from "../importMap";

type Args = {
  params: Promise<{ segments: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] }>;
};

export default async function Page({ params, searchParams }: Args) {
  return RootPage({
    config: Promise.resolve(config as unknown as SanitizedConfig),
    importMap,
    params,
    searchParams,
  });
}
