import Project from '../components/Project';
import '../pages/Portfolio.css';

// Portfolio function returning a list of projects

const projects = [
    {
        id: 1,
        title: 'ReadMe Generator',
        description: 'A command-line application that dynamically generates a README.md from a user\'s input. The application will be invoked with the following command: node index.js',
        githubLink: 'https://github.com/KBoothe617/ReadMe-Gen',
    },
    {
        id: 2,
        title: 'Recipe Catalog',
        description: 'A web site that allows users to store recipes and sorts them but cook time. This was a group project that I and 2 other students worked on.',
        githubLink: 'https://github.com/KBoothe617/Project-1',
        deployedLink: 'https://kboothe617.github.io/Project-1/',
    },
    {
        id: 3,
        title: 'Rock Paper Scissors',
        description: 'A simple rock paper scissors game that using HTML, CSS, and JavaScript. This was a team project that I and one other student worked on.',
        githubLink: 'https://github.com/Romantech91/RPS',
    },
];

// Portfolio function returning a list of projects

export default function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio-title">Portfolio</h2>
            <div className="portfolio-grid">
                {projects.map((project) => (
                    <Project
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        githubLink={project.githubLink}
                        deployedLink={project.deployedLink}
                    />
                ))}
            </div>
        </section>
    );
}