// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function CiborcidIcon(props) {
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
          "M25 0C11.19 0 0 11.19 0 25s11.19 25 25 25 25-11.19 25-25S38.81 0 25 0zm-9.652 9.123c1.1 0 1.977.896 1.977 1.97a1.982 1.982 0 01-1.977 1.976 1.981 1.981 0 01-1.968-1.977c0-1.089.88-1.969 1.968-1.969zm-1.498 6.322h3.005V36.37H13.85V15.445zm7.423 0h8.12c7.732 0 11.134 5.533 11.134 10.474 0 5.373-4.199 10.467-11.093 10.467h-8.162l.001-20.94zm3.002 2.72v15.51h4.786c6.82 0 8.383-5.175 8.383-7.756 0-4.199-2.677-7.755-8.538-7.755h-4.631z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CiborcidIcon;
/* prettier-ignore-end */
