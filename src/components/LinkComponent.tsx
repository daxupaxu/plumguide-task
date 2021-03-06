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
  justify-content: center;
`;

const ChildrenLink = styled.a<ChildrenLinkProps>`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  transition: all 0.2s ease-in-out;
  &.active::before {
    content: '';
    position: absolute;
    bottom: 0;
    min-width: 5%;
    border-bottom: 2px solid #fdbb30;
  }
  &:hover {
    color: #ffa600;
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
