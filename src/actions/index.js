export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

export const createBook = (book) => ({
  id: Math.floor(Math.random() * 100),
  title: '',
  category: '',
  type: CREATE_BOOK,
  book,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  book,
});
