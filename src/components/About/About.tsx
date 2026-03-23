import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Users, Globe, Heart, TrendingUp, Mic, GraduationCap } from 'lucide-react';
import './About.scss';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const techStack = [
    'JavaScript', 'TypeScript', 'React', 'React Native',
    'Node.js', 'SCSS', 'CSS-in-JS', 'REST API', 'Git'
  ];

  const highlights = [
    { 
      icon: TrendingUp, 
      text: 'Performance Optimization', 
      description: 'Reduced initial load time by 40% through code splitting and lazy loading' 
    },
    { 
      icon: Users, 
      text: 'Tech Lead & Mentor', 
      description: 'Leading a frontend team of 5. Mentored 10+ juniors and interns' 
    },
    { 
      icon: Mic, 
      text: 'Technical Interviewer', 
      description: 'Conducting interviews for frontend, backend, full-stack, and QA candidates. Also assessing English proficiency for IT roles' 
    },
    { 
      icon: Globe, 
      text: 'English C2', 
      description: 'Fluent professional communication. Teaching IT English to developers' 
    },
    { 
      icon: Heart, 
      text: 'Psychology Background', 
      description: 'Building effective team communication. Maintaining healthy work-life balance' 
    },
    { 
      icon: GraduationCap, 
      text: 'Formal CS Education', 
      description: 'State-recognized diploma in Software Engineering (in addition to psychology & teaching degrees)' 
    },
  ];

  return (
    <section id="about" className="about">
      <div className="container about__container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="about__content"
        >
          {/* Header */}
          <div className="about__header">
            <h2 className="about__title">
              <span className="gradient-text">About Me</span>
            </h2>
            <div className="about__badge">
              <Code2 className="about__badge-icon" />
              <span>Helen | Tech Lead • Frontend Developer • Mentor</span>
            </div>
          </div>

          {/* Photo + Bio Row */}
          <div className="about__row">
            {/* Photo */}
            <motion.div 
              className="about__photo-wrapper"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="about__photo-glow">
                <img 
                  src="/images/profile.png" 
                  alt="Helen - Frontend Developer" 
                  className="about__photo"
                />
              </div>
            </motion.div>

            {/* Bio */}
            <div className="about__bio">
              <p className="about__text">
                <strong>Tech Lead & Frontend Developer</strong> with <strong>7 years in programming</strong>, 
                including <strong>4 years with React</strong>. Started as a web developer in 2019, 
                now leading a frontend team and mentoring developers.
              </p>
              <p className="about__text">
                I conduct technical interviews for frontend, backend, full-stack, and QA candidates, 
                as well as English proficiency assessments for IT roles.
              </p>
              <p className="about__text about__text--highlight">
                <strong>By education:</strong> psychologist, teacher, and software engineer (state-recognized diploma). 
                This unique combination helps me build effective team communication, 
                mentor developers, and maintain a healthy work-life balance.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="about__highlights">
            {highlights.map((item, index) => (
              <motion.div
                key={item.text}
                className="about__highlight"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <item.icon className="about__highlight-icon" />
                <div>
                  <h4 className="about__highlight-title">{item.text}</h4>
                  <p className="about__highlight-description">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="about__tech">
            <h3 className="about__tech-title">Core Tech Stack</h3>
            <div className="about__tech-grid">
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="about__tech-item"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;