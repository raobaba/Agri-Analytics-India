// CropStatisticsTable.tsx

import React from 'react';
import { Table } from '@mantine/core';

interface Props {
    data: { crop: string; avgYield: number; avgArea: number }[];
}

// CropStatisticsTable component to display crop statistics in a table format
const CropStatisticsTable: React.FC<Props> = ({ data }) => {
    // Map through the data to create table rows
    const rows = data.map((item, index) => (
        // Each row has a unique key using the index
        <Table.Tr key={index}>
            <Table.Td>{item.crop}</Table.Td>
            {/* Format the average yield to 3 decimal places */}
            <Table.Td>{item.avgYield.toFixed(3)}</Table.Td>
            {/* Format the average area to 3 decimal places */}
            <Table.Td>{item.avgArea.toFixed(3)}</Table.Td>
        </Table.Tr>
    ));

    return (
        <div className="table-container">
            <Table className="table">
                {/* Table header */}
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Crop</Table.Th>
                        <Table.Th>Average Yield (1950-2020)</Table.Th>
                        <Table.Th>Average Cultivation Area (1950-2020)</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                {/* Table body containing the rows */}
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </div>
    );
};

export default CropStatisticsTable;
