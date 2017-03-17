const express = require('express');

const app = express();

app.set('port', (process.env.PORT || 3001));


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/api/foo', (req, res) => {
  res.send({ data: [{ key: 1, str: 'foo'}, { key:2, str:'bar' }, { key:3, str: 'baz'}]});
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
