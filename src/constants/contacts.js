import fs from 'node:fs/promises';

export const PATH_DB = await fs.readFile('./src/db/db.json');

console.log(PATH_DB.toString());
