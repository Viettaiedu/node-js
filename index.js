// require này sẽ chạy tới thư mục `node_modules` 
    // => để tìm frameworks exoress.
const express = require('express')
const app = express()
// port này là cổng httls địa chỉ để hiện trình duyệt.
const port = 3000
// Method get dùng để get path `/` 
app.get('/tin-tuc', (req, res) => {
  var a = 1;
  var b = 2;
  var c = a + b;
  res.send('Hello World!')
})
// listen => gửi lắng nghe và gửi yêu cầu và hiện 
// giao diện web
app.listen(port, () => {
  console.log(`Example app listening on port localhost:${port}`)
})