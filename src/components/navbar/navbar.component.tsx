import { PBase } from '../../global.styles';
import { GAME_BLOCK_CONTENT_INDEXES } from '../../utils/modal/getModalContent.utils';
import { RouterLinks, NavbarWrapper } from './navbar.styles';

import { motion } from 'framer-motion';
import { ScaledTextsVariant } from '../../utils/framer-motion/variants.utils';
import { NavbarLinks } from './navbarLinks/navbarLinks.component';

export const Navbar = () => {
  const capitalize = (name: string) =>
    name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  return (
    <NavbarWrapper>
      <RouterLinks>
        {Object.keys(GAME_BLOCK_CONTENT_INDEXES)
          .slice(0, 3)
          .map((sectionName, index) => {
            console.log(sectionName, capitalize(sectionName), index);
            return (
              <PBase>
                <motion.div
                  variants={ScaledTextsVariant}
                  initial='enter'
                  animate='visible'
                  exit='exit'
                  custom={index}
                >
                  <NavbarLinks index={index} text={capitalize(sectionName)} />
                </motion.div>
              </PBase>
            );
          })}
      </RouterLinks>
    </NavbarWrapper>
  );
};
