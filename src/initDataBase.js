import initDB from './initDB';

initDB((error) => {
  if (error) {
    console.log(error);
    throw error;
  }
  console.log('init db success!');
});
