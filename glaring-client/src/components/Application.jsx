/** @jsx jsx */

import React from "react";

import { css, jsx } from "@emotion/core";

import Topnav from "./Topnav";
import Sidebar from "./Sidebar/Index";
import GroupList from "./GroupList";
import EventsList from "./EventsList";

import {
  DatabaseProvider,
  useDataState,
  useDataDispatch,
} from "../hooks/useDatabase";
import useAppData from "../hooks/useAppData";
import EventForm from "./Event/EventForm";

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
  // const {
  //   state,
  //   setGroupData,
  //   getDirectoryData,
  //   addEventData,
  //   addGroupData,
  //   editEventData,
  //   editGroupData,
  //   removeGroup,
  //   removeEvent
  // } = useAppData();

  const state = useDataState();

  console.log(state);

  return (
    <body>
      <DatabaseProvider>
        <Topnav />
        <Sidebar
          groups={state.groups}
          // setGroup={setGroupData}
          // addGroup={addGroupData}
          // getDirectory={getDirectoryData}
          // removeGroup={removeGroup}
        />

        <Main>
          {state.current.view === "groups" && (
            <GroupList groups={state.groups} />
          )}
          {state.current.view === "events" && (
            <EventsList
              events={state.group_events}
              // addEvent={addEventData}
              // editEvent={editEventData}
              // delEvent={removeEvent}
            />
          )}
        </Main>
      </DatabaseProvider>
    </body>
  );
}
