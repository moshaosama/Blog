import type { ReactElement } from "react";

export interface PostDetailInfoProps {
  ImageUrl: string;
  Width: string;
  Height: string;
  Header: string;
  textAnimation: ReactElement;
  Date?: string;
  flexDirection: string;
}
