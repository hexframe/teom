import { cvp } from "../utils/cvp";

export type ReButtonColor =
  "primary"
  | "secondary"
  | "danger";
export type ReButtonSize = "base" | "icon"; 
export interface ReButtonBaseProps {
  color?: ReButtonColor;
  size?: ReButtonSize;
}

export const buttonVariant = cvp({
  base: "btn",
  variants: {
    size: {
      base: "btn-base",
      icon: "btn-icon",
    },
    color: {
      primary: "btn-primary",
      secondary: "btn-secondary",
      danger: "btn-danger",
    },
  },
});
