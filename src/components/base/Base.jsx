import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Base.css";
import avi from "../../assets/img/icon.jpg";
import navLine from "../../assets/svgs/menu-line.svg";
import logo from "../../assets/img/icon.jpg";
import arrow from "../../assets/svgs/arrow.svg";

export class Base extends Component {
  render() {
    return (
      <div className='base_container'>
        <div className='hero'>
          <div className='intro_box'>
            <h1>
              Hello, I'm <br /> Babatunde Akerele. 
            </h1>
            <div className='avi'>
              <img src={avi} alt='avatar' />
            </div>
          </div>

          <div className='description'>
            <p>
              <span>
                I'm a <span className='highlight'>software engineer</span> specializing in <span className='highlight two'>frontend development</span>, focused on building reliable, scalable, and <span className="highlight two">user-centric web applications.</span> I combine strong problem-solving skills with a deep understanding of <span className="highlight">modern frontend technologies</span> to deliver performant, maintainable solutions, while ensuring a thoughtful balance between functionality, usability, and visual clarity. I <span className="highlight two">currently work at TeamSportz</span>, where I build comprehensive management tools for sports teams and organizations, handling everything from live game scoring and video analysis to competition management and real-time communication.
              </span>
            </p>
            
          </div>

          <div className='go_button_container'>
            <Link to='/work' className='explore'>
              <button className='explore'>
                Explore <span className='material-icons'>arrow_right</span>
              </button>
            </Link>
          </div>
        </div>

        <nav>
          <ul>
            <li className={this.props.menu[0]}>
              <small>
                01
                <Link to='/'>
                  <img src={navLine} alt='menu bullet' /> WORK
                </Link>
              </small>
            </li>

            <li className={this.props.menu[1]}>
              <small>
                02
                <Link to='/articles'>
                  <img src={navLine} alt='menu bullet' /> ARTICLES
                </Link>
              </small>
            </li>

            {/* <li className={this.props.menu[2]}>
              <small>
                03{" "}
                <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/babatunde-akerele/"
              >
                  <img src={navLine} alt='menu bullet' /> LINKED IN
                </a>
              </small>
            </li> */}

            <li className={this.props.menu[2]}>
              <small>
                03{" "}
                <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.frontendmentor.io/profile/trafiki"
              >
                  <img src={navLine} alt='menu bullet' /> FE MENTOR
                </a>
              </small>
            </li>
          </ul>
        </nav>

        <div className='footer'>
          <img src={logo} alt='' />
          <div className='social'>
            <a
              href='https://github.com/trafiki'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-github'></i> Github
              <img src={arrow} alt='pointer' />
            </a>

            <a
              href='https://www.linkedin.com/in/babatunde-akerele/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-linkedin'></i> Linkedin{" "}
              <img src={arrow} alt='pointer' />
            </a>
          </div>

          <div className='credits'>
            <p>
              Inspired by
              <a
                href='https://sarahdayan.dev/'
                target='_blank'
                rel='noreferrer noopener'
              >
                Sarah Dayan
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Base;
