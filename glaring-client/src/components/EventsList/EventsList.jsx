/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import Event from "./Event";
import EventForm from "./Form";
import { useState } from "react";
import { useDataState } from "../../hooks/useDatabase";

export default function EventsList(props) {
  const { group, events } = props;
  console.log(events);
  const state = useDataState();

  const [form, setForm] = useState(false);

  const Header = (props) => (
    <header
      css={css`
        margin: 0;
        padding-left: 20px;
        height: 150px;
        width: calc(100vw - 200px);
        background-color: ${props.colour};
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 40px;
        line-height: 0.8;
        border-bottom: 4px solid #333;
      `}
    >
      <h1
        css={css`
          margin: 0;
          width: calc(100% - 120px);
        `}
      >
        {props.name}
      </h1>
      <button
        onClick={(event) => setForm(true)}
        css={css`
          font-size: 60px;
          height: 100%;
          border-style: none;
          border-left: 4px solid #5d53d2;
          padding: 0;
          width: 120px;
          background-color: white;
          &:hover {
            background-color: #333;
            color: ${props.colour};
          }
        `}
      >
        ++
      </button>
    </header>
  );

  const isGoing = (event_id) => {
    const reservations = state.current.user.reservations;
    if (reservations) {
      console.log("fire! +++ " + event_id);
      console.log(reservations);
      for (let entry of reservations) {
        if (entry.event_id === event_id) {
          console.log("isGoing?" + entry.going);
          return entry.going;
        }
      }
    }
  };

  const eventsList = events.map((element) => {
    const {
      id,
      name,
      description,
      location,
      start_time,
      end_time,
      photo,
    } = element;
    console.log(id);

    return (
      <Event
        key={id}
        id={id}
        name={name}
        description={description}
        location={location}
        start_time={start_time}
        end_time={end_time}
        photo={photo}
        going={isGoing(id)}
        init="SHOW"
      />
    );
  });

  return (
    // <Event init={"CREATE"} />
    <ul
      css={css`
        list-style: none;
        margin: 0;
        padding: 0;
        background-color: white;
      `}
    >
      <Header name={group.name} colour={group.colour} />
      {form && <EventForm setForm={setForm} />}
      {eventsList}
    </ul>
  );
}
