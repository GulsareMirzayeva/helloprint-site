import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { getPrices } from '../api/getPrices';
import { shopInfo } from '../lib/contactInfo';
import { DataContextType, Prices } from '../lib/types/dataContextTypes';

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const [prices, setPrices] = useState<Prices | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Haal gegevens op
  useEffect(() => {
    const fetchData = async () => {
      try {
        await getPrices(setPrices, setError, setIsLoading);
      } catch (error) {
        setError(error as Error);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        shopInfo,
        prices,
        error,
        isLoading,
        setPrices,
        setError,
        setIsLoading,
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
