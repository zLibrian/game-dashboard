import { MdSearch } from 'react-icons/md';
import { Input } from '../Input';
import { StyledHeader } from './styles';
import { UserArea } from './UserArea';

export const Header = () => {
  return (
    <StyledHeader>
      <Input placeholder="Buscar..." icon={MdSearch} />
      <UserArea />
    </StyledHeader>
  );
};
