//import { User } from './../entity/User';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
const jwtPrivateKey = process.env.JWT_PRIVATE_KEY;

class auth {
  issue(payload:any) {
    return jwt.sign(
      payload,
      jwtPrivateKey /*, { expiresIn: '7d' }*/
    );
  }

  async check(req: Request, res: Response, next) {
    const token = req.header('x-auth-token');
    if (!token) {
      return res
        .status(401)
        .send({
          message:
            'Access denied.No token Provided. ',
        });
    }
    try {
      jwt.verify(
        token,
        jwtPrivateKey,
        function (err, decoded) {
          if (err) {
            return res.status(401).json(err);
          } else {
              //console.log(decoded)
            //let decodedToken = jwt.decode(token);
            req.body.user = decoded;
            next();
          }
        }
      );
    } catch (error) {
      res
        .status(400)
        .send({ message: 'invalid Token.' });
    }
  }
}

export const Auth = new auth();