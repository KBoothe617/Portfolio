import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

// Footer component that will hold links to diffrent media profiles of mine
export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="linkedin">
                    <a href="https://www.linkedin.com/in/kaleb-boothe-194881293/" target="_blank" rel="noreferrer">
                        <i className="linkedin-link"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}