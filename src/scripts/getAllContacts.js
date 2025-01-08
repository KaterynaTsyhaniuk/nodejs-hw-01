import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const myData = await readContacts();
    const contacts = myData ? JSON.parse(myData) : [];

    if (!Array.isArray(contacts)) {
      throw new Error('Invalid data format in db.json');
    }
    return contacts;
  } catch (error) {
    console.error(error);
    return [];
  }
};

console.log(await getAllContacts());
