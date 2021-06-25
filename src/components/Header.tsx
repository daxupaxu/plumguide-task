/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components';
import BurgerMenu from './BurgerMenu';
import LinkComponent from './LinkComponent';
import Loupe from '../assets/loupe.svg';

const Navigation = styled.nav`
  display: flex;
  flex-flow: column-reverse;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  ${({ theme }) => theme.media.tablet} {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    &:first-child {
      border-right: 1px solid ${({ theme }) => theme.colors.border};
    }
    flex-flow: row;
    justify-content: space-between;
  } ;
`;

const LeftNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  ${({ theme }) => theme.media.tablet} {
    padding: 0 1.25rem;
  } ;
`;
const PageTitle = styled.h1`
  font-weight: 100;
  margin: 0.625rem;
`;
const RightNavigation = styled.div`
  display: none;
  ${({ theme }) => theme.media.tablet} {
    display: flex;
    align-items: center;
    padding: 0 1.25rem;
    &:last-child {
      border-left: 1px solid ${({ theme }) => theme.colors.border};
    }
  } ;
`;
const NavigationItem = styled.span`
  padding: 0 0.625rem;
`;

const Header = () => (
  <Navigation>
    <LeftNavigation>
      <BurgerMenu />
      <LinkComponent href="/">
        <NavigationItem>HOMES</NavigationItem>
      </LinkComponent>
      <LinkComponent href="/hosts">
        <NavigationItem>HOSTS</NavigationItem>
      </LinkComponent>
    </LeftNavigation>
    <LinkComponent href="/homes">
      <PageTitle>PLUM GUIDE</PageTitle>
    </LinkComponent>
    <RightNavigation>
      <LinkComponent href="/support">
        <NavigationItem>Need help?</NavigationItem>
      </LinkComponent>
      <LinkComponent href="/sign-in">
        <NavigationItem>Login</NavigationItem>
      </LinkComponent>
      <LinkComponent href="/browse">
        <img src={Loupe.src} alt="search-icon" width="24" height="24" />
      </LinkComponent>
    </RightNavigation>
  </Navigation>
);

export default Header;
