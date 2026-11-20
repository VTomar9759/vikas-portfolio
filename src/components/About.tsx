import React from 'react';
import styled from 'styled-components';
import { User, Calendar, MapPin, Mail, Phone, Award } from 'lucide-react';
import { aboutData } from '../data/portfolioData';
import { Container, Section, SectionTitle, TitleUnderline } from '../styles/GlobalStyles';

const AboutSection = styled(Section)`
  background: #ffffff;
  position: relative;
`;

const ContentContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const BioCard = styled.div`
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-radius: 1.5rem;
  padding: 2.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.03);
  text-align: center;

  @media (max-width: 640px) {
    padding: 1.5rem;
  }
`;

const RoleBadge = styled.div`
  display: inline-block;
  padding: 0.35rem 1rem;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: white;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 1.25rem;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.25);
`;

const AboutText = styled.p`
  color: #475569;
  line-height: 1.8;
  font-size: 1.125rem;
  margin-bottom: 1.25rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StatCard = styled.div<{ gradient: string }>`
  background: ${props => props.gradient};
  border-radius: 1.25rem;
  padding: 1.75rem 1.5rem;
  text-align: center;
  color: white;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.15);
  }

  .number {
    font-size: 2.25rem;
    font-weight: 800;
    line-height: 1;
    margin-bottom: 0.5rem;
  }

  .label {
    font-size: 0.95rem;
    font-weight: 500;
    opacity: 0.9;
  }
`;

const SectionHeader = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    color: #3b82f6;
  }
`;

const PersonalInfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const InfoCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  background: #f8fafc;
  border-radius: 1rem;
  border: 1px solid #f1f5f9;
  transition: all 0.3s ease;

  &:hover {
    background: #ffffff;
    border-color: #bfdbfe;
    box-shadow: 0 10px 20px -5px rgba(59, 130, 246, 0.1);
    transform: translateY(-2px);
  }
`;

const InfoIcon = styled.div`
  width: 2.75rem;
  height: 2.75rem;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 4px 10px rgba(59, 130, 246, 0.2);
`;

const InfoContent = styled.div`
  min-width: 0;
  
  .label {
    font-size: 0.8rem;
    color: #64748b;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 0.25rem;
  }

  .value {
    color: #1e293b;
    font-weight: 600;
    font-size: 0.95rem;
    word-break: break-word;
  }
`;

const About = () => {
  const personalInfo = [
    { icon: User, label: 'Full Name', value: aboutData.name },
    { icon: Calendar, label: 'Date of Birth', value: aboutData.dateOfBirth },
    { icon: MapPin, label: 'Address', value: aboutData.address },
    { icon: Mail, label: 'Email', value: aboutData.Email },
    { icon: Phone, label: 'Phone', value: aboutData.Phone },
    { icon: Award, label: 'Projects Completed', value: `${aboutData.project}+` },
  ];

  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle>About Me</SectionTitle>
        <TitleUnderline />

        <ContentContainer>
          <BioCard>
            <RoleBadge>{aboutData.role}</RoleBadge>
            <AboutText>
              {aboutData.aboutme}. I specialize in creating modern, responsive web applications 
              using cutting-edge technologies like React.js, Next.js, and TypeScript. My passion 
              lies in transforming complex problems into simple, beautiful, and intuitive solutions.
            </AboutText>
            <AboutText>
              With experience in both frontend and backend development, I bring a comprehensive 
              understanding of the full development lifecycle. I'm always eager to learn new 
              technologies and take on challenging projects that push my skills to the next level.
            </AboutText>
          </BioCard>

          <StatsContainer>
            <StatCard gradient="linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)">
              <div className="number">3+</div>
              <div className="label">Years of Experience</div>
            </StatCard>
            <StatCard gradient="linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)">
              <div className="number">{aboutData.project}+</div>
              <div className="label">Live Projects Delivered</div>
            </StatCard>
            <StatCard gradient="linear-gradient(135deg, #10b981 0%, #047857 100%)">
              <div className="number">100%</div>
              <div className="label">Client Satisfaction</div>
            </StatCard>
          </StatsContainer>

          <div>
            <SectionHeader>
              <User size={24} />
              Personal Information
            </SectionHeader>
            <PersonalInfoGrid>
              {personalInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <InfoCard key={index}>
                    <InfoIcon>
                      <Icon size={20} />
                    </InfoIcon>
                    <InfoContent>
                      <div className="label">{info.label}</div>
                      <div className="value">{info.value}</div>
                    </InfoContent>
                  </InfoCard>
                );
              })}
            </PersonalInfoGrid>
          </div>
        </ContentContainer>
      </Container>
    </AboutSection>
  );
};

export default About;