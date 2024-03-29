import {
  createContext,
  useState,
  FC,
  PropsWithChildren,
  useEffect,
  useMemo,
  Dispatch,
  SetStateAction,
} from 'react';

type ContextModalType = {
  matches: boolean;
  isHamburgerOpen: boolean;
  setHamburgerOpen: Dispatch<SetStateAction<boolean>>;
};

export const GlobalContext = createContext<ContextModalType>({
  matches: false,
  isHamburgerOpen: false,
  setHamburgerOpen: () => {},
});

export const GlobalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [matches, setMatches] = useState<boolean>(
    window.matchMedia('(max-width: 600px)').matches
  );
  const [isHamburgerOpen, setHamburgerOpen] = useState<boolean>(false);
  const value = { matches };
  const cachedValue = useMemo(() => value, [matches]);

  const endValue = { ...cachedValue, isHamburgerOpen, setHamburgerOpen };

  useEffect(() => {
    window
      .matchMedia('(max-width: 600px)')
      .addEventListener('change', (e) => setMatches(e.matches));
  });

  return (
    <GlobalContext.Provider value={endValue}>{children}</GlobalContext.Provider>
  );
};
