import Joi from "joi";

export const addCoffeeProduct = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  details: Joi.string().required(),
  popular: Joi.number().required(),
  category: Joi.string(),
  coffee: Joi.array().items(
    Joi.object({
      size: Joi.string().required(),
      price: Joi.number().required(),
      stock: Joi.number().required(),
    })
  ),
  tool: Joi.object().required(),
  image: Joi.array().items(
    Joi.object({
      image: Joi.string(),
    })
  ),
});

export const validateCoffee = (coffeeArray) => {
  let isValid = true;
  const errorValidatorCoffee = coffeeArray.map((item) => {
    let itemErrors = { price: "", stock: "" };

    itemErrors.size = item.size;
    if (!item.price) {
      isValid = false;
      itemErrors.price = "Price is required";
    } else if (isNaN(Number(item.price))) {
      isValid = false;
      itemErrors.price = "Price must be a valid number";
    }
    if (!item.stock) {
      isValid = false;
      itemErrors.stock = "Stock is required";
    } else if (isNaN(Number(item.stock))) {
      isValid = false;
      itemErrors.stock = "Stock must be a valid number";
    }

    return itemErrors;
  });

  return { isValid, errorValidatorCoffee };
};

export const address = Joi.object({
  firstName: Joi.string().required().trim(),
  lastName: Joi.string().required().trim(),
  mobile: Joi.string()
    .required()
    .pattern(/^[0-9]{10}$/),
  country: Joi.string().required().trim(),
  address: Joi.string().required().trim(),
  district: Joi.string().required().trim(),
  province: Joi.string().required().trim(),
  postcode: Joi.string()
    .required()
    .pattern(/^[0-9]{5}$/),
});

export const payment = Joi.object({
  image: Joi.string().required(),
  date: Joi.string().required(),
  hour: Joi.string().required(),
  minute: Joi.string().required(),
});
