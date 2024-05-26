import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    console.log('Вміст файлу:', contacts);
    const newContacts = [];
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }
    const updateContacts = [...contacts, ...newContacts];
    await fs.writeFile(PATH_DB, JSON.stringify(updateContacts, null, 2));
    console.log(`Successfully added ${number} contacts`);
  } catch (error) {
    console.error(`Something went wrong:`, error);
  }
};

await generateContacts(5);
