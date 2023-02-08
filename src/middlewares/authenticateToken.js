const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const token = req.headers.authorization;
  // console.log(authHeader);
  

  if (token == null) return res.Status(401).json('Unauthorized');

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) res.json('lol');
    console.log(req.user);
    console.log(user);
    req.user = user;
    next();
  });
}

module.exports = {
  authenticateToken,
};
