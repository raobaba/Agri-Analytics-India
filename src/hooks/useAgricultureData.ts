// useAgricultureData.ts

import { useState, useEffect } from 'react';
import agricultureData from '../data/agricultureData.json';
import { processData } from '../utils/dataProcessing';

interface AgricultureData {
  year: string;
  maxCrop: string;
  minCrop: string;
}

interface AgricultureStatistics {
  crop: string;
  avgYield: number;
  avgArea: number;
}

interface AgricultureProcessedData {
  cropProduction: AgricultureData[];
  cropStatistics: AgricultureStatistics[];
}

export const useAgricultureData = () => {
  const [processedData, setProcessedData] = useState<AgricultureProcessedData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate asynchronous data fetching
        // In a real application, you might fetch data from an API or server.
        // For this example, we're using static JSON data.
        const processed = processData(agricultureData);
        setProcessedData(processed);
      } catch (error) {
        console.error('Error fetching agriculture data:', error);
        // Handle error state or logging as needed
      }
    };

    fetchData();
  }, []);

  return processedData;
};
