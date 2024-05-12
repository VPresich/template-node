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
  authMiddleware,
  validateId(sch.idSchema),
  ctrl.getOneContact
);

contactsRouter.delete(
  '/:id',
  authMiddleware,
  validateId(sch.idSchema),
  ctrl.deleteContact
);

contactsRouter.post(
  '/',
  authMiddleware,
  validateBody(sch.createSchema),
  ctrl.createContact
);

contactsRouter.put(
  '/:id',
  authMiddleware,
  validateId(sch.idSchema),
  validateBody(sch.updateSchema),
  ctrl.updateContact
);

contactsRouter.patch(
  '/:id/favorite',
  authMiddleware,
  validateId(sch.idSchema),
  validateBody(sch.updateFavoriteSchema),
  ctrl.updateFavoriteStatus
);

export default contactsRouter;
