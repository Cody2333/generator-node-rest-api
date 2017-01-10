import express from 'express';
import sha1 from 'sha1';
import randomstring from 'randomstring';

import { User } from 'models';

const router = new express.Router();

/**
 * @swagger
 * /user:
 *   get:
 *     summary: 用户列表
 *     description: 返回用户列表
 *     tags:
 *       - User
 *     responses:
 *       200:
 *         description: users
 *         schema:
 *           type: object
 *           properties:
 *             users:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/User'
 */
router.get('/', async (req, res) => {
  const users = await User.find();
  return res.send({ users });
});

/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: 用户登录
 *     description: 用户用用户名和密码登录，会返回用户信息和 token
 *     tags:
 *       - User
 *     parameters:
 *       - name: user
 *         in: body
 *         required: true
 *         description: 用户名和密码
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               default: 用户名
 *             password:
 *               type: string
 *               default: 密码
 *     responses:
 *       200:
 *         description: 用户信息，包含 token
 */
router.post('/login', async (req, res, next) => {
  const { name, password } = req.body;
  try {
    const user = await User.findOne({
      name,
      password: sha1(password)
    });
    if (user) {
      return res.send(user);
    }
    next({ msg: '不正确的用户名或密码', status: 401 });
  } catch (err) {
    next(err);
  }
});

/**
 * @swagger
 * /user/create:
 *   post:
 *     summary: 注册用户
 *     description: 用户注册
 *     tags:
 *       - User
 *     parameters:
 *       - name: user
 *         in: body
 *         required: true
 *         description: 用户名和密码
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               default: 用户名
 *             password:
 *               type: string
 *               default: 密码
 *     responses:
 *       200:
 *         description: 新建的用户信息
 */
router.post('/create', async (req, res, next) => {
  const { name, password } = req.body;
  try {
    const token = `Token ${randomstring.generate(20)}${Date.now()}${randomstring.generate(20)}`;
    let user = await User.findOne({ name });
    if (user) {
      return next({ msg: '用户名已存在', status: 403 });
    }
    user = new User({
      name,
      password: sha1(password),
      role: 'user',
      token,
    });
    user = await user.save();
    return res.send(user);
  } catch (err) {
    next(err);
  }
});
export default router;
