const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8001;

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

const VALID_CREDENTIALS = {
  username: 'admin',
  password: 'admin',
};

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: 'Username and password are required',
    });
  }
  if (
    username === VALID_CREDENTIALS.username &&
    password === VALID_CREDENTIALS.password
  ) {
    return res.status(200).json({
      success: true,
      message: 'Login successful',
      user: { username },
    });
  }
  return res.status(401).json({
    success: false,
    message: 'Invalid username or password',
  });
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
