type ProjectLinksProps = {
  name: string;
  liveUrl: string;
  githubUrl: string;
};

export default function ProjectLinks({ name, liveUrl, githubUrl }: ProjectLinksProps) {
  if (!liveUrl && !githubUrl) return null;

  return (
    <div className="project-links">
      {liveUrl && (
        <a className="text-link" href={liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${name} live site (opens in a new tab)`}>
          Visit live site <span aria-hidden="true">↗</span>
        </a>
      )}
      {githubUrl && (
        <a className="text-link" href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${name} on GitHub (opens in a new tab)`}>
          View on GitHub <span aria-hidden="true">↗</span>
        </a>
      )}
    </div>
  );
}
