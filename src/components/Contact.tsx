import React, { useState } from 'react';
import styled from 'styled-components';
import { Send, MapPin, Phone, Mail, Globe } from 'lucide-react';
import { contactDetails, aboutData, socialLinks } from '../data/portfolioData';
import { Container, Section, SectionTitle, SectionSubtitle, TitleUnderline, Button } from '../styles/GlobalStyles';

const ContactSection = styled(Section)`
  background: white;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactIntro = styled.div`
  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 1.5rem;
  }

  p {
    color: #6b7280;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const ContactIcon = styled.div`
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
`;

const ContactContent = styled.div`
  h4 {
    font-size: 1.125rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
  }

  p {
    color: #6b7280;
    margin-bottom: 0.5rem;
  }

  a {
    color: #3b82f6;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #1d4ed8;
    }
  }
`;

const SocialSection = styled.div`
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;

  h4 {
    font-size: 1.125rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 1rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const SocialLink = styled.a<{ bgColor: string }>`
  width: 3rem;
  height: 3rem;
  background: ${props => props.bgColor};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.875rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ContactForm = styled.div`
  background: #f9fafb;
  border-radius: 1.5rem;
  padding: 2rem;
`;

const FormTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: transparent;
    box-shadow: 0 0 0 2px #3b82f6;
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
  resize: none;
  font-family: inherit;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: transparent;
    box-shadow: 0 0 0 2px #3b82f6;
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const SubmitButton = styled(Button)`
  width: 100%;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: white;
  justify-content: center;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(59, 130, 246, 0.5);
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle>Get In Touch</SectionTitle>
        <TitleUnderline />
        <SectionSubtitle>
          Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
        </SectionSubtitle>

        <ContactGrid>
          <ContactInfo>
            <ContactIntro>
              <h3>Let's Connect</h3>
              <p>
                I'm always interested in hearing about new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </ContactIntro>

            <ContactDetails>
              {contactDetails.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <ContactItem key={index}>
                    <ContactIcon>
                      <Icon size={20} />
                    </ContactIcon>
                    <ContactContent>
                      <h4>{contact.label}</h4>
                      <p>{contact.text}</p>
                      {contact.link && contact.link !== '#' && (
                        <a href={contact.link} target={contact.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                          {contact.actionText || 'Connect'} →
                        </a>
                      )}
                    </ContactContent>
                  </ContactItem>
                );
              })}
            </ContactDetails>

            <SocialSection>
              <h4>Direct Contact & Social Links</h4>
              <SocialLinks>
                <SocialLink href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" bgColor="#25D366" title="WhatsApp Direct">WA</SocialLink>
                <SocialLink href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" bgColor="#E1306C" title="Instagram Profile">IG</SocialLink>
                <SocialLink href={socialLinks.email} bgColor="#EA4335" title="Direct Email">Mail</SocialLink>
                <SocialLink href={socialLinks.phone} bgColor="#34B7F1" title="Direct Phone Call">Call</SocialLink>
                <SocialLink href={socialLinks.googleMaps} target="_blank" rel="noopener noreferrer" bgColor="#4285F4" title="Google Maps Location">Map</SocialLink>
              </SocialLinks>
            </SocialSection>
          </ContactInfo>

          <ContactForm>
            <FormTitle>Send Message</FormTitle>
            <Form onSubmit={handleSubmit}>
              <FormRow>
                <FormGroup>
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="email">Your Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </FormGroup>
              </FormRow>
              
              <FormGroup>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Discussion"
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="message">Message</Label>
                <TextArea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell me about your project..."
                  required
                />
              </FormGroup>
              
              <SubmitButton type="submit">
                <Send size={18} />
                <span>Send Message</span>
              </SubmitButton>
            </Form>
          </ContactForm>
        </ContactGrid>
      </Container>
    </ContactSection>
  );
};

export default Contact;