const jwt = require("jsonwebtoken");
let user = {
  email: "venka@gmail.com",
  password: "123dhjsk",
};
let payload = {
  id: user.email,
};
let secretKey = "fdykkas";
let token = jwt.sign(payload, secretKey, { expiresIn: 60 * 60 });
console.log(token);

//how to verify token
jwt.verify(token, secretKey, (err, newpayload) => {
  if (err) throw err;
  console.log(newpayload);
});
