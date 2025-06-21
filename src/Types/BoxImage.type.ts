import type { ReactElement } from "react";

export interface BoxImageProps {
  ImageURL: string;
  Width: string;
  isText: boolean;
  Height: string;
  children: ReactElement;
}
