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
        title: "Tiddix",
        description: "A hassle-free digital platform where creatives can get investors for their live or dream projects",
        github: "https://github.com/trafiki/jamkey-cart?tab=readme-ov-file",
        live: "https://jamkey-cart.vercel.app/",
        stack: "React + TS + Chakra UI",
        isPrivate: true,
        isRepository: false,
      },
      {
        id: uuid(),
        title: "REMI WAHAB",
        description: "Website design for premium Womenswear brand",
        github: "",
        live: "https://remiwahab.com/",
        stack: "Wordpress",
        isPrivate: true,
        isRepository: false,
      }, 
      {
        id: uuid(),
        title: "PEVCA",
        description: "Website design for PEVCA",
        github: "",
        live: "https://pevcang.org/",
        stack: "Wordpress",
        isPrivate: true,
        isRepository: false,
      }, 
      {
        id: uuid(),
        title: "Hingees",
        description: "Webisite design for a Lagos based minimalist lifestyle brand",
        github: "",
        live: "https://hingees.com/",
        stack: "Wordpress",
        isPrivate: true,
        isRepository: false,
      },
      {
        id: uuid(),
        title: "Patrick Dahm",
        description: "Portfolio for Patrick Dahm",
        github: "",
        live: "https://www.dahm.sg/",
        stack: "Wordpress",
        isPrivate: true,
        isRepository: false,
      },
      {
        id: uuid(),
        title: "Hebedi",
        description: "A fashion store that sells locally handdyed clothing",
        github: "",
        live: "https://hebedi.com/",
        stack: "Shopify",
        isPrivate: true,
        isRepository: false,
      },
      {
        id: uuid(),
        title: "React Coolors",
        description: "The love child of Flatui colors and Material UI colors 😉",
        github: "https://github.com/trafiki/react-coolors",
        live: "https://react-coolors.vercel.app/",
        stack: "React + Material UI",
        isPrivate: false,
        isRepository: false,
      },
      {
        id: uuid(),
        title: "Jamkey Shop",
        description: "A simple implementation of a shopping cart that persists cart items data in local storage",
        github: "https://github.com/trafiki/jamkey-cart?tab=readme-ov-file",
        live: "https://jamkey-cart.vercel.app/",
        stack: "React + TS",
        isPrivate: false,
        isRepository: false,
      },
      {
        id: uuid(),
        title: "RDC",
        description: "Website design for a New York based diamond jewely store",
        github: "",
        live: "https://rarediamondclub.com/",
        stack: "Wordpress",
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
        {this.state.projects.slice(2).map((project) => (
          <Project key={project.id} {...project} id={project.id} />
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
