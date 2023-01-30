import { Variants } from 'framer-motion';

export const ScaledTextsVariant: Variants = {
  enter: {
    scale: 0,
  },
  visible: (index: number) => {
    const ScaledTextsTransDuration = 0.8;
    return {
      scale: 1,
      transition: {
        duration: ScaledTextsTransDuration + index / 5,
        ease: 'easeInOut',
        delay: 0.1,
      },
    };
  },
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      delay: 0.1,
    },
  },
  exit: {
    scale: 1,
  },
};

export const ScaledTitleVariant: Variants = {
  enter: {
    scale: 0,
  },
  visible: () => {
    const ScaledTitleTransDuration = 0.4;

    return {
      scale: 1,
      transition: {
        duration: ScaledTitleTransDuration,
        ease: 'easeInOut',
        delay: 0.1,
      },
    };
  },
  exit: {
    scale: 0,
  },
};

export const ScaledLogoVariant: Variants = {
  enter: {
    scale: 0,
  },
  visible: () => {
    const ScaledLogoTransDuration = 0.6;

    return {
      scale: 1,
      transition: {
        duration: ScaledLogoTransDuration,
        ease: 'easeInOut',
        delay: 0.1,
      },
    };
  },
  exit: {
    scale: 0,
  },
};

export const GameBlockVariant: Variants = {
  enter: {
    opacity: 0,
  },
  visible: (index: number) => {
    const GameBlockTransDuration = 1;
    return {
      opacity: 1,
      transition: {
        duration: GameBlockTransDuration + index / 5,
        ease: 'easeInOut',
        delay: 0.1,
      },
    };
  },
  exit: {
    opacity: 0,
  },
};

export const HPLogoVariant: Variants = {
  enter: {
    opacity: 0,
  },
  visible: () => {
    const HPLogoTransDuration = 1;
    return {
      opacity: 1,
      transition: {
        duration: HPLogoTransDuration,
        ease: 'easeInOut',
        delay: 0.1,
      },
    };
  },
  exit: {
    opacity: 0,
  },
};

export const ProjectsVariant: Variants = {
  enter: {
    opacity: 0,
  },
  visible: () => {
    const ProjectsDuration = 0.6;
    return {
      opacity: 1,
      transition: {
        duration: ProjectsDuration,
        ease: 'easeInOut',
        delay: 0.1,
      },
    };
  },
  exit: {
    opacity: 0,
  },
};

export const LinksVariant: Variants = {
  enter: {
    scale: 1,
  },
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      delay: 0.1,
    },
  },

  exit: {
    scale: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut',
      delay: 0.1,
    },
  },
};
