const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4001;

// Cấu hình thư mục tĩnh 'dist'
app.use(express.static(path.join(__dirname, 'dist')));

// Định nghĩa route cơ bản
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Khởi động server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});