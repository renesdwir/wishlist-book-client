declare module "@smastrom/react-rating" {
  import { ComponentType } from "react";

  interface RatingProps {
    value: number;
    readOnly: boolean;
    style: React.CSSProperties;
  }

  export const Rating: ComponentType<RatingProps>;
}
