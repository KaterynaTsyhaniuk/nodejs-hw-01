import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    console.log('All contacts remove!');
  } catch (error) {
    console.error(error);
  }
};

removeAllContacts();
