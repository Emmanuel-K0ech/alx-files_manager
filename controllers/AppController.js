import redisClient from '../utils/redis';
import dbClient from '../utils/db';

class AppController {
  /**
   * Returns the status of Redis and DB connections
   * @param {Object} req - The HTTP request object
   * @param {Object} res - The HTTP response object
   */
  static getStatus(req, res) {
    const status = {
      redis: redisClient.isAlive(),
      db: dbClient.isAlive(),
    };
    res.status(200).json(status);
  }

  /**
   * Returns the number of users and files in the database
   * @param {Object} req - The HTTP request object
   * @param {Object} res - The HTTP response object
   */
  static async getStats(req, res) {
    try {
      const usersCount = await dbClient.nbUsers();
      const filesCount = await dbClient.nbFiles();

      const stats = {
        users: Number.isInteger(usersCount) ? usersCount : 0,
        files: Number.isInteger(filesCount) ? filesCount : 0,
      };

      res.status(200).json(stats);
    } catch (error) {
      console.error('Error fetching stats:', error.message);
      res.status(500).json({ error: 'Could not retrieve statistics' });
    }
  }
}

export default AppController;
