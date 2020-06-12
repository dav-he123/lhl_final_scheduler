/**@jsx jsx */

import React from "react";

import { jsx, css } from "@emotion/core";

import styled from "@emotion/styled";

const Text = (props) => (
  <p
    css={css`
      display: block;
      margin: 0;
      width: 85%;
      text-align: center;
    `}
    {...props}
  />
);

const Button = (props) => (
  <button
    css={css`
      padding: 0;
      background: none;
      border: none;
      width: 15%;
      height: 100%;

      &:hover {
        color: red;
      }
    `}
    {...props}
  />
);
const Div = (props) => (
  <div
    css={css`
      display: flex;
      flex-direction: row;
      justify-content: right;
      align-items: center;
      width: 100%;
      height: 30px;
      background-color: ${props.colour};
      ${props.colour === "black" && "color: white;"}

      &:hover {
        ${(props.colour === "black" &&
          "background-color: grey; color: black;") ||
          "color: white;"}
      }
    `}
    {...props}
  />
);

export default function NavGroup(props) {
  const { colour, name, button, setGroup, key, id } = props;

  return (
    <Div colour={colour} onClick={(event) => setGroup(id)}>
      <Text>{name}</Text>
      <Button>{button || "X"}</Button>
    </Div>
  );
}
