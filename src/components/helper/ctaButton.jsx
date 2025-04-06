// CTAButton.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CTAButton = styled(Link)`
  text-decoration: none;
  padding: 14px 28px;
  border-radius: 14px;
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(90deg, #7f5eff, #b39aff);
  box-shadow: 0 0 8px #b39aff;
  border: 2px solid #fff;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:hover {
    color: #000;
    background: #fff;
    box-shadow: 0 0 12px #fff, 0 0 20px #7f5eff;
    transform: translateY(-3px);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    height: 100%; width: 0;
    background: #fff;
    z-index: -1;
    transition: width 0.4s ease;
  }

  &:hover:before {
    width: 100%;
  }
`;
