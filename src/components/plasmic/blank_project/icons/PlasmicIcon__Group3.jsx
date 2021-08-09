// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group3Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 46 46"}
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
          "M0 3.83A3.83 3.83 0 013.83 0H42a3.827 3.827 0 013.833 3.83V42a3.828 3.828 0 01-3.83 3.833H3.828A3.83 3.83 0 010 42.003V3.828zm18.142 13.645h6.206v3.117c.896-1.792 3.187-3.404 6.631-3.404 6.602 0 8.167 3.568 8.167 10.116v12.13h-6.681V28.795c0-3.73-.896-5.834-3.171-5.834-3.157 0-4.469 2.27-4.469 5.834v10.637h-6.683V17.475zM6.683 39.148h6.684v-21.96H6.683v21.959zm7.64-29.123a4.298 4.298 0 11-8.594.19 4.298 4.298 0 018.594-.19z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group3Icon;
/* prettier-ignore-end */
