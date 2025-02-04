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
  const [prices, setPrices] = useState<Prices | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeTerm, setActiveTerm] = useState<FooterTermsOfSaleLinks>('none');

  // Manage color themes
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );
  const [stylePreset, setStylePreset] = useState<StylePresetType>(
    darkMode ? darkTheme : lightTheme
  );

  // Set theme class in HTML file
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Swap style presets when the toggle switch has changed position
  useEffect(() => {
    setStylePreset((prev) => (prev === lightTheme ? darkTheme : lightTheme));
  }, [darkMode]);

  // Get all prices at once
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
