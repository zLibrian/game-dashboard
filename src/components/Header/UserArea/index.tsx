import { TbBellRinging } from 'react-icons/tb';
import avatar from '../../../assets/avatar.png';
import { Avatar } from '../../Avatar';
import { StyledUserArea } from './styles';

export const UserArea = () => {
  return (
    <StyledUserArea>
      <TbBellRinging size={'1.25rem'} />
      <Avatar src={avatar} alt="User avatar" />
    </StyledUserArea>
  );
};
