/** @jsx jsx */

import React from "react";
// import axios from "axios";
// import Testbed from "./Testbed.jsx";
// import Button from "./Button.js";

import { css, jsx } from "@emotion/core";

import Topnav from "./Topnav";
import Sidebar from "./Sidebar/Index";
import GroupList from "./GroupList";
import EventsList from "./EventsList";

import useAppData from "../hooks/useAppData";

const Main = (props) => (
  <main
    css={css`
      margin: 0;
      padding: 0;
      width: calc(100% - 200px);
      position: relative;
      left: 200px;
      background-color: black;
    `}
    {...props}
  />
);

export default function Application() {
  const { state, setGroupData } = useAppData();

  return (
    <body>
      <Topnav />
      <Sidebar groups={state.groups} setGroup={setGroupData} />
      <Main>
        <EventsList events={state.group_events} />
        {/* <GroupList groups={state.groups} setGroup={setGroupData} /> */}
      </Main>
    </body>
  );
}
