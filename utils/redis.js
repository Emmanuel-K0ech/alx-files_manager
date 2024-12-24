import redis from 'redis';
import { promisify } from 'util';

/**
 * Redis class for redis operations
 */
class RedisClient {
  constructor() {
    this.client = redis.createClient();
    this.getAsync = promisify(this.client.get).bind(this.client);

    this.client.on('error', (error) => {
      console.log(`Redis client not connected to the server: ${error.message}`);
    });

    this.client.on('connect', () => {
    });
  }

  /**
   * Checks connection to redis
   * @return {boolean} True if alive or otherwise false
   */
  isAlive() {
    return this.client.connected;
  }

  /**
   * gets corresponding value to redis key
   * @ky {string} redis key to search
   * @return {string}  value of key
   */
  async get(ky) {
    const value = await this.getAsync(ky);
    return value;
  }

  /**
   * Creates new key in redis with a life duration (TTL)
   * @ky {string} key to be saved in redis
   * @val {string} value to be asigned to key
   * @time {number} TTL (duration) of key
   * @return {undefined}  No return
   */
  async set(ky, val, time) {
    this.client.setex(ky, time, val);
  }

  /**
   * Deletes key in redis
   * @ky {string} key to be deleted
   * @return {undefined}  No return
   */
  async del(ky) {
    this.client.del(ky);
  }
}

const redisClient = new RedisClient();

export default redisClient;
