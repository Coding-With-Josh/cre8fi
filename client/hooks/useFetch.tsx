'use client'

import { useState, useEffect } from 'react';
import { fetchData, postData } from '@/app/api/django';

interface DataType {
  // Define your data structure here
  id: number;
  name: string;
  // ... other fields
}

export default function DataFetcher() {
  const [data, setData] = useState<DataType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData<DataType>();
        setData(result);
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const result = await postData<DataType>(data);
      console.log('Posted data:', result);
    } catch (err) {
      console.error('Error:', err);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Data from Django API:</h1>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}

      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Name" required />
        <input name="email" type="email" placeholder="Email" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}