import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

let cryptedPass, token;

export const register = (req, res) => {
  const { name, email, pwd } = req.body;
  bcrypt.hash(pwd, 10, (error, hash) => {
    cryptedPass = hash;
  });
  res.json({
    success: true,
    msg: "User Id created",
  });
};
export const login = async (req, res) => {
  const { email, pwd } = req.body;
  // console.log(cryptedPass);
  if (cryptedPass) {
    let comparing = await bcrypt.compare(pwd, cryptedPass);
    // console.log(comparing);
    if (comparing) {
      token = jwt.sign({ email }, "Prabhakar");

      res.json({
        token,
        success: true,
        msg: "Successfully Login",
      });
    }
    if (!comparing) {
      res.json({
        success: false,
      });
    }
  }
  if (!cryptedPass) {
    res.json({
      success: false,
      msg: "User Not Registered",
    });
  }
};
export const dashboard = (req, res) => {
  const { Name, Description, Category, SubCategory, Price, Size } = req.body;
  console.log(req.body);
  console.log(req.files);
};
