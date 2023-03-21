import { AiOutlineSend } from 'react-icons/ai';
import { CgPhone } from 'react-icons/cg';
import evelynIcon from '../../assets/evelynIcon.jpg';
import ezrealIcon from '../../assets/ezrealIcon.jpg';
import katarinaIcon from '../../assets/katarinaIcon.jpg';
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
              <Avatar src={evelynIcon} alt="Friend avatar" />
              <div>
                <p>Evelyn Pastora</p>
                <span>Playing LoL</span>
              </div>
            </li>
            <li>
              <Avatar src={ezrealIcon} alt="Friend avatar" />
              <div>
                <p>Ez</p>
                <span>Playing MWII</span>
              </div>
            </li>
            <li>
              <Avatar src={katarinaIcon} alt="Friend avatar" />
              <div>
                <p>MainYasuo</p>
                <span>Idle</span>
              </div>
            </li>
          </StyledFrindsList>
        </StyledFrindsSection>

        <StyledFrindsSection>
          <StyledFrindsList>
            <h4>OFFLINE</h4>
            <li>
              <Avatar src={evelynIcon} alt="Friend avatar" />
              <div>
                <p>Duo Dela</p>
                <span>Away</span>
              </div>
            </li>
            <li>
              <Avatar src={evelynIcon} alt="Friend avatar" />
              <div>
                <p>Duo Dele</p>
                <span>Away</span>
              </div>
            </li>
            <li>
              <Avatar src={ezrealIcon} alt="Friend avatar" />
              <div>
                <p>|Nix</p>
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
