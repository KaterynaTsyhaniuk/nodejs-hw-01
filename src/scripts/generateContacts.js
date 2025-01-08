import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const myData = await readContacts();
    const contacts = myData ? JSON.parse(myData) : [];

    if (!Array.isArray(contacts)) {
      throw new Error('Invalid data format in db.json');
    }
    const newContacts = Array.from({ length: number }, createFakeContact);

    contacts.push(...newContacts);

    await writeContacts(contacts);
    console.log(`${number} successfully added`);
  } catch (error) {
    console.error(error);
  }
};

generateContacts(5);
