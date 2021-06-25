/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components';
import BurgerMenu from './BurgerMenu';
import LinkComponent from './LinkComponent';
import Loupe from '../assets/loupe.svg';

const Navigation = styled.nav`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  ${({ theme }) => theme.media.tablet} {
    position: relative;
    flex-flow: row;
    justify-content: space-between;
  } ;
`;

const LeftNavigation = styled.div`
  display: none;
  ${({ theme }) => theme.media.tablet} {
    align-items: center;
    justify-content: space-evenly;
    display: flex;
    padding: 0 1.25rem;
  }
`;
const BurgerContainer = styled.div`
  display: flex;
  align-items: center;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
`;
const PageTitle = styled.h1`
  font-weight: 100;
  margin: 0.625rem;
  text-align: center;
`;
const RightNavigation = styled.div`
  display: none;
  ${({ theme }) => theme.media.tablet} {
    display: flex;
    align-items: center;
    padding: 0 1.25rem;
  }
`;
const SearchIconContainer = styled.div`
  display: flex;
  align-items: center;
  border-left: 1px solid ${({ theme }) => theme.colors.border};
`;
const NavigationItem = styled.span`
  padding: 0 0.625rem;
`;

const Header = () => (
  <Navigation>
    {/* Burger menu */}
    <BurgerContainer>
      <BurgerMenu />
    </BurgerContainer>
    {/* Left nav */}
    <LeftNavigation>
      <NavigationItem>
        <LinkComponent href="/homes">HOMES</LinkComponent>
      </NavigationItem>
      <NavigationItem>
        <LinkComponent href="/hosts">HOSTS</LinkComponent>
      </NavigationItem>
    </LeftNavigation>
    <PageTitle>
      <LinkComponent href="/">PLUM GUIDE</LinkComponent>
    </PageTitle>
    {/* Right nav */}
    <RightNavigation>
      <LinkComponent href="/support">
        <NavigationItem>Need help?</NavigationItem>
      </LinkComponent>
      <LinkComponent href="/sign-in">
        <NavigationItem>Login</NavigationItem>
      </LinkComponent>
    </RightNavigation>
    {/* Search Icon */}
    <SearchIconContainer>
      <LinkComponent href="/browse">
        <img src={Loupe.src} alt="search-icon" width="24" height="24" />
      </LinkComponent>
    </SearchIconContainer>
  </Navigation>
);

export default Header;
