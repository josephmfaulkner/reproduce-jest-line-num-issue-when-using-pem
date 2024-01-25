const pem = require('pem');

async function testExportedFunction()
{
    return "Hello from Exported Function!";
}


module.exports = { testExportedFunction };

