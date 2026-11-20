import React from 'react';
import styled from 'styled-components';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Container, Section, SectionTitle, SectionSubtitle, TitleUnderline, Grid, Button } from '../styles/GlobalStyles';

const ProjectsSection = styled(Section)`
  background: #f9fafb;
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    
    .project-overlay {
      opacity: 1;
    }
  }
`;

const ProjectHeader = styled.div`
  height: 12rem;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.2);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
  }
`;

const ProjectIcon = styled.div`
  color: rgba(255, 255, 255, 0.8);
  z-index: 10;
`;

const ProjectTitle = styled.h3`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  z-index: 10;
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectDescription = styled.p`
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ProjectFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #3b82f6;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #1d4ed8;
  }

  &.github-link {
    color: #6b7280;
    
    &:hover {
      color: #374151;
    }
  }
`;

const ProjectStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const StatusDot = styled.div`
  width: 0.75rem;
  height: 0.75rem;
  background: #10b981;
  border-radius: 50%;
`;

const StatusText = styled.span`
  font-size: 0.75rem;
  color: #6b7280;
`;

const ProjectOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(139, 92, 246, 0.9) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
`;

const OverlayContent = styled.div`
  text-align: center;
  color: white;
  padding: 1.5rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  p {
    color: #bfdbfe;
    margin-bottom: 1rem;
    font-size: 0.875rem;
  }
`;

const OverlayButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  color: #3b82f6;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #dbeafe;
  }
`;

const CallToAction = styled.div`
  text-align: center;
  margin-top: 4rem;
`;

const CTACard = styled.div`
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 1.5rem;
  padding: 2rem;
  color: white;

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  p {
    color: #bfdbfe;
    margin-bottom: 1.5rem;
    max-width: 32rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

const CTAButton = styled.button`
  background: white;
  color: #3b82f6;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #dbeafe;
  }
`;

const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  margin-bottom: 1.25rem;
`;

const TechTag = styled.span`
  background: #eff6ff;
  color: #2563eb;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.6rem;
  border-radius: 9999px;
  border: 1px solid #bfdbfe;
`;

const Projects = () => {
  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle>Featured Projects</SectionTitle>
        <TitleUnderline />
        <SectionSubtitle>
          Here are some of the projects I've worked on, including practice and training-based projects from 4 years ago, showcasing my skills in web development
        </SectionSubtitle>

        <Grid columns={3} gap="2rem">
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectHeader>
                <ProjectIcon>
                  <Folder size={64} />
                </ProjectIcon>
                <ProjectTitle>{project.title}</ProjectTitle>
              </ProjectHeader>

              <ProjectContent>
                <ProjectDescription>{project.description}</ProjectDescription>

                {project.tech && project.tech.length > 0 && (
                  <TechContainer>
                    {project.tech.map((techName, i) => (
                      <TechTag key={i}>{techName}</TechTag>
                    ))}
                  </TechContainer>
                )}

                <ProjectFooter>
                  <ProjectLinks>
                    <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </ProjectLink>
                  </ProjectLinks>
                  
                  <ProjectStatus>
                    <StatusDot />
                    <StatusText>Live</StatusText>
                  </ProjectStatus>
                </ProjectFooter>
              </ProjectContent>

              <ProjectOverlay className="project-overlay">
                <OverlayContent>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.tech && project.tech.length > 0 && (
                    <TechContainer style={{ justifyContent: 'center' }}>
                      {project.tech.map((techName, i) => (
                        <TechTag key={i} style={{ background: 'rgba(255, 255, 255, 0.2)', color: 'white', borderColor: 'rgba(255, 255, 255, 0.4)' }}>
                          {techName}
                        </TechTag>
                      ))}
                    </TechContainer>
                  )}
                  <OverlayButton href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                    <span>View Live Demo</span>
                  </OverlayButton>
                </OverlayContent>
              </ProjectOverlay>
            </ProjectCard>
          ))}
        </Grid>

        <CallToAction>
          <CTACard>
            <h3>Interested in working together?</h3>
            <p>
              I'm always open to discussing new opportunities and exciting projects. 
              Let's create something amazing together!
            </p>
            <CTAButton onClick={scrollToContact}>Get In Touch</CTAButton>
          </CTACard>
        </CallToAction>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;