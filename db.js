const messages = [
    {
        id: 1,
        text: "Hi there!",
        user: "Amando",
        added: new Date().toString().slice(0,21)
    },
    {
        id: 2,
        text: "Hello World!",
        user: "Charles",
        added: new Date().toString().slice(0,21)
    }
];
async function addMessage(text, user, added){
    messages.push({id: messages.length + 1, text: text, user: user, added: added})
};
async function getMessageById(messageId){
    return messages.find(message => messageId === message.id);
};
async function getMessages(){return messages};
module.exports = {getMessageById, addMessage, getMessages}