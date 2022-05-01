import app from './app';

const port = process.env.APP_PORT || 3000;

app.listen(port, () => console.log(`App is listening on port ${port}`));