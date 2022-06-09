import React from "react";
import user from "../data/user"

function Home({color, name, city}) {
  return (
    <div id="home">
      <h1 style={{color: "firebrick"}}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
