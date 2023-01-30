import { FC, useContext } from 'react';

import { BareLink } from '../../../global.styles';
import { ModalsContext } from '../../../contexts/modals.context';

import { motion } from 'framer-motion';
import { LinksVariant } from '../../../utils/framer-motion/variants.utils';

type NavbarLinksProps = {
  index: number;
  text: string;
};

export const NavbarLinks: FC<NavbarLinksProps> = ({ index, text }) => {
  const { setIsModalOpen, setClickedGameBlockIndex } =
    useContext(ModalsContext);

  function onClickHandler(index: number) {
    setClickedGameBlockIndex(index);
    setIsModalOpen(true);
  }

  return (
    <>
      <motion.div
        variants={LinksVariant}
        initial='enter'
        whileHover='hover'
        exit='exit'
      >
        {text !== 'Education' ? (
          <BareLink onClick={() => onClickHandler(index)} to='/'>
            {text}
          </BareLink>
        ) : null}
      </motion.div>
    </>
  );
};
