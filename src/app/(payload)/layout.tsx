import config from "@payload-config";
import "@payloadcms/next/css";
import { RootLayout, handleServerFunctions } from "@payloadcms/next/layouts";
import type { ReactNode } from "react";
import type { SanitizedConfig, ServerFunctionClient } from "payload";

import { importMap } from "./admin/importMap";
import "./custom.scss";

const payloadConfig = config as unknown as SanitizedConfig;

const serverFunction: ServerFunctionClient = async (args) => {
  "use server";
  return handleServerFunctions({
    ...args,
    config: payloadConfig,
    importMap,
  });
};

export default async function PayloadLayout({
  children,
}: {
  children: ReactNode;
}) {
  return RootLayout({
    children,
    config: Promise.resolve(payloadConfig),
    importMap,
    serverFunction,
  });
}
