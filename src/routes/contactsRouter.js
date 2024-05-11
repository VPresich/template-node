import express from 'express';
import validateBody from '../middlewares/validateBody.js';
import validateId from '../middlewares/validateId.js';
import sch from '../schemas/contactSchema/index.js';
import ctrl from '../controllers/contactCtrls/index.js';

import authMiddleware from '../middlewares/authMiddleware.js';

const contactsRouter = express.Router();
// contactsRouter.get('/', authMiddleware, getAllContacts);
contactsRouter.get('/', authMiddleware, ctrl.getContacts);

contactsRouter.get(
  '/:id',
  validateId(sch.idSchema),
  authMiddleware,
  ctrl.getOneContact
);

contactsRouter.delete(
  '/:id',
  validateId(sch.idSchema),
  authMiddleware,
  ctrl.deleteContact
);

contactsRouter.post(
  '/',
  validateBody(sch.createSchema),
  authMiddleware,
  ctrl.createContact
);

contactsRouter.put(
  '/:id',
  validateId(sch.idSchema),
  validateBody(sch.updateSchema),
  authMiddleware,
  ctrl.updateContact
);

contactsRouter.patch(
  '/:id/favorite',
  validateId(sch.idSchema),
  validateBody(sch.updateFavoriteSchema),
  authMiddleware,
  ctrl.updateFavoriteStatus
);

export default contactsRouter;
