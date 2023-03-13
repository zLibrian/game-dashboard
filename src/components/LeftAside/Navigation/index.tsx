import {
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineShopping,
} from 'react-icons/ai';
import { MdOutlineSell } from 'react-icons/md';

import { NavLink } from './NavLink';
import { StyledAsideNav } from './styles';

export const Navigation = () => {
  return (
    <StyledAsideNav>
      <NavLink icon={AiOutlineMenu} size={'2rem'} />

      <NavLink icon={AiOutlineHome} className="active" />
      <NavLink icon={AiOutlineHeart} />
      <NavLink icon={MdOutlineSell} />
      <NavLink icon={AiOutlineShopping} />
    </StyledAsideNav>
  );
};
