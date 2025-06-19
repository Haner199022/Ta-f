const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const suppliers = [
  { id: 1, name: 'Supplier A', contact: 'contact@a.com' },
  { id: 2, name: 'Supplier B', contact: 'contact@b.com' }
];

const projects = [
  { id: 1, name: 'Project Alpha', status: 'ongoing' },
  { id: 2, name: 'Project Beta', status: 'completed' }
];

app.get('/api/suppliers', (req, res) => {
  res.json(suppliers);
});

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
