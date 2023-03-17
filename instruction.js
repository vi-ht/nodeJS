const express = require("express"); //cú pháp nạp thư viện
var morgan = require("morgan"); // quan sát được request gửi đến server qua http methods
const app = express(); //call function => trả về 1 đối tượng app đại điện cho web site
const port = 3000; //port mà web-site run

app.use(morgan("combined"));
// định nghĩa route ("/" là path để truy cập)
app.get("/home", (req, res) => {
  res.send("Hello World!");
});
// lắng nghe port đã khai báo
// localhost : 127.0.0.1
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//nodemone - lắng nghe sự thay đổi của app mà không cần reload lại app
