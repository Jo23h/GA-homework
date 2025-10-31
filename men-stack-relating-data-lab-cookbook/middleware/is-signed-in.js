const jwt = require('jsonwebtoken')

const isSignedIn = (req, res, next) => {
  // YOU DO: complete the codes
 
  try {
    const token = req.headers.authorization.split(' ')[1]
   const decoded = jwt.verify(token, process.env.ACCESS_SECRET);

    req.decoded = decoded

    // Call next() to invoke the next middleware function
   next()
  } catch (error) {

    // If any errors, send back a 401 status and an 'Invalid token.' error message
    return res.status(401).json({ error: "not authorised" })
  }
};

module.exports = isSignedIn;