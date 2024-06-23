import { ThemeContext } from '@emotion/react';
import { createContext } from 'react'
import { useState } from 'react';
type contextType = {
    mode: 'light' | 'dark';
    setMode: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}
export const MyContext = createContext<contextType>({mode: 'light', setMode: () => {}});

const ColorMode = ({children}: any) => {
    const [mode, setMode] = useState<'light' | 'dark'>('light');
  return (
    <MyContext.Provider value={{mode, setMode}}>
    {children}
    </MyContext.Provider>
  )
}

export default ColorMode