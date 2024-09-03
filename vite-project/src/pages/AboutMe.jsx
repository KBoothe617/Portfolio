import './AboutMe.css';

// AboutMe function returning a photo and description of myself

export default function AboutMe() {
    return (
        <section className="about-me">
            <div className="about-me_container">
                <img className="about-me_photo" src="./assets/kaleb.jpg" alt="Kaleb Udy" />
                <div className="about-me_text">
                    <h2 className="about-me_title">About Me</h2>
                    <p>My name is Kaleb Lee Boothe Udy. I am a fullstack webdevelopment student working to get my cetrificate in programing and webdevelopment. I was first introduced to the tech feild while attending Beehive Science and Technology Academy. During my time there I was on the FTC and FRC Robotics Teams, I worked on both the software and mechanical teams. </p>
                    <p>I have experince in HTML, CSS, JavaScript, TypeScript, SQL, WebAPIs, React, NodeJS, Java, Python, and Prompt Engineering. I also have experince building and maintaining computers hardware components. </p>
                    <p>My goal is to become a fullstack webdeveloper and help create websites for local buisnesses.</p>
                </div>
            </div>
        </section>
    );
}