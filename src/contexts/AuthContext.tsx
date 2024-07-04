import { ThemeContext } from '@emotion/react';
import { createContext } from 'react';
import { useState } from 'react';
type contextType = {
  isProfile: boolean;
  setIsProfile: React.Dispatch<React.SetStateAction<boolean>>;
};
export const AuthContext = createContext<contextType>({
  isProfile: false,
  setIsProfile: () => {},
});

const MyAuthContext = ({ children }: any) => {
  const [isProfile, setIsProfile] = useState<boolean>(false);
  return (
    <AuthContext.Provider value={{isProfile, setIsProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export default MyAuthContext;
