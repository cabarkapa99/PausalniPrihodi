import configPromise from "@payload-config";
import { getPayload } from "payload";
import type { SanitizedConfig } from "payload";

let cachedPayload: Awaited<ReturnType<typeof getPayload>> | null = null;

export const getPayloadClient = async () => {
  if (!cachedPayload) {
    cachedPayload = await getPayload({
      config: configPromise as unknown as Promise<SanitizedConfig>,
    });
  }
  return cachedPayload;
};
