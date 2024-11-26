// api/getPrices.ts
import { Prices } from '../lib/types/dataContextTypes';

export async function getPrices(
  setPrices: React.Dispatch<React.SetStateAction<Prices | null>>,
  setError: React.Dispatch<React.SetStateAction<Error | null>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  // Set loading status before getting data
  setIsLoading(true);

  try {
    const response = await fetch('http://localhost:3000/prices');
    if (!response.ok) {
      throw new Error(`HTTP status ${response.status}`);
    }

    const data: Prices = await response.json();

    if (!data) {
      throw new Error('One or more price fields are missing');
    }

    setPrices(data);

    setError(null);
  } catch (error) {
    setError(error as Error);
    setPrices(null);
  } finally {
    setIsLoading(false);
  }
}
