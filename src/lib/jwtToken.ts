import jwt from "jsonwebtoken";

const SECRET_KEY = "jwtToken";

const CreateTokenByJwt = () => {
  const payload = {
    id: "12345",
    email: "testuser@example.com",
    role: "admin",
    exp: Math.floor(Date.now() / 1000) + 60 * 60,
  };

  const token = jwt.sign(payload , SECRET_KEY) ;
  return  token;
};
export { CreateTokenByJwt };
