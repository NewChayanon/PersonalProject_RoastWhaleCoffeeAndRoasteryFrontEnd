import { loginSchema, registerSchema } from "./auth-validator";

export const registerValidator = (input) => {
  const { error } = registerSchema.validate(input, { abortEarly: false });
  if (error) {
    const result = error.details.reduce((acc, err) => {
      // err.path => email, password, confirmPassword
      acc[err.path] = err.message;
      return acc;
    }, {});
    return result;
  }
};

export const loginValidator = (input) => {
  const { error } = loginSchema.validate(input, { abortEarly: false });
  if (error) {
    const result = error.details.reduce((acc, err) => {
      acc[err.path] = err.message;
      return acc;
    }, {});
    return result;
  }
};
