const { verifyToken } = require("../helpers/jwt");
module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(403).json({ message: "Você não possui autorização" });
  const [, token] = authHeader.split(" ");

  try {
    const decoded = verifyToken(token);

    const { sub } = decoded;

    req.user = {
      id: sub,
    };
    return next();
  } catch (error) {
    res.status(403).json({ message: "Token inválido" });
    console.log(error);
  }
};
