/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

export default function GroupListItem(props) {
  return (
    <li
      css={css`
        background-color: white;
        list-style: none;
        margin: 20px;
        padding: 0;
        width: 450px;
        height: 400px;
      `}
      onClick={() => props.setGroup(props.name)} //onClick used to handle item click event that sets the day
      data-testid="group"
    >
      <h2 className>{props.name}</h2>
      <h3 className="text--light"></h3>
    </li>
  );
}
