import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const UserForm = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    company: { name: '' }
  });
  const [error, setError] = useState(null);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (id) {
      // Fetch existing user for editing
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => setUser(response.data))
        .catch(error => setError('Failed to load user for editing.'));
    }
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const method = id ? 'put' : 'post';
    const url = id 
      ? `https://jsonplaceholder.typicode.com/users/${id}` 
      : 'https://jsonplaceholder.typicode.com/users';

    axios[method](url, user)
      .then(() => {
        history.push('/');
      })
      .catch(error => setError('Failed to save user.'));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser(prevState => ({
      ...prevState,
      [name]: name === 'name' || name === 'email' ? value : { name: value }
    }));
  };

  return (
    <div>
      <h1>{id ? 'Edit User' : 'Add User'}</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="department"
          value={user.company.name}
          onChange={handleChange}
          placeholder="Department"
          required
        />
        <button type="submit">{id ? 'Save Changes' : 'Add User'}</button>
      </form>
    </div>
  );
};

export default UserForm;
