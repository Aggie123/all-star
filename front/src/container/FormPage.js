import React from 'react';
import {register, getInfo, getUser} from '../service/api';

const FormPage=()=>{

    const handleSubmit=async (event) =>{
        event.preventDefault()
        const name = event.target.elements[0].value
        const password = event.target.elements[1].value
        const res=await getInfo({name, password});
        console.log('res',res);
    };

    const handleSubmitPost=async (event) =>{
        event.preventDefault()
        const name = event.target.elements[0].value
        const password = event.target.elements[1].value
        const res=await register({name, password});
        console.log('res',res);
    };

    const handleSubmitGetUser=async (event) =>{
        event.preventDefault()
        const name = event.target.elements[0].value
        const score = event.target.elements[1].value
        const res=await getUser({name, score});
        console.log('res',res);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name"/>
        <input type="text" placeholder="password"/>
        <button type="submit">Go</button>
    </form>
    <form onSubmit={handleSubmitGetUser}>
        <input type="text" placeholder="name"/>
        <input type="text" placeholder="password"/>
        <button type="submit">Get User</button>
    </form>
    <form onSubmit={handleSubmitPost}>
        <input type="text" placeholder="name"/>
        <input type="text" placeholder="score"/>
        <button type="submit">Post</button>
    </form>
        </div>
  );
}
export default FormPage;