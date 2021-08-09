// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function FaBrandsresearchgateIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 50 50"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 3.125v43.75h50V3.125H0zm29.263 32.656c-.736.293-3.705.586-5.58-1.386-1.027-1.036-2.824-3.252-4.71-6.211-.993 0-1.64 0-2.388-.059v4.531c0 2.295.67 2.07 2.88 2.334v.791c-.77-.029-2.579-.078-3.974-.078-1.462 0-2.913.059-3.75.078v-.79c1.73-.284 2.455-.128 2.455-2.335V21.973c0-2.207-.714-2.051-2.455-2.334v-.791c2.88.097 5.926-.059 7.913-.059 3.538 0 6.239 1.406 6.239 4.453 0 2.06-1.864 4.121-4.375 4.639 1.518 2.363 3.348 4.453 4.71 5.752.803.761 1.92 1.435 3.035 1.435v.713zm2.556-13.183c-2.6 0-3.594-1.534-3.594-3.145V16.31c0-1.192.983-2.97 3.795-2.97 2.813 0 3.393 1.749 3.393 1.749l-1.194.703s-.614-1.22-2.199-1.22c-.882 0-2.199.712-2.199 1.923v2.617c0 1.309.737 2.276 1.998 2.276 1.574 0 2.4-1.065 2.4-2.617H32.22v-1.045h3.393c0 2.002.524 4.873-3.795 4.873zm-13.002 4.365c-1.05 0-1.518-.03-2.232-.078v-6.807c.714-.058 1.674-.058 2.511-.058 2.6 0 4.152 1.19 4.152 3.369 0 2.138-1.674 3.574-4.431 3.574z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FaBrandsresearchgateIcon;
/* prettier-ignore-end */
