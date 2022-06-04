const app = require('./app/server');
app.listen(process.env.port, () => {
    console.log(`http://localhost:${process.env.port}`);
});