function ProjectCard({ title, description, tags, githubUrl }) {
  return (
    <article className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {tags && (
        <div className="tag-row">
          {tags.map((tag) => (
            <span className="tag" key={tag}>{tag}</span>
          ))}
        </div>
      )}
      {githubUrl && (
        <a href={githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
          View code on GitHub
        </a>
      )}
    </article>
  );
}

export default ProjectCard;