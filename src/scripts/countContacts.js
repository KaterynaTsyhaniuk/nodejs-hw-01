import { getAllContacts } from './getAllContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await getAllContacts();
    return contacts.length;
  } catch (error) {
    console.error(error);
    return 0;
  }
};

console.log(await countContacts());
