const express = require('express');
const app = express();

// Middleware để server hiểu JSON
app.use(express.json());

// GET request: client lấy dữ liệu
app.get('/user', (req, res) => {
    // Giả sử server có 1 danh sách user
    const users = [
        { id: 1, name: "Latus" },
        { id: 2, name: "Anna" }
    ];
    res.json({
      message: "Danh sach",
      users: users
    }); // gửi JSON về client
    
});

// POST request: client gửi dữ liệu lên server
app.post('/user', (req, res) => {
    const newUser = req.body; // lấy dữ liệu JSON từ client
    console.log("Client gửi dữ liệu:", newUser);

    // Giả sử server lưu user (ở đây chỉ giả lập)
    res.json({
        message: "Đã tạo user mới",
        user: newUser
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});