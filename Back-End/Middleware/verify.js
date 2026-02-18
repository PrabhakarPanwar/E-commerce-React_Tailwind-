import jwt from "jsonwebtoken";

function verifyToken(req, res, next) {
  let token = req.headers.token;
  console.log("Verify", token);
  console.log("header", req.headers);
  if (!token) {
    res.json({
      msg: "You are not authorised",
      success: false,
    });
  }

  if (token) {
    console.log(token);
    let decode = jwt.verify(token, "Prabhakar");
    console.log(decode);
    next();
  }
}

export default verifyToken;
