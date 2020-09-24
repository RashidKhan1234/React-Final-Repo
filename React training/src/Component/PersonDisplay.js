import React from "react";

function Display({ person }) {
  return (
    <div>
      My Name is{person.name} my age is {person.age}
      my skill is {person.Skill}
    </div>
  );
}

export default Display;
