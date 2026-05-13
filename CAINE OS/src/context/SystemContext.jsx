import {
  createContext,
  useState
} from "react";

export const SystemContext =
  createContext();

export function SystemProvider({
  children
}) {

  const [activeTab, setActiveTab] =
    useState("Dashboard");

  const [corrupted, setCorrupted] =
    useState(false);

  const [soundEnabled, setSoundEnabled] =
    useState(true);

  const [effectsEnabled, setEffectsEnabled] =
    useState(true);

  return (
    <SystemContext.Provider
      value={{
        activeTab,
        setActiveTab,

        corrupted,
        setCorrupted,

        soundEnabled,
        setSoundEnabled,

        effectsEnabled,
        setEffectsEnabled
      }}
    >
      {children}
    </SystemContext.Provider>
  );
}