import Validator from "validatorjs";

export const createPostValidation = (req, res, next) => {
  const validationRule = {
    title: "required|string",
    message: "required|string",
    creator: "required|string",
    tags: "required|string",
    selectedFile: "required|string",
  };
  const validation = new Validator(req.body, validationRule);
  validation.passes(() => {
    console.log("test passed");
    next();
  });
  validation.fails(() => callback(validation.errors, false));
};

