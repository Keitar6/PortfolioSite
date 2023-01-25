import { FC } from 'react';
import { Icon } from '@iconify/react';
import { ICONS } from '../../utils/icons/icons.utils';
import { MY_INFOS } from '../../utils/myInfos/myInfos.utils';

type LinkIconProps = {
  whereTo?: string;
  iconType: string;
  width?: number;
};

export const LinkIcon: FC<LinkIconProps> = ({
  whereTo,
  iconType,
  width = 32,
}) => {
  const ifEmail =
    whereTo === MY_INFOS.emailPrivate ? `mailto:?Subject=subject` : whereTo;
  return (
    <>
      {iconType === ICONS.phone ? (
        <Icon icon={iconType} width={width} color='black' />
      ) : (
        <a rel='noreferrer' target='_blank' href={whereTo ? ifEmail : ''}>
          <Icon icon={iconType} width={width} color='black' />
        </a>
      )}
    </>
  );
};
