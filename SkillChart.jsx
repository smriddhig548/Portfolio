import { useEffect, useRef, useState } from 'react';

const skills = [
  { name: 'Python', level: 90 },
  { name: 'R', level: 75 },
  { name: 'Java', level: 65 },
  { name: 'React / JavaScript', level: 70 },
  { name: 'Data Analysis (Pandas/NLTK)', level: 85 },
];

function SkillChart() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="skill-chart" ref={ref}>
      {skills.map((skill) => (
        <div className="skill-row" key={skill.name}>
          <div className="skill-row-label">
            <span>{skill.name}</span>
            <span className="skill-row-percent">{visible ? skill.level : 0}%</span>
          </div>
          <div className="skill-bar-track">
            <div
              className="skill-bar-fill"
              style={{ width: visible ? `${skill.level}%` : '0%' }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillChart;