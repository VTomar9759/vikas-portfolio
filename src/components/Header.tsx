import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Menu, X, Home, User, Briefcase, Code, Award, Mail, Send } from 'lucide-react';
import { aboutData } from '../data/portfolioData';

const HeaderContainer = styled.header<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: ${props => props.isScrolled ? '0.75rem 1rem' : '1.25rem 1rem'};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${props => props.isScrolled ? 'rgba(255, 255, 255, 0.88)' : 'rgba(255, 255, 255, 0.7)'};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid ${props => props.isScrolled ? 'rgba(229, 231, 235, 0.8)' : 'transparent'};
  box-shadow: ${props => props.isScrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.08)' : 'none'};
`;

const HeaderContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
`;

const LogoIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 800;
  font-size: 1.1rem;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: rotate(6deg) scale(1.05);
  }
`;

const LogoInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoText = styled.span`
  font-size: 1.15rem;
  font-weight: 800;
  color: #0f172a;
  line-height: 1.2;
  letter-spacing: -0.3px;
`;

const LogoSubtext = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: #2563eb;
  letter-spacing: 0.5px;
`;

const DesktopNav = styled.nav`
  display: none;
  align-items: center;
  gap: 0.35rem;
  background: rgba(241, 245, 249, 0.7);
  padding: 0.35rem 0.5rem;
  border-radius: 9999px;
  border: 1px solid rgba(226, 232, 240, 0.8);

  @media (min-width: 850px) {
    display: flex;
  }
`;

const NavButton = styled.button<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${props => props.active ? 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)' : 'transparent'};
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.875rem;
  color: ${props => props.active ? '#ffffff' : '#475569'};
  box-shadow: ${props => props.active ? '0 4px 12px rgba(37, 99, 235, 0.3)' : 'none'};

  &:hover {
    color: ${props => props.active ? '#ffffff' : '#2563eb'};
    background: ${props => props.active ? 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)' : 'rgba(255, 255, 255, 0.8)'};
    transform: translateY(-1px);
  }

  svg {
    opacity: ${props => props.active ? 1 : 0.7};
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const CTAButton = styled.button`
  display: none;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 1.25rem;
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  color: white;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 0.875rem;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.35);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(37, 99, 235, 0.45);
  }

  @media (min-width: 640px) {
    display: inline-flex;
  }
`;

const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.75rem;
  color: #1e293b;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #e2e8f0;
    color: #2563eb;
  }

  @media (min-width: 850px) {
    display: none;
  }
`;

const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: absolute;
  top: 100%;
  left: 1rem;
  right: 1rem;
  margin-top: 0.5rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 1.25rem;
  padding: 1rem;
  border: 1px solid rgba(226, 232, 240, 0.9);
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.15);
  animation: slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (min-width: 850px) {
    display: none;
  }
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const MobileNavButton = styled.button<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 1.25rem;
  border-radius: 0.85rem;
  transition: all 0.3s ease;
  background: ${props => props.active ? 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)' : 'transparent'};
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
  text-align: left;
  color: ${props => props.active ? '#ffffff' : '#334155'};
  
  &:hover {
    background: ${props => props.active ? 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)' : '#f1f5f9'};
    color: ${props => props.active ? '#ffffff' : '#2563eb'};
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <HeaderContent>
        <Logo onClick={() => scrollToSection('home')}>
          <LogoIcon>VT</LogoIcon>
          <LogoInfo>
            <LogoText>{aboutData.name}</LogoText>
            <LogoSubtext>Portfolio</LogoSubtext>
          </LogoInfo>
        </Logo>

        <DesktopNav>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavButton
                key={item.id}
                active={activeSection === item.id}
                onClick={() => scrollToSection(item.id)}
              >
                <Icon size={16} />
                <span>{item.label}</span>
              </NavButton>
            );
          })}
        </DesktopNav>

        <HeaderRight>
          <CTAButton onClick={() => scrollToSection('contact')}>
            <Send size={15} />
            <span>Hire Me</span>
          </CTAButton>

          <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </MobileMenuButton>
        </HeaderRight>
      </HeaderContent>

      <MobileMenu isOpen={isMenuOpen}>
        <MobileNav>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <MobileNavButton
                key={item.id}
                active={activeSection === item.id}
                onClick={() => scrollToSection(item.id)}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </MobileNavButton>
            );
          })}
        </MobileNav>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;