// CropStatisticsTable.tsx

import React from 'react';
import { Table } from '@mantine/core';

interface Props {
    data: { crop: string; avgYield: number; avgArea: number }[];
}

const CropStatisticsTable: React.FC<Props> = ({ data }) => {
    const rows = data.map((item, index) => (
        <Table.Tr key={index}>
            <Table.Td>{item.crop}</Table.Td>
            <Table.Td>{item.avgYield.toFixed(3)}</Table.Td>
            <Table.Td>{item.avgArea.toFixed(3)}</Table.Td>
        </Table.Tr>
    ));

    return (
        <div className="table-container">
            <Table className="table">
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Crop</Table.Th>
                        <Table.Th>Average Yield (1950-2020)</Table.Th>
                        <Table.Th>Average Cultivation Area (1950-2020)</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </div>
    );
};

export default CropStatisticsTable;
