import type { ReactNode } from "react";

export interface SectionsProps {
  Title: string;
  GridColumns: number;
  children: ReactNode;
  isAllDataBtn: boolean;
}
