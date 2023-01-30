import {
  createContext,
  useState,
  FC,
  PropsWithChildren,
  useEffect,
  useMemo,
} from 'react';

type ContextModalType = {
  matches: boolean;
};

export const GlobalContext = createContext<ContextModalType>({
  matches: false,
});

export const GlobalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [matches, setMatches] = useState<boolean>(
    window.matchMedia('(max-width: 600px)').matches
  );
  const value = { matches };
  const cachedValue = useMemo(() => value, [matches]);

  useEffect(() => {
    console.log(matches);
    window
      .matchMedia('(max-width: 600px)')
      .addEventListener('change', (e) => setMatches(e.matches));
  });

  return (
    <GlobalContext.Provider value={cachedValue}>
      {children}
    </GlobalContext.Provider>
  );
};
