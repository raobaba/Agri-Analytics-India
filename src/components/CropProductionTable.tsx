// CropProductionTable.tsx

import React from 'react';
import { Table } from '@mantine/core';

interface Props {
    data: { year: string; maxCrop: string; minCrop: string }[];
}

const CropProductionTable: React.FC<Props> = ({ data }) => {
    const rows = data.map((item, index) => (
        <Table.Tr key={index}>
            <Table.Td>{item.year}</Table.Td>
            <Table.Td>{item.maxCrop}</Table.Td>
            <Table.Td>{item.minCrop}</Table.Td>
        </Table.Tr>
    ));

    return (
        <div className="table-container">
            <Table className="table">
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Year</Table.Th>
                        <Table.Th>Crop with Maximum Production</Table.Th>
                        <Table.Th>Crop with Minimum Production</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </div>
    );
};

export default CropProductionTable;
