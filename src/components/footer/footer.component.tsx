import { FooterContainer, IconsContainer } from './footer.styles';

import { ICONS } from '../../utils/icons/icons.utils';
import { MY_INFOS } from '../../utils/myInfos/myInfos.utils';
import { LinkIcon } from '../icon/icon.component';
import { ScaledTextsVariant } from '../../utils/framer-motion/variants.utils';

import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <FooterContainer>
      <IconsContainer>
        {Object.keys(MY_INFOS).map((info, index) => {
          if (info === 'phoneNumber') return null;
          else
            return (
              <motion.div
                variants={ScaledTextsVariant}
                initial='enter'
                animate='visible'
                exit='exit'
                whileHover='hover'
                custom={index}
              >
                <LinkIcon iconType={ICONS[info]} whereTo={MY_INFOS[info]} />
              </motion.div>
            );
        })}
      </IconsContainer>
    </FooterContainer>
  );
};
