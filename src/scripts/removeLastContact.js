import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const data = await readContacts();
    const contacts = data ? JSON.parse(data) : [];

    if (contacts.length === 0) {
      return;
    }

    contacts.pop();

    await writeContacts(contacts);
    console.log('We remove last contact!');
  } catch (error) {
    console.error(error);
  }
};

removeLastContact();
