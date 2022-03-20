import { BulgarianStockExchange, CompanyData } from '../src/utils/puppeteer';

jest.setTimeout(20000);

describe('BulgarianStockExchange methods test', () => {
    test('+ getListedInstruments | return array', async () => {
        const result = await new BulgarianStockExchange().getListedInstruments('#ListedInstrumentsUnited_TableSession_0');
        
        expect(!('error' in result) && result.length > 0).toBe(true);
        expect(!('error' in result) && 'code' in result[0]).toBe(true);
    });

    test('- getListedInstruments | return FailedResponse', async () => {
        const result = await new BulgarianStockExchange().getListedInstruments('wrongElement');
        
        expect('error' in result).toBe(true);
    })
    
    test('+ getListedSegments | return array', async () => {
        const result = await new BulgarianStockExchange().getListedSegments();
        
        expect(!('error' in result) && result[0].length > 1).toBe(true);
    })

    test('+ getInstrumentData | return IBSEAsset', async () => {
        const result =  await new BulgarianStockExchange().getInstrumentData('EUBG');

        expect('asset' in result).toBe(true);
        expect('marketData' in result).toBe(true);
        expect('marketSession' in result).toBe(true);
    })

    test('+ getCompaniesData | return data', async () => {
        const result = await new CompanyData().getCompanies();
        console.log(result);
        
        expect(result).toBeDefined();
    })
})