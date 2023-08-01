import React from "react";
import Links from "./Links";

function About({ bio }) {
  return (
    <div id="about">
      {bio ? <p>{bio}</p> : null}
      <Links />
    </div>
  );
}

export default About;