import { useState, useEffect, createContext } from "react";
import axios from "axios";

export default function useAppData() {
  const [state, setState] = useState({
    current: { user: [], group: [], event: [], view: "" },

    users: [],
    groups: [],
    group_events: [],
    memberships: [],
    reservations: [],
  });

  useEffect(() => {
    // INIT DATA ON LANDING
    Promise.all([axios.get("/api/users"), axios.get("/api/groups")]).then(
      (all) => {
        const [users, groups] = all;
        setState((prev) => ({
          ...prev,
          users: users.data,
          groups: groups.data,
        }));
      }
    );
  }, []);

  async function setGroupData(group_id) {
    const events = await axios.get(`/api/groups/${group_id}/events`);
    const newEvents = events.data
    const group = state.groups[group_id - 1];
    setState((prev) => ({
      ...prev,
      current: { group: group, view: "events" },
      group_events: newEvents,
      // memberships,
      // reservations,
    }));
  }

  async function getDirectoryData() {
    setState((prev) => ({ ...prev, current: { view: "groups" } }));
  }

  async function addGroupData(group) {
    const newGroup = await axios.post(`/api/groups`, group);

    const newGroups = [...state.groups, await newGroup.data.group];
    setState((prev) => ({
      ...prev,
      groups: newGroups,
      group_events: newGroup.data.id,
    }));
  }

  async function editGroupData(group_id, group) {
    const newGroup = await axios.patch(`/api/groups/${group_id}`, group);
    const newGroups = [...state.groups, await newGroup.data.group];
    setState((prev) => ({
      ...prev,
      groups: newGroups,
      group_events: newGroup.data.id,
    }));
  }

  async function removeGroup(id) {
    try {
      await axios.delete(`api/groups/${id}`);
      const newGroups = state.groups.filter((group) => group.id !== id);
      setState((prev) => ({
        ...prev,
        groups: newGroups,
      }));
    } catch (err) {
      alert(err);
    }
  }

  async function addEventData(event) {
    try {
      const newEvent = await axios.post(`/api/events`, event);
      const newEvents = [...state.group_events, newEvent];
      setState((prev) => ({ ...prev, group_events: newEvents }));
    } catch (err) {
      alert(err);
    }
  }

  async function editEventData(event_id, event) {
    try {
      const newEvent = await axios.patch(`/api/events/${event_id}`, event);
      const newEvents = [...state.group_events, newEvent];
      setState((prev) => ({ ...prev, group_events: newEvents }));
    } catch (err) {
      alert(err);
    }
  }

  async function removeEvent(event_id) {
    try {
      await axios.delete(`api/events/${event_id}`);
      const newEvents = state.group_events.filter(
        (event) => event.id !== event_id
      );
      setState((prev) => ({ ...prev, group_events: newEvents }));
    } catch (err) {
      alert(err);
    }
  }

  // THIS IS EXPERIMENTAL:
  const groupDataReducer = (action, payload) => {
    switch (action) {
      case "ADD":
        return addGroupData(payload);
      case "EDIT":
        return editGroupData(payload);
      case "DELETE":
        return removeGroup(payload);
    }
  };

  const eventDataReducer = (action, payload) => {
    switch (action) {
      case "ADD":
        return addEventData(payload);
      case "EDIT":
        return editEventData(payload);
      case "DELETE":
        return removeEvent(payload);
    }
  };

  // const userDataReducer = (action, payload) => {
  //   switch (action) {
  //     case "ADD":
  //       return addUserData(payload);
  //     case "EDIT":
  //       return editUserData(payload);
  //     case "DELETE":
  //       return removeUser(payload);
  //   }
  // };

  return {
    state,
    setGroupData,
    getDirectoryData,
    addGroupData,
    addEventData,
    editGroupData,
    editEventData,
    removeGroup,
    removeEvent
  };
}
