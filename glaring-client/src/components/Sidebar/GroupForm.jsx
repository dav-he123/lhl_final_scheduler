/**@jsx jsx */

import React, { useState } from "react";
import { css, jsx } from "@emotion/core";
import { useForm } from "react-hook-form";
import { useDataDispatch } from "../../hooks/useDatabase";
import { SketchPicker } from "react-color";

const GroupFormButton = (props) => {
  const { color, name } = props;
  return (
    <button
      css={css`
        display: inline-block;
        border: none;
        position: relative;
        bottom: 0;
        color: white;
        background-color: ${color};
        width: 50%;
        height: 45px;

        &:hover {
          background-color: white;
          color: ${color};
        }
      `}
      {...props}
    >
      {name}
    </button>
  );
};

export default function GroupForm(props) {
  const { register, handleSubmit, errors } = useForm();

  const callDatabase = useDataDispatch();

  const [colour, setColour] = useState({
    visible: false,
    value: "#666",
  });

  // const handleChangeComplete = (color) => {
  //   setColour({...colour, value: color.hex});
  // }

  const { action } = props;

  async function onSubmit(data) {
    console.log(data);
    if (data) await callDatabase("ADDGROUP", { ...data, colour: colour.value });
    console.log("WE DID IT");
    action();
    // await addEvent(data);
    // setDisplay("display: none;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        css={css`
          z-index: 9;
          height: calc(100vh - 85px);
          width: 200px;
          background-color: ${colour.value};
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          flex-direction: column;
          align-items: left;
          justify-content: top;

          & input {
            border-style: none;
            background-color: #888;
          }
        `}
      >
        <div
          css={css`
            height: 50%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
          `}
        >
          <div>
            <label htmlFor="name">NAME: </label>
            <input
              type="text"
              name="name"
              placeholder="Enter group name"
              ref={register({
                required: "Required",
              })}
            />

            {errors.name && errors.name.type === "required" && (
              <span
                css={css`
                  background-color: white;
                  color: red;
                  font-size: 30px;
                `}
              >
                Name field cannot be empty
              </span>
            )}
          </div>

          <div>
            <label htmlFor="details">DETAILS: </label>
            <input
              type="text"
              name="description"
              placeholder="Describe your group!"
              ref={register({
                required: true,
              })}
            />
            {errors.description && errors.description.type === "required" && (
              <span>Description field cannot be empty</span>
            )}
          </div>
          <div>
            <label htmlFor="photo">UPLOAD PIC: </label>
            <input
              type="url"
              name="photo"
              placeholder="URL of Group photo"
              ref={register({
                required: "Required",
                pattern: {
                  message: "Group Photo Required",
                },
              })}
            />
            {errors.photo && errors.photo.type === "required" && (
              <span>You must submit a group photo link</span>
            )}
          </div>
          <div>
            <label htmlFor="colour">CHOOSE A COLOUR: </label>
            <input
              type="button"
              name="colour"
              placeholder="colour picker"
              onClick={() => setColour({ ...colour, visible: !colour.visible })}
            />
            {colour.visible && (
              <SketchPicker
                css={css`
                  position: relative;
                  left: 100%;
                  top: 0;
                  border: none;
                  color: white;
                  background-color: black;
                `}
                color={colour.value}
                onChange={(color) => setColour({ ...colour, value: color.hex })}
              />
            )}
          </div>
        </div>

        <div
          css={css`
            position: absolute;
            bottom: 0vh;
            right: 0;
            width: 100%;
          `}
        >
          <GroupFormButton
            type="button"
            color="teal"
            name="CANCEL"
            onClick={() => action()}
          />
          <GroupFormButton type="submit" color="black" name="SUBMIT" />
        </div>
      </div>
    </form>
  );
}
