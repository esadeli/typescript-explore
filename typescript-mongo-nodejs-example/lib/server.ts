import app from './app'

app.listen(process.env.PORT || 3001, () => {
  console.log(`Listening to PORT ${process.env.PORT}`);
});