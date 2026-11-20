import React from 'react';
import styled from 'styled-components';
import { Briefcase, Calendar, GraduationCap, Award } from 'lucide-react';
import { experiencesData, educationData, certificates } from '../data/portfolioData';
import { Container, Section, SectionTitle, TitleUnderline, Grid, Card } from '../styles/GlobalStyles';

const ExperienceSection = styled(Section)`
  background: #f9fafb;
`;

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CategorySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

const CategoryIcon = styled.div<{ color: string }>`
  width: 2.5rem;
  height: 2.5rem;
  background: ${props => props.color};
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

const ExperienceCard = styled(Card)<{ borderColor: string }>`
  border-left: 4px solid ${props => props.borderColor};
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`;

const CardContent = styled.div`
  h4 {
    font-size: 1.125rem;
    font-weight: 700;
    color: #1f2937;
  }

  .company {
    color: #3b82f6;
    font-weight: 500;
  }

  .institution {
    color: #10b981;
    font-weight: 500;
  }

  .organization {
    color: #8b5cf6;
    font-weight: 500;
  }
`;

const Duration = styled.span`
  font-size: 0.875rem;
  color: #6b7280;
  background: #f3f4f6;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  white-space: nowrap;
`;

const Description = styled.p`
  color: #6b7280;
  line-height: 1.6;
  margin-top: 0.75rem;
`;

const Status = styled.span`
  font-size: 0.875rem;
  color: #3b82f6;
  background: #dbeafe;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  margin-top: 0.5rem;
  display: inline-block;
`;

const AchievementCard = styled.div`
  background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
  border-radius: 1rem;
  padding: 1.5rem;
  color: white;
`;

const AchievementHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;

  h4 {
    font-size: 1.25rem;
    font-weight: 700;
  }
`;

const AchievementText = styled.p`
  color: #e879f9;
`;

const Experience = () => {
  return (
    <ExperienceSection id="experience">
      <Container>
        <SectionTitle>Experience & Education</SectionTitle>
        <TitleUnderline />

        <ExperienceGrid>
          {/* Work Experience */}
          <CategorySection>
            <CategoryHeader>
              <CategoryIcon color="linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)">
                <Briefcase size={20} />
              </CategoryIcon>
              <CategoryTitle>Work Experience</CategoryTitle>
            </CategoryHeader>

            {experiencesData.map((exp, index) => (
              <ExperienceCard key={index} borderColor="#3b82f6">
                <CardHeader>
                  <CardContent>
                    <h4>{exp.role}</h4>
                    <p className="company">{exp.company}</p>
                  </CardContent>
                  {exp.duration && <Duration>{exp.duration}</Duration>}
                </CardHeader>
                <Description>{exp.description}</Description>
              </ExperienceCard>
            ))}
          </CategorySection>

          {/* Education */}
          <CategorySection>
            <CategoryHeader>
              <CategoryIcon color="linear-gradient(135deg, #10b981 0%, #3b82f6 100%)">
                <GraduationCap size={20} />
              </CategoryIcon>
              <CategoryTitle>Education</CategoryTitle>
            </CategoryHeader>

            {educationData.map((edu, index) => (
              <ExperienceCard key={index} borderColor="#10b981">
                <CardHeader>
                  <CardContent>
                    <h4>{edu.degree}</h4>
                    {edu.institution && (
                      <p className="institution">{edu.institution}</p>
                    )}
                  </CardContent>
                  <Duration>{edu.year}</Duration>
                </CardHeader>
                <Description>{edu.details}</Description>
                {edu.status && <Status>{edu.status}</Status>}
              </ExperienceCard>
            ))}
          </CategorySection>

          {/* Certificates */}
          <CategorySection>
            <CategoryHeader>
              <CategoryIcon color="linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)">
                <Award size={20} />
              </CategoryIcon>
              <CategoryTitle>Certificates</CategoryTitle>
            </CategoryHeader>

            {certificates.map((cert, index) => (
              <ExperienceCard key={index} borderColor="#8b5cf6">
                <CardHeader>
                  <CardContent>
                    <h4>{cert.title}</h4>
                    <p className="organization">{cert.organization}</p>
                  </CardContent>
                  <Duration>{cert.year}</Duration>
                </CardHeader>
                {cert.description && <Description>{cert.description}</Description>}
              </ExperienceCard>
            ))}

            <AchievementCard>
              <AchievementHeader>
                <Award size={32} />
                <h4>Continuous Learning</h4>
              </AchievementHeader>
              <AchievementText>
                Always staying updated with the latest technologies and best practices in web development.
              </AchievementText>
            </AchievementCard>
          </CategorySection>
        </ExperienceGrid>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;