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

    itemErrors.size = item.size
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
