import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { getPrices } from '../api/getPrices';
import { DataContextType, Prices } from '../lib/types/dataContextTypes';
import { FooterTermsOfSaleLinks } from '../lib/types/footerTermsofSaleLinkTypes';
import { StylePresetType } from '../lib/types/stylePresetType';
import { darkTheme, lightTheme } from '../lib/stylePresets';

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const getStoredTheme = () => localStorage.getItem('theme');
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  // Use the local storage value for theme selection if it excists, otherwise use system preference
  const initialDarkMode =
    getStoredTheme() === 'dark' || (!getStoredTheme() && prefersDarkMode);
  const [darkMode, setDarkMode] = useState(initialDarkMode);
  const [stylePreset, setStylePreset] = useState<StylePresetType>(
    darkMode ? darkTheme : lightTheme
  );

  const [prices, setPrices] = useState<Prices | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeTerm, setActiveTerm] = useState<FooterTermsOfSaleLinks>('none');

  // Theme update: set class in <html> and update local storage
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    setStylePreset(darkMode ? darkTheme : lightTheme);
  }, [darkMode]);

  // Use system preference when user has not changes theme in the navigation
  useEffect(() => {
    if (getStoredTheme()) return; // Only if local storage is empty, else do nothing

    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (evt: MediaQueryListEvent) => setDarkMode(evt.matches);

    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  // Get prices
  useEffect(() => {
    const fetchData = async () => {
      try {
        await getPrices(setPrices, setError, setIsLoading);
      } catch (error) {
        setError(error as Error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        darkMode,
        stylePreset,
        prices,
        error,
        isLoading,
        activeTerm,
        setStylePreset,
        setPrices,
        setError,
        setIsLoading,
        setActiveTerm,
        setDarkMode,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
