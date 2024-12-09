import './Project.css';

// Project component to display project image, title, deployed link and github link

import PropTypes from 'prop-types';

export default function Project({ image, title, deployedLink, githubLink }) {
    // Component code here
    return (
      <div className="project-container">
          <div className="project-image">
              <img src={image} alt={title} />
              <div className="overlay">
                  <a href={deployedLink} className="project-title" target="_blank" rel="noopener noreferrer">{title}</a>
                  <a href={githubLink} className="project-github" target="_blank" rel="noopener noreferrer">Github</a>
              </div>
          </div>
      </div>
    );
}

Project.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    deployedLink: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired
};