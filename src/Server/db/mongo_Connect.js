const mongoose = require('mongoose');

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://ilanLevi:372819@cluster0.nl8tp.mongodb.net/springs');
  console.log('springs connected')
}
module.exports = main;