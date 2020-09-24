import React from "react";
import PersonDisplay from "./PersonDisplay";
function Person() {
  const person = [
    {
      name: "Rashid",
      age: 23,
      Skill: "React"
    },
    {
      name: "Rashid 1",
      age: 22,
      Skill: "Dot Net"
    }
  ];
  const personList = person.map((pers) => <PersonDisplay person={pers} />);
  return <div>{personList}</div>;
}
export default Person;
