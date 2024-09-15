import { useState, useEffect } from 'react';

import { FetchResult } from '../types';

const useFetch = <T>(fetchFn: () => Promise<T>): FetchResult<T> => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<{ message: string } | null | null>(null);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const fetchedData = await fetchFn();

        setData(fetchedData);
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Failed to fetch data.';

        setError({ message });
      } finally {
        setLoading(false);
      }
    })();
  }, [fetchFn]);

  return { data, error, loading };
};

export default useFetch;
