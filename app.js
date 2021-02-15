const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'helo frm server', app: 'Natours' });
});

const port = 3000;
app.listen(port, () => {
  console.log(`app running on port ${port}....`);
});
