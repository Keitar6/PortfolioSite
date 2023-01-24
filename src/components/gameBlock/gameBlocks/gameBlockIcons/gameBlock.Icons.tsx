import { Icon } from '@iconify/react';
import { Colors } from '../../../../global.styles';

type GameBlockIconProps = {
  iconName: string;
  iconWidth?: number;
  iconColor?: string;
};

export const GameBlockIcon = ({
  iconName,
  iconWidth = 32,
  iconColor = Colors.primary,
}: GameBlockIconProps) => {
  return (
    <Icon icon={`${iconName}`} color={`${iconColor}`} width={`${iconWidth}`} />
  );
};
