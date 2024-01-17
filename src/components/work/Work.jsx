import React, { Component } from "react";
import "./Work.css";
import Project from "../utils/project/Project";
import uuid from "react-uuid";
import GoButton from "../utils/goButton/GoButton";

export class Work extends Component {
  // isPrivate implies that the project code is on a private repository, so it won't show an option to view the code 
  // isRepository implies that the project doesn't have a frontend (like a BE project), so it won't show the option to view the project live
  state = {
    projects: [
      {
        id: uuid(),
        title: "Checkmate",
        description: "Sign up portal for Checkmate Africa community",
        github: "https://github.com/kadetXx/checkmate",
        live: "https://checkmate.africa/",
        stack: "React + Styled Components",
        isPrivate: false,
        isRepository: true,
      },
      {
        id: uuid(),
        title: "Birdbox",
        description: "Social application with Real time Messaging",
        github: "https://github.com/kadetXx/birdbox",
        live: "https://birdbox.space/",
        stack: "Vue + Socket.io + Express",
        isPrivate: false,
        isRepository: false,
      },

      {
        id: uuid(),
        title: "EndSars",
        description: "Web app to support the #EndSARS campaign",
        github: "https://github.com/kadetXx/endsars",
        live: "https://endsars.vercel.app/",
        stack: "React",
        isPrivate: false,
        isRepository: false,
      },

      {
        id: uuid(),
        title: "Shoppies",
        description: "Movie Awards Nomination App",
        github: "https://github.com/kadetXx/shoppies",
        live: "https://shoppiesawards.netlify.app/",
        stack: "React + SASS",
        isPrivate: false,
        isRepository: false,
      },

      {
        id: uuid(),
        title: "Vectorly",
        description: "Draw basic shapes with SVG",
        github: "https://github.com/kadetXx/vectorly",
        live: "https://vectorly.kadetxx.vercel.app/",
        stack: "React",
        isPrivate: false,
        isRepository: false,
      },

      {
        id: uuid(),
        title: "Animepanda",
        description: "Mobile App landing page",
        github: "https://github.com/kadetXx/animepanda",
        live: "https://animepanda.herokuapp.com",
        stack: "Sass + Javsacript + PHP",
        isPrivate: false,
        isRepository: false,
      }, 
    ],
  };

  componentDidMount() {
    this.props.activeMenu(0);
  }


  render() {
    return (
      <div className="work">
      <div className="portfolio_showcase portfolio_showcase_full">
        <h3 className="title">MOST RECENT</h3>
        {this.state.projects.slice(0, 2).map((project, index) => (
          <Project key={index} {...project} id={index} fullWidth />
        ))}
      </div>

      <div className="portfolio_showcase">
        <h3 className="title">OTHER PROJECTS</h3>
        {this.state.projects.slice(2).map((project, index) => (
          <Project key={index} {...project} id={index} />
        ))}
      </div>

      <GoButton
        prev={{ url: "/", text: "Home" }}
        next={{ url: "/articles", text: "Articles" }}
      />
    </div>
    );
  }
}

export default Work;
