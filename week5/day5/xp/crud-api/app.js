const express3 = require('express');
const { fetchPosts } = require('./data/dataService');

const app3 = express3();
const PORT3 = 5000;

app3.get('/api/posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log('Data fetched and sent');
    res.json(posts);
  } catch (err) {
    console.error('Error fetching posts:', err);
    res.status(500).json({ message: 'Error fetching posts' });
  }
});

app3.listen(PORT3, () => {
  console.log(`CRUD API running on http://localhost:${PORT3}`);
});
