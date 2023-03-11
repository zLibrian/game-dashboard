import { InputHTMLAttributes } from 'react';
import { IconType } from 'react-icons';
import { StyledInput, StyledInputContainer } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  placeholder: string;
  icon?: IconType | React.ComponentType;
};

export const Input = ({ children, icon: Icon, ...props }: InputProps) => {
  return (
    <StyledInputContainer>
      {Icon && <Icon size={'1.75rem'} />}
      {children}
      <StyledInput {...props} />
    </StyledInputContainer>
  );
};
