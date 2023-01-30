import { useContext } from 'react';

import { PBase } from '../../global.styles';
import { GAME_BLOCK_CONTENT_INDEXES } from '../../utils/modal/getModalContent.utils';
import { RouterLinks, NavbarWrapper } from './navbar.styles';

import { motion } from 'framer-motion';
import { ScaledTextsVariant } from '../../utils/framer-motion/variants.utils';
import { NavbarLinks } from './navbarLinks/navbarLinks.component';
import { GlobalContext } from '../../contexts/global.context';

import Hamburger from 'hamburger-react';

export const Navbar = () => {
  const { matches, isHamburgerOpen, setHamburgerOpen } =
    useContext(GlobalContext);
  const capitalize = (name: string) =>
    name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  const arrayToBeMapped = Object.keys(GAME_BLOCK_CONTENT_INDEXES);

  const hamburgerHandler = () => setHamburgerOpen(!isHamburgerOpen);

  return (
    <NavbarWrapper>
      <RouterLinks>
        {!matches ? (
          arrayToBeMapped.map((sectionName, index) => (
            <PBase key={sectionName}>
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
          ))
        ) : (
          <Hamburger
            label='Show menu'
            onToggle={(toggled) => {
              if (toggled) {
              } else {
              }
            }}
          />
        )}
      </RouterLinks>
    </NavbarWrapper>
  );
};
