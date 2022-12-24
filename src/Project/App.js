import Form from "./Form";
import List from "./Displaylist";
import { useState } from "react";

const App=()=>{
    const [list,setList]=useState([])
    const userHandler=(Name,Age)=>{
        console.log('done')
        setList((preState)=>{
            return[...preState,{name:Name,age:Age}];
        });
    }
    return (
        <>
        <Form onAdduser={userHandler}/>
        <List users={list}/>
        </>
    )
}
export default App ;