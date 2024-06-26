import {createContext, useContext, useState, useEffect} from "react";
const LightingModeContext = createContext(undefined);

export const LightingModeProvider = ({ children }) => {

  const [mode, setMode] = useState('dark');
  return (
    <LightingModeContext.Provider
      value={
        { 
          onToggle: () => {
            setMode(mode === 'dark' ? 'light' : 'dark');
          },
          mode: mode
        }
      }
    >
      {children}
    </LightingModeContext.Provider>
  );
};

export const useLightingModeContext = () => useContext(LightingModeContext);