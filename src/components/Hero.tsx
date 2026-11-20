import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Download, Mail, MapPin, Calendar, Phone, MessageCircle, Instagram } from 'lucide-react';
import { aboutData, socialLinks } from '../data/portfolioData';
import { Container, AnimatedElement, Button, GradientText } from '../styles/GlobalStyles';
import myimage1 from '../assets/image1.jpg'
import SendContactModal from '../modal/SendContact';
import { MdMarkEmailRead } from 'react-icons/md';
import DownloadPdf from '../modal/DownloadResume';



const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #dbeafe 0%, #ffffff 50%, #f3e8ff 100%);
  padding-top: 5rem;
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
  padding: 3rem 0;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #1f2937;
  line-height: 1.1;

  @media (min-width: 1024px) {
    font-size: 3.75rem;
  }

  @media (max-width: 640px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  color: #6b7280;
  font-weight: 300;

  @media (min-width: 1024px) {
    font-size: 1.875rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.125rem;
  color: #6b7280;
  line-height: 1.6;
  max-width: 32rem;
`;

const QuickInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  font-size: 0.875rem;
  color: #6b7280;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: #3b82f6;
    width: 1rem;
    height: 1rem;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const SocialLink = styled.a`
  width: 3rem;
  height: 3rem;
  background: white;
  border-radius: 50%;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  transition: all 0.3s ease;

  &:hover {
    color: #3b82f6;
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 1024px) {
    justify-content: flex-end;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const ProfileImageContainer = styled.div`
  width: 17rem;
  height: 17rem;
  max-width: 80vw;
  max-height: 80vw;
  border-radius: 50%;
  background: linear-gradient(135deg, #60a5fa 0%, #a855f7 100%);
  padding: 0.5rem;

  @media (min-width: 640px) {
    width: 22rem;
    height: 22rem;
  }

  @media (min-width: 1024px) {
    width: 24rem;
    height: 24rem;
  }
`;

const ProfileImageInner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: white;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const FloatingElement = styled.div<{ position: string; animation: string; color: string }>`
  position: absolute;
  ${props => props.position}
  width: ${props => props.position.includes('top') ? '5rem' : props.position.includes('bottom') ? '4rem' : '3rem'};
  height: ${props => props.position.includes('top') ? '5rem' : props.position.includes('bottom') ? '4rem' : '3rem'};
  background: ${props => props.color};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  animation: ${props => props.animation} 2s ease-in-out infinite;
  font-size: ${props => props.position.includes('top') ? '2rem' : props.position.includes('bottom') ? '1.25rem' : '1.125rem'};
`;

const AvailabilityBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.875rem;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  color: #2563eb;
  margin-bottom: 1rem;

  .pulse-dot {
    width: 0.5rem;
    height: 0.5rem;
    background-color: #10b981;
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
    animation: pulseDot 2s infinite;
  }

  @keyframes pulseDot {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
    }
    70% {
      transform: scale(1);
      box-shadow: 0 0 0 6px rgba(16, 185, 129, 0);
    }
    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
    }
  }
`;

const Hero = () => {
  const [modalOpen, setModal] = useState(false);
  const [modalOpenpdf, modalOpenPdf] = useState(false);
  const [detial, setDetials] = useState({
    text: "You want to send email directly.",
    lebel: "Email Address",
    icon: <MdMarkEmailRead className='icon-content' />,
    link: "mailto:ervikastomar0@gmail.com"

  });

  return (
    <HeroSection id="home">
      {modalOpen &&<SendContactModal setPdfModal={setModal} detials={detial} />}
      {modalOpenpdf &&<DownloadPdf setPdfModal={modalOpenPdf}  />}
      <Container>
        <HeroGrid>
          <AnimatedElement>
            <HeroContent>
              <div>
                <AvailabilityBadge>
                  <span className="pulse-dot"></span>
                  <span>Available for Full-Time Roles & Projects</span>
                </AvailabilityBadge>
                <HeroTitle>
                  Hi, I'm{' '}
                  <GradientText>{aboutData.name}</GradientText>
                </HeroTitle>
                <HeroSubtitle>
                  {aboutData.role}
                </HeroSubtitle>
                <HeroDescription>
                  {aboutData.aboutme}
                </HeroDescription>
              </div>

              <ActionButtons>
                <Button variant="primary" onClick={() => modalOpenPdf(true)}>
                  <Download size={18} />
                  <span>Download CV</span>
                </Button>
              
                  <Button onClick={()=>setModal(true)} variant="secondary">
                    <Mail size={18} />
                    <span>Contact Me</span>
                  </Button>
                
              </ActionButtons>

              <SocialLinks>
                <SocialLink href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" title="WhatsApp Direct">
                  <MessageCircle size={20} />
                </SocialLink>
                <SocialLink href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" title="Instagram">
                  <Instagram size={20} />
                </SocialLink>
                <SocialLink href={socialLinks.email} title="Email Me">
                  <Mail size={20} />
                </SocialLink>
                <SocialLink href={socialLinks.phone} title="Call Me">
                  <Phone size={20} />
                </SocialLink>
                <SocialLink href={socialLinks.googleMaps} target="_blank" rel="noopener noreferrer" title="Location on Maps">
                  <MapPin size={20} />
                </SocialLink>
              </SocialLinks>
            </HeroContent>
          </AnimatedElement>

          <AnimatedElement delay={300}>
            <ImageContainer>
              <ImageWrapper>
                <ProfileImageContainer>
                  <ProfileImageInner>
                    <ProfileImage
                      src={myimage1}
                      alt={aboutData.name}
                    />
                  </ProfileImageInner>
                </ProfileImageContainer>

                <FloatingElement
                  position="top: -1rem; right: -1rem;"
                  animation="bounce"
                  color="#fbbf24"
                >
                  <span>⚛️</span>
                </FloatingElement>
                <FloatingElement
                  position="bottom: -1rem; left: -1rem;"
                  animation="pulse"
                  color="#34d399"
                >
                
                  <span>🚀</span>
                </FloatingElement>
                <FloatingElement
                  position="top: 50%; left: -2rem;"
                  animation="ping"
                  color="#f472b6"
                >
                  <span>💡</span>
                </FloatingElement>
              </ImageWrapper>
            </ImageContainer>
          </AnimatedElement>
        </HeroGrid>
      </Container>
    </HeroSection>
  );
};

export default Hero;