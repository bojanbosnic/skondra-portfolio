import { useState, createContext } from "react";

export const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState(false);

  const value = {
    menu,
    setMenu,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

export default MenuProvider;
