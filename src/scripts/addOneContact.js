import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const myData = await readContacts();
    const contacts = myData ? JSON.parse(myData) : [];

    if (!Array.isArray(contacts)) {
      throw new Error('Invalid data format in db.json');
    }
    const newContact = createFakeContact();
    contacts.push(newContact);

    await writeContacts(contacts);
    console.log(`New contact successfully added`);
  } catch (error) {
    console.error(error);
  }
};

addOneContact();
