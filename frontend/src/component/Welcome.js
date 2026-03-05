const Welcome = () => {
  const username = localStorage.getItem('username');
  return (
    <h1 style={{ textAlign: 'center' }}>
      Hello, {username}! Welcome to OMNITAAS
    </h1>
  );
};

export default Welcome;
