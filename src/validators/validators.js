
import { loginSchema, registerSchema } from "./auth-validator";
import { addCoffeeProduct, address, validateCoffee,payment, editProduct } from "./stock-validator";

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

export const addCoffeeProductValidator = (input) => {
  const { error } = addCoffeeProduct.validate(input, { abortEarly: false });
  
  if (error) {
    const result = error.details.reduce((acc, err) => {
      acc[err.context.label] = err.message;

      return acc;
    }, {});
    return result;
  }
};

export const handleValidateCoffee = (input) =>{
  const validation = validateCoffee(input.coffee);
  return validation
}


export const addressValidate = (input)=>{
  const { error } = address.validate(input, { abortEarly: false });
  if (error) {
    const result = error.details.reduce((acc, err) => {
      acc[err.path[0]] = err.message;

      return acc;
    }, {});
    return result;
  }
}

export const paymentValidate = (paymentInput) => {
  const { error } = payment.validate(paymentInput, { abortEarly: false });
  if (error) {
    const result = error.details.reduce((acc, err) => {
      acc[err.path[0]] = err.message;

      return acc;
    }, {});
    return result;
  }
}

export const editProductValidator = (input) => {
  const { error } = editProduct.validate(input, { abortEarly: false });
  if (error) {
    const result = error.details.reduce((acc, err) => {
      acc[err.context.label] = err.message;

      return acc;
    }, {});
    return result;
  }
};