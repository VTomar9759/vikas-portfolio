import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: #333;
    overflow-x: hidden;
    background-color: #ffffff;
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
  }

  /* Focus styles */
  button:focus, a:focus, input:focus, textarea:focus {
    outline: 2px solid #667eea;
    outline-offset: 2px;
  }

  /* Smooth transitions for all interactive elements */
  button, a, input, textarea {
    transition: all 0.3s ease;
  }

  /* Custom Animations */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes bounce {
    0%, 20%, 53%, 80%, 100% {
      transform: translate3d(0,0,0);
    }
    40%, 43% {
      transform: translate3d(0, -30px, 0);
    }
    70% {
      transform: translate3d(0, -15px, 0);
    }
    90% {
      transform: translate3d(0, -4px, 0);
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes ping {
    75%, 100% {
      transform: scale(2);
      opacity: 0;
    }
  }
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.25rem;

  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

export const Section = styled.section`
  padding: 3.5rem 0;

  @media (min-width: 768px) {
    padding: 5rem 0;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.75rem;
  text-align: center;

  @media (min-width: 640px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

export const SectionSubtitle = styled.p`
  font-size: 1rem;
  color: #6b7280;
  text-align: center;
  max-width: 48rem;
  margin: 0 auto 2.5rem;
  line-height: 1.6;

  @media (min-width: 640px) {
    font-size: 1.25rem;
    margin-bottom: 4rem;
  }
`;

export const TitleUnderline = styled.div`
  width: 6rem;
  height: 4px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  margin: 0 auto 1.5rem;
  border-radius: 2px;
`;

export const Grid = styled.div<{ columns?: number; gap?: string }>`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: ${props => props.gap || '2rem'};

  @media (min-width: 768px) {
    grid-template-columns: repeat(${props => Math.min(props.columns || 2, 2)}, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(${props => props.columns || 3}, 1fr);
  }
`;

export const Card = styled.div`
  background: white;
  border-radius: 1.25rem;
  padding: 2rem;
  box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.02);
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid #e5e7eb;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 35px -10px rgba(59, 130, 246, 0.15), 0 10px 15px -5px rgba(0, 0, 0, 0.04);
    border-color: #bfdbfe;
  }
`;

export const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 2.25rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: none;

  ${props => props.variant === 'primary' ? `
    background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
    color: white;
    box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 25px rgba(37, 99, 235, 0.5);
      background: linear-gradient(135deg, #1d4ed8 0%, #6d28d9 100%);
    }
  ` : `
    background: white;
    color: #374151;
    border: 2px solid #e5e7eb;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    
    &:hover {
      border-color: #2563eb;
      color: #2563eb;
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(37, 99, 235, 0.15);
    }
  `}
`;

export const GradientText = styled.span`
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const AnimatedElement = styled.div<{ delay?: number }>`
  animation: fadeInUp 0.8s ease-out forwards;
  animation-delay: ${props => props.delay || 0}ms;
  opacity: 0;
`;