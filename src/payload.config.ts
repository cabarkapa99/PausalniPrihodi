import configModule from "../payload.config.mjs";
import type { SanitizedConfig } from "payload";

const config =
  typeof configModule === "object" && configModule !== null && "default" in configModule
    ? (configModule.default ?? configModule)
    : configModule;

export default config as SanitizedConfig;
