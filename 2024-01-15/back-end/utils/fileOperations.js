const fs = require("fs");

async function writeFile(obj)
{
	await fs.writeFile('./data.json', JSON.stringify(obj), (err) => {
		if(err) 
		{
            console.error(err);
        }
	})
}

module.exports = {writeFile}