'use strict';

// Back to order, callback hierarchy
// Use global data and decentralized control flow (bad practices)

const data = {};

// Emulate Asynchronous calls

const wrapAsync = (callback) => setTimeout(
  callback, Math.floor((Math.random() * 1000))
);

// Asynchronous functions

const readFile = () => wrapAsync(() => {
  console.log('(4) Readme file loaded');
  data.readme = 'file content';
  console.dir(data);
  console.log('All done!');
});

const getHttpPage = () => wrapAsync(() => {
  console.log('(3) Page retrieved');
  data.html = '<html>Some archaic web here</html>';
  readFile();
});

const selectFromDb = () => wrapAsync(() => {
  console.log('(2) SQL query executed');
  data.cities = [{ name: 'Kiev' }, { name: 'Roma' }];
  getHttpPage();
});

const readConfig = () => wrapAsync(() => {
  console.log('(1) config loaded');
  data.config = { name: 'name' };
  selectFromDb();
});

// Start execution

readConfig();
