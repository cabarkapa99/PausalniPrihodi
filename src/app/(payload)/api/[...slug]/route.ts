import config from "@payload-config";
import {
  REST_DELETE,
  REST_GET,
  REST_OPTIONS,
  REST_PATCH,
  REST_POST,
} from "@payloadcms/next/routes";
import type { SanitizedConfig } from "payload";

const payloadConfig = config as unknown as SanitizedConfig;

export const GET = REST_GET(payloadConfig);
export const POST = REST_POST(payloadConfig);
export const PATCH = REST_PATCH(payloadConfig);
export const DELETE = REST_DELETE(payloadConfig);
export const OPTIONS = REST_OPTIONS(payloadConfig);
