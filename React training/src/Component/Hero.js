import React from "react";

function Hero({ heroName }) {
  if (heroName === "Joker") {
    throw new Error("Not a Hero");
  }
  return <h5>{heroName}</h5>;
}
export default Hero;
