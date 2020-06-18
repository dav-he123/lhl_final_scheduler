import React from "react";
import "./RegistrationForm.scss";
import Button from "./ButtonRegistration";
import { useDataDispatch } from "../../hooks/useDatabase";
import { useForm } from "react-hook-form";

export default function Registration() {
  const callDatabase = useDataDispatch();
  const { handleSubmit, register, errors } = useForm();

  async function onSubmit(data) {
    console.log(data);
    await callDatabase("REGISTER", data);
  }

  return (
    <form
      name="registration"
      onSubmit={handleSubmit(onSubmit)}
      className="main"
    >
      <main className="register">
        <div className="register__top">
          <div className="register__title">Register Here</div>
        </div>

        <div className="register__content">
          <img
            className="register__image"
            src="https://res.cloudinary.com/teepublic/image/private/s--mKVtE5Jo--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1544483374/production/designs/3703099_0.jpg"
          />

          <br />

          <label for="userName">Name: </label>
          <input
            id="groupName"
            className="creation__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Name"
            ref={register}
          />

          <br />
          <br />

          <label for="userEmail">Email: </label>
          <input
            className="creation__create-input text--semi-bold"
            name="email"
            type="email"
            placeholder="Enter Email"
            ref={register}
          />

          <br />
          <br />

          <label for="userPassword">Password:</label>
          <input
            id="groupDescription"
            className="creation__create-input text--semi-bold"
            name="password"
            type="password"
            placeholder="Enter Password"
            ref={register}
          />
        </div>

        <div className="register__bottom">
          <div className="register__bottom--button">
            <Button type="submit">Register</Button>
          </div>
        </div>
      </main>
    </form>
  );
}
