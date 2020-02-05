const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3001);
app.locals = {
  
}

app.get('/', (request, response) => {
  response.send('Oh hey Pet Box');
});
