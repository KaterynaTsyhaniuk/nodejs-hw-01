import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts);
    await fs.writeFile(PATH_DB, data, 'utf8');
    console.log('The data was successfully written to the file.');
  } catch (error) {
    console.error('Error writing to file:', error);
  }
};

writeContacts();
