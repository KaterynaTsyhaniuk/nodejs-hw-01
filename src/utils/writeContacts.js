import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, data, 'utf8');
    console.log('The data was successfully written to the file.');
  } catch (error) {
    console.error('Error writing to file:', error);
  }
};
