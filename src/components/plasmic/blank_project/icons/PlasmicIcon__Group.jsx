// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function GroupIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 48 39"}
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
          "M47.304 4.561a19.435 19.435 0 01-5.573 1.528A9.729 9.729 0 0045.998.718a19.374 19.374 0 01-6.163 2.354 9.708 9.708 0 00-16.537 8.854A27.56 27.56 0 013.294 1.784a9.7 9.7 0 00-1.313 4.88 9.709 9.709 0 004.317 8.079 9.681 9.681 0 01-4.396-1.215v.125a9.708 9.708 0 007.785 9.517 9.776 9.776 0 01-4.383.166 9.71 9.71 0 009.067 6.738A19.474 19.474 0 012.317 34.23c-.775 0-1.548-.045-2.317-.135a27.447 27.447 0 0014.875 4.36c17.854 0 27.615-14.787 27.615-27.612 0-.417-.01-.838-.03-1.254a19.73 19.73 0 004.84-5.021l.004-.006z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */
