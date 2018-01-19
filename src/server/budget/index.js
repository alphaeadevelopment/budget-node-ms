import express from 'express';
import { getAll, getById, add, update } from './handlers';
import bodyParser from 'body-parser';

const router = express.Router();

router.use(bodyParser.json());

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', bodyParser.json(), add);
router.put('/:id', update);

export default router;
