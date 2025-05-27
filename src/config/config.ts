import { registerAs } from '@nestjs/config';
import Joi from 'joi';

export default registerAs('config', () => ({
  port: process.env.PORT,
  tipo: process.env.TIPO,
  host: process.env.HOST,
  port_db: process.env.PORT_DB,
  user_name: process.env.USER_NAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  REDIS_PREFIX: process.env.REDIS_PREFIX || '',
}));

// export const validation = {
//   PORT: Joi.number(),
//   TIPO: Joi.string(),
//   HOST: Joi.string(),
//   PORT_DB: Joi.number(),
//   USER_NAME: Joi.string(),
//   PASSWORD: Joi.string().optional().allow(''),
//   DATABASE: Joi.string(),
// };
