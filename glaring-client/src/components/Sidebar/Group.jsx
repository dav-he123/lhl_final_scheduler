/**@jsx jsx */

import React from "react";
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";

// import Button from "../components/Button";


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

const Button = styled.button`
  padding: 0;
  background: none;
  border: none;
  width: 15%;
  height: 100%;

  &:hover {
    color: red;
  }
`;
const Div = (props) => (
  <div
    css={css`
      display: flex;
      flex-direction: row;
      justify-content: right;
      align-items: center;
      width: 100%;
      height: 30px;
      background-color: ${props.color};

      &:hover {
        color: white;
      }
    `}
    {...props}
  />
);

export default function NavGroup(props) {

  const { color, id, cancel, name, setCurrentGroup } = props;


  return (
    <Div color={color}>
      {/* <Text>++ GROUP! ++</Text> */}
      
      <Button onClick={()=>setCurrentGroup(name)}>++ GROUP! ++</Button>

      {/* <Button onclick={()=>setCurrentGroup(name)} > {name} </Button> */}
      {/* <Text> {name} </Text> */}

      <Button onClick={cancel}>X</Button>
    </Div>
  );
}
