import { promisified as pem } from "pem";

export async function testExportedFunction() : Promise<string>
{
    return "Hello from Exported Function!";

}

/*
export async function testExportedFunctionWithPem (buffer: Buffer, stringData: string) : Promise<boolean>
{
    try 
    {
        return await pem.checkPkcs12(buffer, stringData);
    }
    catch ( error : Error | any)
    {
        console.error(error);
        return false; 
    }
}
*/
