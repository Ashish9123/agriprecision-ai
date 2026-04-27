const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Serve static files from the Vite build
app.use(express.static(path.join(__dirname, '../dist')));

// Mock database
const users = [
  { id: 1, email: 'admin@agriprecision.ai', password: 'password123', name: 'Aashish', role: 'Chief Agronomist' }
];

// Auth routes
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    const { password, ...userWithoutPassword } = user;
    res.json({ success: true, user: userWithoutPassword });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Image Analysis route
const upload = multer({ dest: 'server/uploads/' });
app.post('/api/analyze', upload.single('image'), (req, res) => {
  const mockResults = [
    { type: 'Loamy Soil', confidence: '94.2%', organicMatter: '6.5%', texture: 'Medium-grained' },
    { type: 'Sandy Soil', confidence: '89.7%', organicMatter: '2.1%', texture: 'Coarse' },
    { type: 'Clay Soil', confidence: '91.5%', organicMatter: '4.8%', texture: 'Fine-grained' }
  ];
  
  const result = mockResults[Math.floor(Math.random() * mockResults.length)];
  
  setTimeout(() => {
    res.json({ success: true, ...result });
  }, 2000);
});

// Handle SPA routing - send index.html for any unknown routes
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
