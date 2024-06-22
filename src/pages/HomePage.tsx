// HomePage.tsx

import React from 'react';
import { useAgricultureData } from '../hooks/useAgricultureData';
import CropProductionTable from '../components/CropProductionTable';
import CropStatisticsTable from '../components/CropStatisticsTable';

const HomePage: React.FC = () => {
    const data = useAgricultureData();

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Indian Agriculture Analytics</h1>

            <h2>Crop Production Data</h2>
            <CropProductionTable data={data.cropProduction} />

            <h2>Crop Statistics Data</h2>
            <CropStatisticsTable data={data.cropStatistics} />
        </div>
    );
};

export default HomePage;
