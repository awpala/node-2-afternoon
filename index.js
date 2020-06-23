const express = require('express');
const messagesController = require('./server/controllers/messages_controller');

const app = express();

app.use(express.json());

// Endpoints
const messagesBaseUrl = "/api/messages";
app.post(messagesBaseUrl, messagesController.create);
app.get(messagesBaseUrl, messagesController.read);
app.put(`${messagesBaseUrl}/:id`, messagesController.update);
app.delete(`${messagesBaseUrl}/:id`, messagesController.delete);

const port = 3001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});