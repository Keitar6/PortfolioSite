import { useContext } from 'react';
import { ModalsContext } from '../../contexts/modals.context';
import { PBase, TextLink } from '../../global.styles';
import { GAME_BLOCK_CONTENT_INDEXES } from '../../utils/modal/getModalContent.utils';
import { RouterLinks, NavbarWrapper } from './navbar.styles';

export const Navbar = () => {
  const { setIsModalOpen, setClickedGameBlockIndex } =
    useContext(ModalsContext);

  function aboutOnClickHandler(index: number) {
    setClickedGameBlockIndex(index);
    setIsModalOpen(true);
  }

  return (
    <NavbarWrapper>
      <RouterLinks>
        <PBase>
          <TextLink
            onClick={() =>
              aboutOnClickHandler(
                GAME_BLOCK_CONTENT_INDEXES.LITTLE_BIT_ABOUT_ME
              )
            }
            to='/'
          >
            About
          </TextLink>
        </PBase>
        <PBase>
          <TextLink
            onClick={() =>
              aboutOnClickHandler(GAME_BLOCK_CONTENT_INDEXES.PROJECTS)
            }
            to='/'
          >
            Projects
          </TextLink>
        </PBase>
        <PBase>
          <TextLink
            onClick={() =>
              aboutOnClickHandler(GAME_BLOCK_CONTENT_INDEXES.CONTACT)
            }
            to='/'
          >
            Contact
          </TextLink>
        </PBase>
      </RouterLinks>
    </NavbarWrapper>
  );
};
