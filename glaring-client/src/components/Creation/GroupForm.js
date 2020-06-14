import React, { useState } from "react";
// import Button from "../Button.js";
import "./GroupForm.scss";
import { useForm } from 'react-hook-form';
import { css, jsx } from "@emotion/core";
import Button from "./ButtonGroupForm";


export default function GroupForm(props) {
  const [name, setName] = useState(props.name || ""); //need to keep track of information for the name by using useState
  const [image, setImage] = useState(null);
  const { addGroup, mode } = props;
  const [display, setDisplay] = useState("display: flex;");
  const {register, handleSubmit, errors } = useForm();
   async function onSubmit (data) {
    // await addGroup(data);
    // setDisplay("display: none;")
    console.log(data)
  }

    function submitGroupForm() {
    console.log("Submit Group Form AAAAAAAAAAA");
  }


  return (

   <form css={css`${display}`}className="groupform" onSubmit={handleSubmit(onSubmit)}>
 
       <div className="groupform__top">       
        <div className="groupform__content">
        <label for="groupName">Group Name: </label>
          <input 
            id="groupName"
            className="creation__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Group Name"
            ref={register}
            /*
          This must be a controlled component
        */
          />
        </div>
      </div> 

        <br/>
        <br/>
     <label for="groupDescription">Group Description: </label>
            <input
            id="groupDescription"
            className="creation__create-input text--semi-bold"
            name="description"
            type="text"
            placeholder="Enter Group Description"
            ref={register}
            /*
          This must be a controlled component
        */
          />
    <br/>
    <br/>

    <br/>
    <br/>

    <input type="url" name="photo" placeholder="Group image url" ref={register} />
      {image && <img src = {image}/>}
    <br/>
    <br/>
    
        <div className="groupform__attend--reso">
              <div >
              <input type="submit"/>
                <Button confirm onClick={submitGroupForm}>Submit</Button>
               </div>
        </div>     

  </form>
  );
}
