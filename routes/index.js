import express from 'express';
import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';
import AuthController from '../controllers/AuthController';
import FilesController from '../controllers/FilesController';

/**
 * Initializes and defines routing for the application
 * @param {object} app - Express application instance
 */
function controllerRouting(app) {
  const router = express.Router();
  app.use('/', router);

  /**
   * GET /status
   * Checks the health of Redis and the database
   */
  router.get('/status', AppController.getStatus);

  /**
   * GET /stats
   * Retrieves the number of users and files in the database
   */
  router.get('/stats', AppController.getStats);

  /**
   * POST /users
   * Creates a new user in the database
   */
  router.post('/users', UsersController.postNew);

  /**
   * GET /users/me
   * Retrieves the authenticated user's details based on the token
   */
  router.get('/users/me', UsersController.getMe);

  /**
   * GET /connect
   * Authenticates a user and generates a new token
   */
  router.get('/connect', AuthController.getConnect);

  /**
   * GET /disconnect
   * Logs out a user by invalidating their authentication token
   */
  router.get('/disconnect', AuthController.getDisconnect);

  /**
   * POST /files
   * Creates a new file in the database and on disk
   */
  router.post('/files', FilesController.postUpload);

  /**
   * GET /files/:id
   * Retrieves the file document based on the ID
   */
  router.get('/files/:id', FilesController.getShow);

  /**
   * GET /files
   * Retrieves all file documents for a specific parentId with pagination
   */
  router.get('/files', FilesController.getIndex);

  /**
   * PUT /files/:id/publish
   * Sets isPublic to true for the file document based on the ID
   */
  router.put('/files/:id/publish', FilesController.putPublish);

  /**
   * PUT /files/:id/unpublish
   * Sets isPublic to false for the file document based on the ID
   */
  router.put('/files/:id/unpublish', FilesController.putUnpublish);

  /**
   * GET /files/:id/data
   * Returns the content of the file document based on the ID
   */
  router.get('/files/:id/data', FilesController.getFile);
}

export default controllerRouting;
