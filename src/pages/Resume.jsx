import './Resume.css';

// resume component with download
export default function Resume() {
    return (
        <div className='resume-container'>
            <h1>Resume</h1>
            <a href='/assets/resume.pdf' download>
                <button className='resume-download'>Download Resume</button>
            </a>
            <iframe src='/assets/resume.pdf' className='resume' title='resume'></iframe>
        </div>
    );
}