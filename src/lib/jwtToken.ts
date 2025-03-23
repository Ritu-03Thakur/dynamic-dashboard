import jwt from "jsonwebtoken";

const SECRET_KEY = "jwtToken" ; 

const CreateTokenByJwt = (data : string) => {
    const token = jwt.sign(data,SECRET_KEY)
   return token ; 
}

export {CreateTokenByJwt}