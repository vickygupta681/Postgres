// import { Auth } from './../middlewares/auth';
 //import { UserController } from '../controller/UserController';
 import express from 'express';
// import validate from '../validators/validator';

 //const user = new UserController();
var router = express.Router();

/**
 * @swagger
 * /api/users/:
 *   post:
 *     tags:
 *       - Admin
 *     name: Add a user
 *     summary: Add a user
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             email:
 *               type: string
 *             role:
 *               type: string
 *     responses:
 *       200:
 *         description: No Content
 *       400:
 *         description: Invalid request
 *       500:
 *          description: Internal Server Error
 */
// router.post(
//   '/',
//   /* validate('addUser'), */
//   user.all
// );

// router.post(
//   '/signup',
//   validate('signup'),
//   user.signup
// );

/**
 * @swagger
 * /api/v1/users/login:
 *   post:
 *     tags:
 *       - Users
 *     name: Login
 *     summary: Login
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       200:
 *         description: No Content
 *       400:
 *         description: Invalid request
 *       500:
 *          description: Internal Server Error
 */
//router.post('/login', user.login);



//router.put('/change_password',Auth.check, user.changePassword);

/**
 * @swagger
 * /api/users/:
 *   get:
 *     tags:
 *       - Admin
 *     name: GetAll a users
 *     summary: Show all users
 *     consumes:
 *       - application/json
 *     responses:
 *       200:
 *         description: No Content
 *       400:
 *         description: Invalid request
 *       500:
 *          description: Internal Server Error
 */
//router.get('/', user.getAll);


//router.get('/profile',Auth.check, user.profile);
/**
 * @swagger
 * /api/users/{:uuid}  :
 *   get:
 *     tags:
 *       - Admin
 *     name: Get a user
 *     summary: Get a user
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: No Content
 *       400:
 *         description: Invalid request
 *       500:
 *          description: Internal Server Error
 */
//router.get('/:uuid', user.getUser);

/**
 * @swagger
 * /api/users/{:uuid}  :
 *   put:
 *     tags:
 *       - Admin
 *     name: Update a user
 *     summary: Update a user
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: No Content
 *       400:
 *         description: Invalid request
 *       500:
 *          description: Internal Server Error
 */
/* router.put(
  '/:uuid', Auth.check,
  /*validate('addUser'),*/ /*user.updateUser
); */

/**
 * @swagger
 * /api/users/{:uuid} :
 *   delete:
 *     tags:
 *       - Admin
 *     name: Delete a user
 *     summary: Delete a user
 *     consumes:
 *       - application/json
 *    parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: No Content
 *       400:
 *         description: Invalid request
 *       500:
 *          description: Internal Server Error
 */
//router.delete('/:uuid',Auth.check, user.deleteUser);

export = router;
