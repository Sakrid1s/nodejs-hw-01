import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    const addContact = createFakeContact();
    contacts.push(addContact);
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log(`New contact was added`);
  } catch (error) {
    console.error(`Something went wrong:`, error);
  }
};

await addOneContact();
