import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const thanos = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    const removeContacts = (contacts) =>
      contacts.filter(() => Math.random() >= 0.5);
    const updateContacts = removeContacts(contacts);
    await fs.writeFile(PATH_DB, JSON.stringify(updateContacts, null, 2));
    console.log('Contacts were filtered successfully with 50% probability');
  } catch (error) {
    console.error(`Something went wrong:`, error);
  }
};

await thanos();
