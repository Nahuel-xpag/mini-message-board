const { Router } = require('express')
const brolyRouter = Router();

brolyRouter.get("/", (req, res) => {
    res.send('KAKAROT');
});

module.exports = brolyRouter;
