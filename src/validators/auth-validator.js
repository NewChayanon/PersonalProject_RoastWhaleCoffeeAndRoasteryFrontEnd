import Joi from "joi";

export const registerSchema = Joi.object({
  email: Joi.string()
    .required()
    .email({ tlds: { allow: ["com", "net"] } })
    .messages({
      "string.empty": "email is required.",
      "string.email": "invalid email address.",
    }),
  password: Joi.string().required().alphanum().min(8).messages({
    "string.empty": "password is required.",
    "string.alphanum": "password is not alphabet and number.",
    "string.min": "password must be at least 8 characters.",
  }),
  confirmPassword: Joi.string().required().valid(Joi.ref("password")).messages({
    "string.empty": "confirm password is required.",
    "any.only": "password and confirm password did not match.",
  }),
});

export const loginSchema = Joi.object({
  email: Joi.string(),
  password: Joi.string(),
});
