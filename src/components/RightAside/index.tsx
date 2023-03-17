import { AiOutlineSend } from 'react-icons/ai';
import { CgPhone } from 'react-icons/cg';
import avatar from '../../assets/avatar.png';
import { Avatar } from '../Avatar';
import { Input } from '../Input';
import {
  StyledChatSection,
  StyledFrindsList,
  StyledFrindsSection,
  StyledRightAside,
} from './styles';

export const RightAside = () => {
  return (
    <StyledRightAside>
      <div>
        <h3>Social</h3>
        <StyledFrindsSection>
          <h4>ONLINE</h4>
          <StyledFrindsList>
            <li>
              <Avatar src={avatar} alt="Friend avatar" />
              <div>
                <p>John Doe</p>
                <span>Playing LoL</span>
              </div>
            </li>
            <li>
              <Avatar src={avatar} alt="Friend avatar" />
              <div>
                <p>John Doe</p>
                <span>Playing MWII</span>
              </div>
            </li>
            <li>
              <Avatar src={avatar} alt="Friend avatar" />
              <div>
                <p>John Doe</p>
                <span>Idle</span>
              </div>
            </li>
          </StyledFrindsList>
        </StyledFrindsSection>

        <StyledFrindsSection>
          <StyledFrindsList>
            <h4>OFFLINE</h4>
            <li>
              <Avatar src={avatar} alt="Friend avatar" />
              <div>
                <p>John Doe</p>
                <span>Away</span>
              </div>
            </li>
            <li>
              <Avatar src={avatar} alt="Friend avatar" />
              <div>
                <p>John Doe</p>
                <span>Away</span>
              </div>
            </li>
            <li>
              <Avatar src={avatar} alt="Friend avatar" />
              <div>
                <p>John Doe</p>
                <span>Away</span>
              </div>
            </li>
          </StyledFrindsList>
        </StyledFrindsSection>
      </div>

      <StyledChatSection>
        <div>
          <span>This Lorem Person and 8 others</span>
          <CgPhone size={20} className="phoneIcon" />
        </div>
        <div>
          <Input placeholder="Digite sua mensagem" />
          <div className="sendButton">
            <AiOutlineSend />
          </div>
        </div>
      </StyledChatSection>
    </StyledRightAside>
  );
};
