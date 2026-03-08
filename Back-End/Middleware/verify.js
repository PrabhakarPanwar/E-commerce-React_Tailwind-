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
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (decoded) {
      return res.json({
        success: true,
        msg: "You are Authorised",
      });
    }
  } catch (err) {
    console.error(err);
    return res.json({
      success: false,
      msg: "You are Not Authorised",
    });
  }
}

export default verifyToken;
