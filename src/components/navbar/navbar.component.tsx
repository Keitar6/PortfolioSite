import { useContext } from 'react';
import { ModalsContext } from '../../contexts/modals.context';
import { H3, TextLink } from '../../global.styles';
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
        <H3>
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
        </H3>
        <H3>
          <TextLink
            onClick={() =>
              aboutOnClickHandler(GAME_BLOCK_CONTENT_INDEXES.PROJECTS)
            }
            to='/'
          >
            Projects
          </TextLink>
        </H3>
        <H3>
          <TextLink
            onClick={() =>
              aboutOnClickHandler(GAME_BLOCK_CONTENT_INDEXES.CONTACT)
            }
            to='/'
          >
            Contact
          </TextLink>
        </H3>
      </RouterLinks>
    </NavbarWrapper>
  );
};
