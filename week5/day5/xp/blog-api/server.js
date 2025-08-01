const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let posts = [
  { id: 1, title: 'First Post', content: 'Welcome to my blog!' },
  { id: 2, title: 'Second Post', content: 'Another post!' }
];


app.get('/posts', (req, res) => {
  res.json(posts);
});


app.get('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) 
     return res.status(404).json({ message: 'Post not found' });
  res.json(post);
});


app.post('/posts', (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});


app.put('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) 
    return res.status(404).json({ message: 'Post not found' });
  post.title = req.body.title;
  post.content = req.body.content;
  res.json(post);
});


app.delete('/posts/:id', (req, res) => {
  const index = posts.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1)
     return res.status(404).json({ message: 'Post not found' });
  const deleted = posts.splice(index, 1);
  res.json(deleted[0]);
});


app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Blog API running on http://localhost:${PORT}`);
});
