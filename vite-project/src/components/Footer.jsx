import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faEnvelope } from '@fortawesome/free-brands-svg-icons';

// Footer component that will hold links to diffrent media profiles of mine
export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="linkedin">
                    <a href="https://www.linkedin.com/in/kaleb-boothe-194881293/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
                <div className="github">
                    <a href="https://github.com/KBoothe617" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
                <div className="email">
                    <a href="mailto:kboothe617@gmail.com">Email</a>
                    <FontAwesomeIcon icon={faEnvelope} />
                </div>
            </div>
        </footer>
    );
}