import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import AstarPath from '../images/AstarPath.jpg'
import LoginSite from '../images/LoginSite.jpg'
import JohnMcClane from '../images/JohnMcClane.jpg'
import SpaceShooter from '../images/SpaceShooter.jpg'
import CodeBlog from '../images/CodeBlog.jpg'
import MyPic from '../images/MyPic.jpeg'
import EastResume from '../images/EastResume.png'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Me</h2>
          <span className="image main">
            <img src={MyPic} alt="" />
          </span>
          <p>
            Hi! I'm Jack East
          </p>
          <p>
            I’m from Toronto, Ontario. I recently graduated from Queen’s University in Kingston, where I studied Computer Engineering.
          </p>
          <p>
            Since graduating I spent the Summer working maintenance at Westview Golf Club and improving my programming skills in my free time.
          </p>
          <p>
            Right now, I'm interested in trying to suck less at cooking, weightlifting (to combat my improved cooking skills), playing video games, very amateur woodworking, and programming, where I'm currently interested in improving on React among other skills.
          </p>
          <ul className="icons">
            <li>
              <a
                href="https://linkedin.com/in/jack-east"
                className="icon fab fa-linkedin"
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jackeast23"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Portfolio</h2>
          <h3>A* Pathfinding Algorithm Visualizer</h3>
          <span className="image main">
            <img src={AstarPath} alt="" />
          </span>
          <p>
            This is a visual implementation of the A* pathfinding algorithm that uses Python3 and pygame.
          </p>
          <p>
            The tool allows you to select a starting position(orange block), end position (turquoise block), and place barrier blocks (black blocks) in that order with left click. The user can then remove barrier blocks with right click if they want. Once the start and end positions have been placed the user can start the simulation by using the space bar. Once the simulation has ended the purple line will appear, showing you the most efficient route to reach the end position. After that the user can press 'c' to clear the grid and start again.
          </p>
          <p>
          Below is a link to the GitHub repository for this project
          </p>
          <ul className="icons">
            <li>
              <a
                href="https://github.com/jackeast23/AstarPathfinding"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          <h3>Code Blog</h3>
          <span className="image main">
            <img src={CodeBlog} alt="" />
          </span>
          <p>
            This is a Code Blog that I built using React Js, Gatsby.js, SCSS, and HTML
          </p>
          <p>
            I built this blog as a learning tool to better understand Gatsby, which was used to build my personal site. I also built this site to dip my toes in React, which I have become very interested in as it emerges as an incredible tool in web creation.
            Contentful was used as a content management system to store the blog posts and any media that was associated with the posts and I used GraphQL in the development process to query the blog content.
          </p>
          <p>
            Below is a link to the GitHub repository for this project as well as the site hosted on Netlify
          </p>
          <ul className="icons">
            <li>
              <a
                href="https://github.com/jackeast23/CodeBlog"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
            <a
              href="https://distracted-newton-e7c85e.netlify.app/"
              className="icon fa-globe"
            >
              <span className="label">Linkedin</span>
            </a>
          </li>
          </ul>
          <h3>LoginSite</h3>
          <span className="image main">
            <img src={LoginSite} alt="" />
          </span>
          <p>
            This is a project that uses Flask (a Python web framework), Python3, SQLAlchemy (an open-source SQL toolkit), and Javascript to create a site that handles user authentification, note creation, and database storage.
            The site uses some HTML for formatting, bootstrap for the hamburger (header), and javascript for the notes functionality.
            With this site a user can create an account, login, create/delete notes, logout, and access those notes whenever they want.
            I built this site to get a better understanding of login and authentification that could eventually be used with other applications.
            The site also builds off a previous notes application that I built using Javascript.
          </p>
          <p>
            Below is a link to the GitHub repository for this project
          </p>
          <ul className="icons">
            <li>
              <a
                href="https://github.com/jackeast23/LoginSite"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          <h3>John McClane Twitter Bot</h3>
          <span className="image main">
            <img src={JohnMcClane} alt="" />
          </span>
          <p>
            JohnMcClane is a twitter bot that tweets Die Hard quotes
          </p>
          <p>
            This python based twitter bot makes use of Google Sheets, Twitter API, and Cloud Scheduler to tweet a quote from the movie Die Hard everyday at 10PM EST. The google sheet, which was used as the database of quotes currently only has a couple tweets as proof of concept. The first few tweets were sent before the scheduler was added to test functionality.
          </p>
          <p>
            This project was completed to test out the Twitter API and get some practice using the Cloud scheduler.
          </p>
          <p>
            Below is a link to the GitHub repository for this project as well as a link to the Twitter account
          </p>
          <ul className="icons">
            <li>
              <a
                href="https://github.com/jackeast23/JohnMcClane"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/McclaneOfficer"
                className="icon fab fa-twitter"
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
          </ul>
          <h3>Space Shooter</h3>
          <span className="image main">
            <img src={SpaceShooter} alt="" />
          </span>
          <p>
            This is a 2D space shooter game made using Python3 and Pygame.
            I built this project because it looked like a fun thing to try. 
            Pygame is also a cool set of Python modules that I ended up using in the A* Pathfinding project to visualize the algorithm.
            The game consists of two players that can each shoot at the opposing player to eliminate them from the game.
          </p>
          <p>
            Below is a link to the GitHub repository for this project as well as a link to the Twitter account
          </p>
          <ul className="icons">
            <li>
              <a
                href="https://github.com/jackeast23/SpaceShooter"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
        <h3>Check out my Resume. LinkedIn, and GitHub</h3>
        <ul className="icons">
            <li>
              <a
                href="https://drive.google.com/file/d/1QGMwDInIzuRQ71yL_NCRUiqOVYHx95vx/view?usp=sharing"
                className="icon fab fa-file"
              >
                <span className="label">Resume</span>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/jack-east"
                className="icon fab fa-linkedin"
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jackeast23"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          <span className="image main">
            <img src={EastResume} width="600" alt="" />
          </span>
          


          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="jackeast23@gmail.com">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://linkedin.com/in/jack-east"
                className="icon fab fa-linkedin"
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jackeast23"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
