import styled from 'styled-components';

const StyledFooter = styled.footer`
  min-height: 120px;
  background: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return <StyledFooter>© Copyright Plum Guide 2021</StyledFooter>;
};

export default Footer;
