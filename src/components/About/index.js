import React from 'react';
import styled from 'styled-components';

// Styled Components
const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const About = () => {
  return (
    <div>
      <h2>About</h2>
      <p>This is the about section with social media links below:</p>
      <SocialMediaIcons>
        <SocialMediaIcon href="https://github.com/" target="_blank" rel="noreferrer">
          <i className="fab fa-github" />
        </SocialMediaIcon>
        <SocialMediaIcon href="https://linkedin.com/" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin" />
        </SocialMediaIcon>
        <SocialMediaIcon href="https://twitter.com/" target="_blank" rel="noreferrer">
          <i className="fab fa-twitter" />
        </SocialMediaIcon>
      </SocialMediaIcons>
    </div>
  );
};

export default About;
