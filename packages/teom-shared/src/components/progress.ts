import { cvp } from "../utils/cvp";

export interface ReProgressBaseProps {
  max?: number;
  min?: number;
  value?: number;
}

export const progressVariant = cvp({
  slots: {
    root: "pgs-root",
    indicator: "pgs-indicator",
  },
});
