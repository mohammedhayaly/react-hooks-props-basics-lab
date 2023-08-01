import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  const user = {
    name: "Your Name",
    city: "Your City",
    image: "link-to-your-image",
    bio: "Your bio goes here",
    github: "link-to-your-github",
    linkedin: "link-to-your-linkedin"
  };

  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} />
      <About bio={user.bio} github={user.github} linkedin={user.linkedin} />
    </div>
  );
}

export default App;