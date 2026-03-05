import { useState } from 'react';
import axios from 'axios';
import './page.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8001/login', {
        username,
        password,
      });
      if (response.status === 200) {
        localStorage.setItem('username', username);
        window.location.href = '/welcome';
      }
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="container">
      <h2>Login to OMNITAAS</h2>
      <form onSubmit={handleLogin} className="form">
        <div>
          <label>Username *:</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Password *:</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};
export default Login;
