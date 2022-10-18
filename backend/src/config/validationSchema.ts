import * as Joi from 'joi';

const validationSchema = Joi.object({
  DATABASE_HOST: Joi.string().required(),
});

export default validationSchema;
