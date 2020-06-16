/** @jsx jsx */

import React from "react";

import { css, jsx } from "@emotion/core";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar/Index";
import EventsList from "./EventsList/EventsList";
import GroupsList from "./GroupsList/Index";
import Login from "./Login/Index";
import "./Application.scss";

import { useDataState } from "../hooks/useDatabase";
import GroupForm from "./Sidebar/GroupForm";

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
  const state = useDataState();

  console.log(state);

  return (
    <body>
      {/* <DatabaseProvider> */}
      <NavBar />
      <Sidebar
        groups={state.groups}
        // setGroup={setGroupData}
        // addGroup={addGroupData}
        // getDirectory={getDirectoryData}
        // removeGroup={removeGroup}
      />

      <Main>
        {/* {state.current.view === "groups" && <GroupList groups={state.groups} />} */}
        {/* {<Login />} */}
        {state.current.view === "groups" && (
          <GroupsList groups={state.groups} />
        )}
        {/* {state.current.view === "groups" && <Group groups={state.groups} />} */}
        {state.current.view === "events" && (
          <EventsList events={state.group_events} />
        )}
      </Main>
      {/* </DatabaseProvider> */}
    </body>
  );
}
