import React, {useState, useContext, createContext} from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const [theme, setTheme] = useState('dark');
    return (
        <GlobalContext.Provider
            value={{
                theme: theme, 
                setTheme: setTheme,
            }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const ThemeEvent = () => {
    const {theme, setTheme} = useContext(GlobalContext);
    return {theme, setTheme};
}

export default GlobalProvider;