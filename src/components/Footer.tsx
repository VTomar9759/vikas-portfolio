import React from 'react';
import styled from 'styled-components';
import { Heart, ArrowUp } from 'lucide-react';
import { aboutData, socialLinks } from '../data/portfolioData';
import { Container } from '../styles/GlobalStyles';

const FooterSection = styled.footer`
  background: #1f2937;
  color: white;
  padding: 3rem 0;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const BrandIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1.125rem;
`;

const BrandText = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
`;

const BrandDescription = styled.p`
  color: #9ca3af;
  line-height: 1.6;
`;

const FooterTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FooterLink = styled.a`
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: white;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: #9ca3af;
`;

const BottomBar = styled.div`
  border-top: 1px solid #374151;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Copyright = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #9ca3af;

  svg {
    color: #ef4444;
    width: 1rem;
    height: 1rem;
  }
`;

const ScrollToTop = styled.button`
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  padding: 0.75rem;
  border-radius: 50%;
  border: none;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`;

const FinalCopyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #374151;
  color: #9ca3af;
`;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterSection>
      <Container>
        <FooterGrid>
          <FooterColumn>
            <Brand>
              <BrandIcon>VT</BrandIcon>
              <BrandText>{aboutData.name}</BrandText>
            </Brand>
            <BrandDescription>
              {aboutData.role}. Building responsive, high-performance web applications and dynamic user interfaces.
            </BrandDescription>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLinks>
              {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((link) => (
                <FooterLink key={link} href={`#${link.toLowerCase()}`}>
                  {link}
                </FooterLink>
              ))}
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Get In Touch</FooterTitle>
            <ContactInfo>
              <p><a href={socialLinks.email} style={{ color: '#9ca3af', textDecoration: 'none' }}>{aboutData.Email}</a></p>
              <p><a href={socialLinks.phone} style={{ color: '#9ca3af', textDecoration: 'none' }}>{aboutData.Phone}</a></p>
              <p><a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', textDecoration: 'none', fontWeight: 500 }}>WhatsApp Direct Chat</a></p>
              <p><a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" style={{ color: '#E1306C', textDecoration: 'none', fontWeight: 500 }}>Instagram: @vikastomar000</a></p>
            </ContactInfo>
          </FooterColumn>
        </FooterGrid>

        <BottomBar>
          <Copyright>
            <span>Made with</span>
            <Heart />
            <span>by {aboutData.name}</span>
          </Copyright>
          
          <ScrollToTop onClick={scrollToTop}>
            <ArrowUp size={20} />
          </ScrollToTop>
        </BottomBar>

        <FinalCopyright>
          <p>© {new Date().getFullYear()} {aboutData.name}. All rights reserved.</p>
        </FinalCopyright>
      </Container>
    </FooterSection>
  );
};

export default Footer;