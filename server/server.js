require("dotenv").config();
const express = require("express");
const dbConnect = require("./dbConnect");
const cors = require("cors");
const app = express();
const { default: mongoose } = require("mongoose");
app.set("view engine", "ejs");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const JWT_SECRET = "dsfjsndfsdfdqwe04tig5giggdfgjdfkg"

dbConnect();

app.use(express.json());
app.use(cors());

require("./models/userDetails")

const User = mongoose.model("UserInfo")

app.post("/register", async(req, res) => {
  const { fname, lname, email, password, userType } = req.body

  const encryptedPassword = await bcrypt.hash(password, 10)

  try{
    const oldUser = await User.findOne({ email })

    if(oldUser) {
      return res.send({ error: "User Exist" })
    }
    await User.create({
      fname,
      lname,
      email,
      password: encryptedPassword,
      userType
    })
    res.send({ status: "ok" })
  }
  catch (error) {
    res.send({ status: "error" })
  }
})

app.post("/login-user", async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })
  if (!user) {
    return res.json({ error: "User Not Found" })
  }
  if( await bcrypt.compare(password,user.password)) {
    const token = jwt.sign({email: user.email}, JWT_SECRET)

    if(res.status(201)){
      return res.json({ status: "ok", data: token })
    } else {
      return res.json({ error: "error" })
    }
  }
  res.json({ status: "error", error: "Invalid Password" })
})

app.post("/userData", async (req, res) => {
  const { token } = req.body
  try{
    const user = jwt.verify(token, JWT_SECRET)
    const useremail = user.email
    User.findOne ({ email: useremail }).then((data) => {
      res.send({ status: "ok", data: data })
    })
    .catch((error) => {
      res.send({ status: "error", data: error })
    })
  }
  catch (error) {

  }
})


const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));