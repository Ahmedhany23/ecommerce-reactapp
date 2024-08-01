import { createContext, useState, useContext } from 'react';


export const HeaderCustomizationContext = createContext({
    cartIcons: true,
    setCartIcon: () => {},
    user: false,
    setUser: () => {}
});


export const HeaderCustomizationProvider = ({ children }) => {
    const [cartIcons, setCartIcon] = useState(true);
    const [user, setUser] = useState(false);

    return (
        <HeaderCustomizationContext.Provider value={{ cartIcons, setCartIcon, user, setUser }}>
            {children}
        </HeaderCustomizationContext.Provider>
    );
};


export const useHeaderCustomization = () => {
    return useContext(HeaderCustomizationContext);
};
