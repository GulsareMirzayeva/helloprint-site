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
import { colorPresets } from '../lib/stylePresets';
import { stylePresetType } from '../lib/types/stylePresetType';

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const [stylePreset, setStylePreset] = useState<stylePresetType>(colorPresets);
  const [prices, setPrices] = useState<Prices | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeTerm, setActiveTerm] = useState<FooterTermsOfSaleLinks>('none');

  // Haal gegevens op
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
