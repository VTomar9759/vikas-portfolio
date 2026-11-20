import React from 'react';
import styled, { keyframes } from 'styled-components';
import { contactDetails } from '../data/portfolioData';
import { Container, Section, SectionTitle, SectionSubtitle, TitleUnderline } from '../styles/GlobalStyles';

/* ── Animations ── */
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0%   { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`;

const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.25); }
  50%       { box-shadow: 0 0 0 10px rgba(99, 102, 241, 0); }
`;

/* ── Section ── */
const ContactSection = styled(Section)`
  background: #0f0f1a;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -200px; right: -200px;
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 65%);
    border-radius: 50%;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -180px; left: -180px;
    width: 450px; height: 450px;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 65%);
    border-radius: 50%;
    pointer-events: none;
  }
`;

/* Override title colors for dark bg */
const DarkSectionTitle = styled(SectionTitle)`
  color: #f9fafb;
`;

const DarkSectionSubtitle = styled(SectionSubtitle)`
  color: #9ca3af;
`;

/* ── Wrapper ── */
const Wrapper = styled.div`
  max-width: 860px;
  margin: 0 auto;
  animation: ${fadeInUp} 0.65s ease both;
`;

/* ── Intro block ── */
const IntroBlock = styled.div`
  text-align: center;
  margin-bottom: 3.5rem;
`;

const StatusDot = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: rgba(16, 185, 129, 0.12);
  color: #10b981;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.4rem 1rem;
  border-radius: 2rem;
  border: 1px solid rgba(16,185,129,0.25);
  margin-bottom: 1.5rem;

  &::before {
    content: '';
    width: 7px; height: 7px;
    background: #10b981;
    border-radius: 50%;
    animation: ${pulse} 2s ease-in-out infinite;
  }
`;

const IntroHeading = styled.h3`
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 800;
  color: #f9fafb;
  line-height: 1.25;
  margin-bottom: 1rem;

  span {
    background: linear-gradient(90deg, #818cf8, #c084fc, #818cf8);
    background-size: 800px auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${shimmer} 3s linear infinite;
  }
`;

const IntroText = styled.p`
  color: #9ca3af;
  font-size: 1.05rem;
  line-height: 1.7;
  max-width: 540px;
  margin: 0 auto;
`;

/* ── Cards grid ── */
const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.1rem;
`;

const ContactCard = styled.a`
  display: flex;
  align-items: center;
  gap: 1.1rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.25rem;
  padding: 1.4rem 1.5rem;
  text-decoration: none;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  /* left accent bar */
  &::before {
    content: '';
    position: absolute;
    left: 0; top: 15%; bottom: 15%;
    width: 3px;
    border-radius: 2px;
    background: var(--accent, linear-gradient(180deg, #818cf8, #c084fc));
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  /* hover overlay */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(99,102,241,0.06) 0%, rgba(168,85,247,0.06) 100%);
    opacity: 0;
    transition: opacity 0.35s ease;
  }

  &:hover {
    transform: translateY(-5px) scale(1.015);
    border-color: rgba(99, 102, 241, 0.35);
    box-shadow: 0 16px 48px rgba(99, 102, 241, 0.18);

    &::before { opacity: 1; }
    &::after  { opacity: 1; }
  }
`;

const IconBox = styled.div<{ gradient: string }>`
  width: 3rem;
  height: 3rem;
  min-width: 3rem;
  border-radius: 0.9rem;
  background: ${p => p.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 6px 18px rgba(0,0,0,0.3);
  flex-shrink: 0;
  position: relative;
  z-index: 1;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  position: relative;
  z-index: 1;
`;

const CardTag = styled.span`
  font-size: 0.7rem;
  font-weight: 700;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.2rem;
`;

const CardValue = styled.span`
  font-size: 0.95rem;
  font-weight: 600;
  color: #e5e7eb;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardCTA = styled.span`
  font-size: 0.78rem;
  color: #818cf8;
  font-weight: 500;
  margin-top: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: gap 0.2s ease;

  ${ContactCard}:hover & {
    gap: 0.45rem;
  }
`;

/* ── gradient map ── */
const GRADIENTS: Record<string, string> = {
  Phone:             'linear-gradient(135deg, #10b981, #059669)',
  'Email Address':   'linear-gradient(135deg, #ef4444, #dc2626)',
  'WhatsApp Direct': 'linear-gradient(135deg, #25D366, #128C7E)',
  Instagram:         'linear-gradient(135deg, #f97316, #e1306c)',
  LinkedIn:          'linear-gradient(135deg, #0ea5e9, #0077b5)',
};

const Contact = () => {
  return (
    <ContactSection id="contact">
      <Container>
        <DarkSectionTitle>Get In Touch</DarkSectionTitle>
        <TitleUnderline />
        <DarkSectionSubtitle>
          Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
        </DarkSectionSubtitle>

        <Wrapper>
          {/* Intro */}
          <IntroBlock>
            <div><StatusDot>Available for work</StatusDot></div>
            <IntroHeading>
              Let's Build Something <span>Amazing Together</span>
            </IntroHeading>
            <IntroText>
              I'm always open to new opportunities and exciting projects. Whether you have a question,
              a collaboration idea, or just want to say hi — my inbox is always open.
            </IntroText>
          </IntroBlock>

          {/* Cards */}
          <CardsGrid>
            {contactDetails.map((contact, i) => {
              const Icon = contact.icon;
              const gradient = GRADIENTS[contact.label] || 'linear-gradient(135deg,#4f46e5,#7c3aed)';
              return (
                <ContactCard
                  key={i}
                  href={contact.link && contact.link !== '#' ? contact.link : undefined}
                  target={contact.link?.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  style={{ '--accent': gradient } as React.CSSProperties}
                >
                  <IconBox gradient={gradient}>
                    <Icon size={21} />
                  </IconBox>
                  <CardBody>
                    <CardTag>{contact.label}</CardTag>
                    <CardValue>{contact.text}</CardValue>
                    {contact.actionText && (
                      <CardCTA>{contact.actionText} <span>→</span></CardCTA>
                    )}
                  </CardBody>
                </ContactCard>
              );
            })}
          </CardsGrid>
        </Wrapper>
      </Container>
    </ContactSection>
  );
};

export default Contact;
