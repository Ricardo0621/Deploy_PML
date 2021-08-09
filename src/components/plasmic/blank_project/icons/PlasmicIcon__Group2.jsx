// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group2Icon(props) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M0 25.14C0 37.569 9.027 47.904 20.833 50V31.944h-6.25V25h6.25v-5.556c0-6.25 4.027-9.721 9.723-9.721 1.804 0 3.75.277 5.554.554v6.39h-3.193c-3.057 0-3.75 1.527-3.75 3.473V25h6.666l-1.11 6.944h-5.556V50C40.973 47.904 50 37.57 50 25.14 50 11.312 38.75 0 25 0S0 11.313 0 25.14z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group2Icon;
/* prettier-ignore-end */
