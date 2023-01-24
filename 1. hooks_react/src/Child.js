import React from "react";
import { useContext } from "react";
import { AppContext } from "./components/useContext/userContext";

function Child() {
  const userData = useContext(AppContext);
  console.log(userData);

  return (
    <>
      <h1>Child Component</h1>
      <h3>Name: {userData.name}</h3>
      <h3>Age: {userData.age}</h3>
    </>
  );
}

export default Child;
