const path = require("path");
const express = require('express');
const dotenv = require("dotenv");
const app = express();
const cors = require('cors');
dotenv.config({ path: "./config/config.env" });
const create_Account = require('./routes/create_account');
const shopping_Cart = require('./routes/shopping_cart');
const shopping_Archive = require('./routes/shopping_archive');

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json({ limit: '1mb' }));


const root = require('path').join(__dirname, 'client', 'build')
app.use(express.static(root));
app.get('*', (req, res) =>
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
) 

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('app listening on port 5000!')
});

app.use('/Create_Account', create_Account);
app.use('/Shopping_Cart', shopping_Cart);
app.use('/Shopping_Archive', shopping_Archive);

