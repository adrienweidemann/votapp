import { LANG } from "@configs/global";

export type Lang = (typeof LANG)[keyof typeof LANG];

export interface GetAll<T> {
  count: number;
  data: T[];
}
