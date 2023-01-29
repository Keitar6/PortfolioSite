import { HpClickContainer } from './hpClickContent.styles';
import { LogoImage } from '../../components/logo/logoImage/logoImage.component';

import { motion } from 'framer-motion';
import { HPLogoVariant } from '../../utils/framer-motion/variants.utils';

export const HpClick = () => {
  return (
    <motion.div
      variants={HPLogoVariant}
      initial='enter'
      animate='visible'
      exit='exit'
    >
      <HpClickContainer>
        <LogoImage logoWidth={14} />
      </HpClickContainer>
    </motion.div>
  );
};
