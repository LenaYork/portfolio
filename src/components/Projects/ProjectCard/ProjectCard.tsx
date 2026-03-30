import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Monitor, Globe, Clock } from 'lucide-react';
import type { Project } from '../../../types';
import './ProjectCard.scss';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const getStatusBadge = () => {
    switch (project.status) {
      case 'active':
        return <span className="project-card__status project-card__status--active">Live Demo</span>;
      case 'ready-for-release':
        return <span className="project-card__status project-card__status--ready">Ready for Release</span>;
      case 'coming-soon':
        return <span className="project-card__status project-card__status--coming">Coming Soon</span>;
      case 'in-development':
        return <span className="project-card__status project-card__status--dev">In Development</span>;
    }
  };

  const getTypeIcon = () => {
    switch (project.type) {
      case 'mobile':
        return <Smartphone className="project-card__type-icon" />;
      case 'desktop':
        return <Monitor className="project-card__type-icon" />;
      default:
        return <Globe className="project-card__type-icon" />;
    }
  };

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      <div className="project-card__inner">
        {/* Image / Placeholder */}
        <div className="project-card__image">
          {project.imageUrl ? (
            <img src={project.imageUrl} alt={project.title} />
          ) : (
            <div className="project-card__image-placeholder">
              {getTypeIcon()}
              <span>Preview</span>
            </div>
          )}
          <div className="project-card__status-badge">
            {getStatusBadge()}
          </div>
        </div>

        {/* Content */}
        <div className="project-card__content">
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__description">{project.description}</p>

          {/* Tech Stack */}
          <div className="project-card__tech">
            {project.techStack.map((tech) => (
              <span key={tech} className="project-card__tech-item">
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="project-card__links">
            {project.demoUrl && project.status === 'active' && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link project-card__link--demo"
              >
                <ExternalLink className="project-card__link-icon" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link project-card__link--code"
              >
                <Github className="project-card__link-icon" />
                Code
              </a>
            )}
            {project.status !== 'active' && (
              <span className="project-card__coming-soon">
                <Clock className="project-card__coming-icon" />
                {project.status === 'coming-soon' ? 'Coming soon' : 'In development'}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;