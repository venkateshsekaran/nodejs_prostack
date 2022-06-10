const bcrypt = require("bcryptjs");
let userDetails = {
  name: "venkat",
  email: "venkate@23gmail.com",
  password: "hello12",
};
newPassword = bcrypt.hashSync(userDetails.password, 10);
console.log(newPassword);
userDetails = { ...userDetails, password: newPassword };
if (bcrypt.compareSync("hello12", userDetails.password)) {
  console.log("Password matched");
} else {
  console.log("Password not matched");
}
console.log(userDetails);
