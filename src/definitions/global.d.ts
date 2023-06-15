import { LANG } from "@configs/global";

export type Lang = (typeof LANG)[keyof typeof LANG];
