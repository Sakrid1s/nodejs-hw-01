import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    const deleteContacts = [];
    await fs.writeFile(PATH_DB, JSON.stringify(deleteContacts));
    console.log(`All contacts were deleted successfully`);
  } catch (error) {
    console.error(`Something went wrong:`, error);
  }
};

await removeAllContacts();
