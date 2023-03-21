import { TbBellRinging } from 'react-icons/tb';
import ahriIcon from '../../../assets/ahriIcon.png';
import { Avatar } from '../../Avatar';
import { StyledUserArea } from './styles';

export const UserArea = () => {
  return (
    <StyledUserArea>
      <TbBellRinging size={'1.25rem'} />
      <Avatar src={ahriIcon} alt="User avatar" />
    </StyledUserArea>
  );
};
