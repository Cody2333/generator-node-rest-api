import express from 'express';
import user from './user';
import { ensureLogin } from './privilege';
import { swagDocHandler } from '../utils';

const router = new express.Router();

router.get('/', async (req, res) => {
  res.send({ msg: 'HELLO WORLD' });
});

router.get('/swagger.json', swagDocHandler);

router.use(ensureLogin);

router.use('/user', user);

export default router;
