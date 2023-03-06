import React from "react";
import { UserContext } from "./App";
export default function Context(props) {
    return (
      <UserContext.Consumer>
        {value => <h1>{value.roll}</h1>} 
      </UserContext.Consumer>
      
    )
}