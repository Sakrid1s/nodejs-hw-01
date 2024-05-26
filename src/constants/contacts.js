import path from 'node:path';

const pathToData = path.join(process.cwd());

export const PATH_DB = path.join(pathToData, 'src', 'db', 'db.json');
