/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components';
import BurgerMenu from './BurgerMenu';
import LinkComponent from './LinkComponent';
import Loupe from '../assets/loupe.svg';

const Navigation = styled.nav`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  justify-content: space-evenly;
  ${({ theme }) => theme.media.tablet} {
    justify-content: space-between;
    position: relative;
    flex-flow: row;
  }
`;

const PrimaryNavigation = styled.div`
  display: none;
  ${({ theme }) => theme.media.tablet} {
    align-items: center;
    justify-content: space-between;
    display: flex;
    padding: 0 1.25rem;
  }
`;

const BurgerContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.625rem;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  ${({ theme }) => theme.media.tablet} {
    padding: 0 1.25rem;
  } ;
`;

const SearchIconContainer = styled(BurgerContainer)`
  border-right: 0;
  border-left: 1px solid ${({ theme }) => theme.colors.border};
`;

const PageTitle = styled.h1`
  text-align: center;
  flex-grow: 2;
  font-weight: 100;
  margin: 0.625rem;
  align-self: center;
`;

const NavigationItem = styled.span`
  padding: 2rem;
`;

const Header = () => (
  <Navigation>
    {/* Burger menu */}
    <BurgerContainer>
      <BurgerMenu />
    </BurgerContainer>
    {/* Left nav */}
    <PrimaryNavigation>
      <NavigationItem>
        <LinkComponent href="/">HOMES</LinkComponent>
      </NavigationItem>
      <NavigationItem>
        <LinkComponent href="/hosts">HOSTS</LinkComponent>
      </NavigationItem>
    </PrimaryNavigation>
    <PageTitle>
      <LinkComponent href="/homes">PLUM GUIDE</LinkComponent>
    </PageTitle>
    {/* Right nav */}
    <PrimaryNavigation>
      <LinkComponent href="/support">
        <NavigationItem>Need help?</NavigationItem>
      </LinkComponent>
      <LinkComponent href="/sign-in">
        <NavigationItem>Login</NavigationItem>
      </LinkComponent>
    </PrimaryNavigation>
    {/* Search Icon */}
    <SearchIconContainer>
      <LinkComponent href="/browse">
        <img src={Loupe.src} alt="search-icon" width="24" height="24" />
      </LinkComponent>
    </SearchIconContainer>
  </Navigation>
);

export default Header;
