const express = require('express');
const app = express();

// ルーティング
app.use('/reference', require('.routes/reference'));
app.use('/update', require('./routes/update'));


// サーバー起動
app.listen(3000);