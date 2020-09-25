import React from "react";
import PersonDisplay from "./PersonDisplay";
function Person() {
  const person = [
    {
      id: 1,
      name: "Rashid",
      age: 23,
      Skill: "React"
    },
    {
      id: 2,
      name: "Rashid 1",
      age: 22,
      Skill: "Dot Net"
    }
  ];
  const personList = person.map((pers, index) => (
    <PersonDisplay key={index} person={pers} />
  ));
  return <div>{personList}</div>;
}
export default Person;
