import { motion, AnimatePresence } from 'framer-motion';
import { ScaledTextsVariant } from '../../../utils/framer-motion/variants.utils';
import { NavbarLinks } from '../navbarLinks/navbarLinks.component';
import { PBase } from '../../../global.styles';

import { GAME_BLOCK_CONTENT_INDEXES } from '../../../utils/modal/getModalContent.utils';
import { FC } from 'react';

export const NavbarLinksAll: FC = () => {
  const capitalize = (name: string) =>
    name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  const arrayToBeMapped = Object.keys(GAME_BLOCK_CONTENT_INDEXES);

  return (
    <AnimatePresence key='NavbarLinks'>
      {arrayToBeMapped.map((sectionName, index) =>
        capitalize(sectionName) !== 'Education' ? (
          <PBase key={sectionName}>
            <motion.div
              key='NavbarLinks'
              variants={ScaledTextsVariant}
              initial='enter'
              animate='visible'
              exit='exit'
              custom={index}
            >
              <NavbarLinks index={index} text={capitalize(sectionName)} />
            </motion.div>
          </PBase>
        ) : null
      )}
    </AnimatePresence>
  );
};
