// dataProcessing.ts

interface CropData {
    year: string;
    maxCrop: string;
    minCrop: string;
}

interface CropStatistics {
    crop: string;
    avgYield: number;
    avgArea: number;
}

export const processData = (data: any[]): { cropProduction: CropData[], cropStatistics: CropStatistics[] } => {
    let cropProduction: CropData[] = [];
    let cropStatistics: CropStatistics[] = [];

    // Group data by year
    const dataByYear: { [year: string]: any[] } = {};
    data.forEach(item => {
        const year = item.Year;
        if (!dataByYear[year]) {
            dataByYear[year] = [];
        }
        dataByYear[year].push(item);
    });

    // Calculate max and min crop production for each year
    Object.keys(dataByYear).forEach(year => {
        const cropsOfYear = dataByYear[year];
        let maxProduction = -Infinity;
        let minProduction = Infinity;
        let maxCrop = '';
        let minCrop = '';

        cropsOfYear.forEach(crop => {
            const production = parseFloat(crop['Crop Production (UOM:t(Tonnes))']) || 0;
            if (production > maxProduction) {
                maxProduction = production;
                maxCrop = crop['Crop Name'];
            }
            if (production < minProduction) {
                minProduction = production;
                minCrop = crop['Crop Name'];
            }
        });

        cropProduction.push({
            year,
            maxCrop,
            minCrop
        });
    });

    // Calculate average yield and average area for each crop
    const cropsData: { [crop: string]: { yieldSum: number, areaSum: number, count: number } } = {};

    data.forEach(item => {
        const crop = item['Crop Name'];
        const yieldValue = parseFloat(item['Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))']) || 0;
        const areaValue = parseFloat(item['Area Under Cultivation (UOM:Ha(Hectares))']) || 0;

        if (!cropsData[crop]) {
            cropsData[crop] = {
                yieldSum: 0,
                areaSum: 0,
                count: 0
            };
        }

        cropsData[crop].yieldSum += yieldValue;
        cropsData[crop].areaSum += areaValue;
        cropsData[crop].count++;
    });

    Object.keys(cropsData).forEach(crop => {
        const { yieldSum, areaSum, count } = cropsData[crop];
        const avgYield = yieldSum / count;
        const avgArea = areaSum / count;
        cropStatistics.push({
            crop,
            avgYield,
            avgArea
        });
    });

    return { cropProduction, cropStatistics };
};
