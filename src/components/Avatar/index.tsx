import { ImgHTMLAttributes } from 'react';
import { StyledAvatar } from './styles';

type AvatarProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
};

export const Avatar = (props: AvatarProps) => {
  return <StyledAvatar {...props} />;
};
