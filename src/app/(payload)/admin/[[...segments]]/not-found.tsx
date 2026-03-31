import config from "@payload-config";
import { NotFoundPage } from "@payloadcms/next/views";
import type { SanitizedConfig } from "payload";

import { importMap } from "../importMap";

type Args = {
  params: Promise<{ segments: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] }>;
};

const NotFound = ({ params, searchParams }: Args) =>
  NotFoundPage({
    config: Promise.resolve(config as unknown as SanitizedConfig),
    importMap,
    params,
    searchParams,
  });

export default NotFound;
