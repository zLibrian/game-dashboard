import { HTMLAttributes } from 'react';
import { IconType } from 'react-icons';
import { StyledAsideNavLink } from './styles';

type NavLinkProps = HTMLAttributes<HTMLAnchorElement> & {
  icon: IconType;
  size?: string;
};

export const NavLink = ({ icon: Icon, ...props }: NavLinkProps) => {
  return (
    <StyledAsideNavLink {...props}>
      <Icon size={props.size ? props.size : '1.30rem'} />
    </StyledAsideNavLink>
  );
};
