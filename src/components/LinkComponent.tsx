import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
type Props = {
  href: string;
  children: React.ReactNode;
};
type ChildrenLinkProps = {
  className?: string;
};

const LinkContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 0.625rem;
`;

const ChildrenLink = styled.a<ChildrenLinkProps>`
  text-decoration: none;
  padding: 0 0.625rem;
  color: ${({ theme }) => theme.colors.black};
  &.active {
    border-bottom: 1px solid orange;
  }
`;

const LinkComponent = ({ href, children }: Props) => {
  const router = useRouter();
  return (
    <LinkContainer>
      <Link href={href} passHref>
        <ChildrenLink className={router.pathname === href ? 'active' : ''}>
          {children}
        </ChildrenLink>
      </Link>
    </LinkContainer>
  );
};

export default LinkComponent;