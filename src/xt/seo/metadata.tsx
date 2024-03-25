import { Metadata } from "next";
import xtConfig from "@/xt/lib/config";

export const root: Metadata = {
  title: xtConfig.appName,
  description: xtConfig.appDescription,
};
