import Reveal from '../components/Reveal';
import SkillChart from '../components/SkillChart';

function About() {
  return (
    <section className="about-page">
      <Reveal>
        <h1>About Me</h1>
      </Reveal>

      <div className="about-grid">
        <Reveal className="about-image-col">
          <img
             src="/profile.jpg"
             alt="Smriddhi Gupta smiling in front of a laptop"
             className="profile-img"
/>
        </Reveal>

        <Reveal className="about-text-col">
          <p>
            I'm a Digital Business and Data Science student at the University of
            Europe for Applied Sciences in Hamburg, with practical experience in data
            analysis and process automation. I'm proficient in Python, R, and Java,
            and hold certifications from Google and Tata Consultancy Services.
          </p>
          <p>
            I love building things end to end, from IoT hardware experiments with microcontrollers to NLP pipelines that turn messy text data into real insight. I care as much about the technical architecture behind a project as I do about presenting it clearly to other people.
          </p>
        </Reveal>
      </div>

      <Reveal>
        <h2>Education</h2>
      </Reveal>
      <div className="timeline">
        <Reveal className="timeline-item">
          <span className="timeline-dot" />
          <div>
            <h3>Bachelor of Science in Digital Business and Data Science</h3>
            <p className="meta">
              University of Europe for Applied Sciences, Hamburg, Germany · 09/2024 – 09/2027 (Expected)
            </p>
            <p>
              Relevant coursework: Big Data and Analytics, Human Resource Management,
              Employability Soft Skills and Business English, Financial Accounting
              and Reporting, Marketing and Sales, Economics, Digital Media and
              Communication, Artificial Intelligence, and Frontend Programming.
            </p>
          </div>
        </Reveal>
        <Reveal className="timeline-item">
          <span className="timeline-dot" />
          <div>
            <h3>Vocational Course in Data Science</h3>
            <p className="meta">
              Apeejay College of Fine Arts, Jalandhar, India · 04/2023 – 06/2024
            </p>
            <p>Relevant coursework: Big Data, R, MS Access, Internet of Things (IoT).</p>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <h2>Skills &amp; Interests</h2>
        <SkillChart />
        <ul className="skill-tags">
          <li>Python</li>
          <li>R</li>
          <li>Java</li>
          <li>C / C++</li>
          <li>React &amp; JavaScript</li>
          <li>Pandas</li>
          <li>NLTK</li>
          <li>scikit-learn</li>
          <li>IoT</li>
          <li>Excel</li>
          <li>Jira</li>
        </ul>
      </Reveal>


      <Reveal>
        <h2>Certifications</h2>
        <ul>
          <li>Programming in C, C++, and Python from Innovative Techno Institute (2023–2024)</li>
          <li>German Language Course (A1–B1) from Goethe-Institut, New Delhi (2023–2024)</li>
          <li>Introduction to Generative AI from Google (Badge)</li>
          <li>Data Visualization: Empowering Businesses with Effective Insights from Tata Consultancy Services</li>
          <li>Advanced Java Course from Udemy</li>
        </ul>
      </Reveal>

      <Reveal>
        <h2>Languages</h2>
        <ul>
          <li>English: C1 (Fluent)</li>
          <li>German: B1</li>
          <li>Hindi: C2 (Mother Tongue)</li>
        </ul>
      </Reveal>
    </section>
  );
}

export default About;