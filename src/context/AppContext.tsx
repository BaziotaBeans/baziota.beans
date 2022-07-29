import { createContext } from "react";
import { useAppConfig } from "../hooks/useAppConfig";

const Context = createContext({} as any);

function AppProvider({ children }: any) {
  const {
    handleToggleSidebar,
    toggleSidebar,
    setToggleSidebar,
    isMobile,
    setIsMobile,
    isActiveSidebarMobile,
    setIsActiveSidebarMobile,
    handleCloseSidebar
  } = useAppConfig();

  return (
    <Context.Provider
      value={{
        handleToggleSidebar,
        toggleSidebar,
        setToggleSidebar,
        isMobile,
        setIsMobile,
        isActiveSidebarMobile,
        setIsActiveSidebarMobile,
        handleCloseSidebar
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, AppProvider };
