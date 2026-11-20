import React from 'react';
import styled from 'styled-components';
import { Code, Zap } from 'lucide-react';
import { listskill } from '../data/portfolioData';
import { Container, Section, SectionTitle, SectionSubtitle, TitleUnderline, Grid, Card } from '../styles/GlobalStyles';

const SkillsSection = styled(Section)`
  background: white;
`;

const SkillCard = styled(Card)`
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    
    .skill-icon {
      transform: scale(1.1);
    }
  }
`;

const SkillIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
`;

const SkillName = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

const SkillDescription = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.6;
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 4rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CategoryCard = styled.div<{ gradient: string }>`
  background: ${props => props.gradient};
  border-radius: 1rem;
  padding: 2rem;
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

const CategoryIcon = styled.div<{ bgColor: string }>`
  width: 3rem;
  height: 3rem;
  background: ${props => props.bgColor};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
`;

const TechList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const TechItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TechDot = styled.div<{ color: string }>`
  width: 0.5rem;
  height: 0.5rem;
  background: ${props => props.color};
  border-radius: 50%;
`;

const TechName = styled.span`
  color: #374151;
  font-family: 'Courier New', monospace;
`;

const Skills = () => {
  const frontendTechs = ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'];
  const backendTechs = ['Node.js', 'MongoDB', 'Firebase', 'Express.js', 'REST APIs' , 'Supabase'];
  const toolsTechs = ['Git', 'Bitbucket', 'Redux', 'Responsive Design', 'UI/UX Design'];

  return (
    <SkillsSection id="skills">
      <Container>
        <SectionTitle>Skills & Technologies</SectionTitle>
        <TitleUnderline />
        <SectionSubtitle>
          Here are the core technologies, frameworks, and tools I use to craft seamless digital products
        </SectionSubtitle>

        <Grid columns={4} gap="1.5rem">
          {listskill.map((skill, index) => (
            <SkillCard key={index}>
              <SkillIcon className="skill-icon">
                {skill.icon}
              </SkillIcon>
              <SkillName>{skill.name}</SkillName>
              <SkillDescription>{skill.intro}</SkillDescription>
            </SkillCard>
          ))}
        </Grid>

        <CategoriesGrid>
          <CategoryCard gradient="linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%)">
            <CategoryHeader>
              <CategoryIcon bgColor="#3b82f6">
                <Code size={24} />
              </CategoryIcon>
              <CategoryTitle>Frontend Development</CategoryTitle>
            </CategoryHeader>
            <TechList>
              {frontendTechs.map((tech) => (
                <TechItem key={tech}>
                  <TechDot color="#3b82f6" />
                  <TechName>{tech}</TechName>
                </TechItem>
              ))}
            </TechList>
          </CategoryCard>

          <CategoryCard gradient="linear-gradient(135deg, #d1fae5 0%, #ecfdf5 100%)">
            <CategoryHeader>
              <CategoryIcon bgColor="#10b981">
                <Zap size={24} />
              </CategoryIcon>
              <CategoryTitle>Backend & Cloud</CategoryTitle>
            </CategoryHeader>
            <TechList>
              {backendTechs.map((tech) => (
                <TechItem key={tech}>
                  <TechDot color="#10b981" />
                  <TechName>{tech}</TechName>
                </TechItem>
              ))}
            </TechList>
          </CategoryCard>

          <CategoryCard gradient="linear-gradient(135deg, #e9d5ff 0%, #f5f3ff 100%)">
            <CategoryHeader>
              <CategoryIcon bgColor="#8b5cf6">
                <Code size={24} />
              </CategoryIcon>
              <CategoryTitle>Tools & Workflow</CategoryTitle>
            </CategoryHeader>
            <TechList>
              {toolsTechs.map((tech) => (
                <TechItem key={tech}>
                  <TechDot color="#8b5cf6" />
                  <TechName>{tech}</TechName>
                </TechItem>
              ))}
            </TechList>
          </CategoryCard>
        </CategoriesGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills;