const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('public')); // publicディレクトリを静的ファイルのルートとして設定

app.get('/', (req, res) => {
  res.send('Hello World!'); // ルートURLにアクセスしたときに表示されるテキスト
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
