import React, {useState, useContext, createContext} from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const [theme, setTheme] = useState('dark');
    const [goMain, setGoMain] = useState(false);
    return (
        <GlobalContext.Provider
            value={{
                theme: theme, 
                setTheme: setTheme,
                goMain: goMain,
                setGoMain: setGoMain
            }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const ThemeEvent = () => {
    const {theme, setTheme} = useContext(GlobalContext);
    return {theme, setTheme};
}

export const MainEvent = () => {
    const {goMain, setGoMain} = useContext(GlobalContext);
    return {goMain, setGoMain};
}

export default GlobalProvider;