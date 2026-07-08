import { useRef } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';

function Home() {
  const heroRef = useRef(null);

  const handleMouseMove = (e) => {
    const hero = heroRef.current;
    if (!hero) return;
    const rect = hero.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    hero.style.setProperty('--mx', `${x}%`);
    hero.style.setProperty('--my', `${y}%`);
  };

  return (
    <>
      <section className="hero" ref={heroRef} onMouseMove={handleMouseMove}>
        <div className="hero-content">
          <span className="hero-eyebrow hero-anim hero-anim-1">Available for Internships · aug 2026</span>
          <h1 className="hero-anim hero-anim-2">Smriddhi Gupta</h1>
          <p className="tagline hero-anim hero-anim-3">
            Digital Business &amp; Data Science student, passionate about leveraging data to drive insights and innovation. Skilled in Python, R, and Java, with a strong foundation in data analysis, machine learning, and software development.
          </p>

          <div className="hero-actions hero-anim hero-anim-4">
            <Link to="/contact" className="cta-button">
              Get in touch
            </Link>
            <a href="/Smriddhi Gupta Resume.pdf" className="cta-secondary" download="Smriddhi_Gupta_Resume.pdf">
              Download resume
            </a>
          </div>

          <div className="stats-bar hero-anim hero-anim-5">
            <div className="stat">
              <span className="stat-value">2027</span>
              <span className="stat-label">expected graduation</span>
            </div>
            <div className="stat">
              <span className="stat-value">Hamburg</span>
              <span className="stat-label">based in, DE</span>
            </div>
            <div className="stat">
              <span className="stat-value">EN · DE · HI</span>
              <span className="stat-label">languages</span>
            </div>
          </div>
        </div>

        <img
          src="/profile.jpg"
          alt="Smriddhi Gupta smiling in front of a laptop"
          className="hero-img hero-anim hero-anim-2"
        />
      </section>

      <section aria-labelledby="highlights-heading" className="highlights">
        <Reveal>
          <h2 id="highlights-heading">Featured Projects</h2>
        </Reveal>
        <div className="project-grid">
          <Reveal>
            <ProjectCard
              title="NLP Text Preprocessing Pipeline"
              description="Built a modular Python and NLTK tool that cleaned and analyzed a real WhatsApp chat of 4,940 messages, visualizing the top 20 most frequent words."
              tags={['Python', 'NLTK', 'Matplotlib']}
              githubUrl="https://github.com/Smriddhigupta28/NLP-Preprocessing-Pipeline-Project"
            />
          </Reveal>
          <Reveal>
            <ProjectCard
              title="Forest Performance Analysis"
              description="Analyzed forest datasets with Python, Pandas, and R-Studio to uncover trends in deforestation, biodiversity, and climate impact."
              tags={['Python', 'Pandas', 'R-Studio']}
              githubUrl="https://github.com/Smriddhigupta28/Forest-Performance-Analysis-Project"
            />
          </Reveal>
          <Reveal>
            <ProjectCard
              title="Random Forest: Machine Failure Prediction"
              description="Trained a Random Forest classifier on 10,000 industrial sensor readings to predict machine failure, handling class imbalance with balanced weighting and evaluating performance with a classification report and confusion matrix."
              tags={['Python', 'scikit-learn', 'Pandas']}
              githubUrl="https://github.com/Smriddhigupta28/Random-Forest-Project"
            />
          </Reveal>
          <Reveal>
            <ProjectCard
              title="World Cup Dataset: K-Means & Hierarchical Clustering"
              description="Applied K-Means and hierarchical clustering to survey data on student World Cup preferences, using the elbow method to select cluster count and analyzing engagement profiles across fan segments."
              tags={['Python', 'scikit-learn', 'SciPy']}
              githubUrl="https://github.com/Smriddhigupta28/World-Cup-dataset-Project"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default Home;
