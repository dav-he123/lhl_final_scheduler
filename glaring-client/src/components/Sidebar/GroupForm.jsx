/**@jsx jsx */

import React from 'react'
import {css, jsx} from '@emotion/core'
import { useForm } from 'react-hook-form';




const GroupFormButton = (props) => {
  const {color, name} = props;
  return <button 
    css={css`
      display: inline-block;
      border: none;
      color: white;
      background-color: ${color};
      width: 50%;
      height: 32px;
        
      &:hover {
          background-color: white;
          color: ${color};
        }
    `
    }
  {...props} >{name}</button>
}


export default function GroupForm (props) {

  const {register, handleSubmit, errors } = useForm();

  const { action } = props;

  async function onSubmit (data) {
    console.log(data);
    // await addEvent(data);
    // setDisplay("display: none;
  }

  return (
  <form onSubmit={handleSubmit(onSubmit)}>
  <div 
      css={css`
      z-index: 1000; 
      height: 300px;
      width: 200px; 
      background-color: gray; 
      position: relative; 
      top: 0px; 
      left: 0px;`}>

        <input type="text" name="name" placeholder="Enter group name" ref={register} />
        <input type="text" name="description" placeholder="Describe your group!" ref={register} />
        <input type="url" name="photo" placeholder="URL of Group photo" ref={register} />
      


      <div css={css`position: absolute;
       bottom: -30px; 
       right: 0; 
       width: 100%`}>

        <GroupFormButton type="button" color="teal" name="CANCEL" onClick={() => action() } />
        <GroupFormButton type="submit" color="black" name="SUBMIT" />

      </div>
    
  </div>
  </form>
  )

}