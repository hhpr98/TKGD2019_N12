const app = require('./app');

const PORT = process.env.PORT || 4321;
app.listen(PORT, () => {
  console.log(`App is listening at PORT ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
