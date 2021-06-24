import Validator from "validatorjs";

export const createPostValidation = (req, res, next) => {
    const validationRule = {
                "title": "required|string",
                "message": "required|string",
                "creator": "required|string",
                "tags": "required|string",
                "selectedFile": "required|string",
            }
    const validation = new Validator(req.body, validationRule, customMessages);
    validation.passes(() => {console.log("test passed"); next();});
    validation.fails(() => callback(validation.errors, false));
};

// import { validator } from '../helpers/validate.js';

// export const createPostValidation = (req, res, next) => {
//     const validationRule = {
//         "title": "required|string",
//         "message": "required|string",
//         "creator": "required|string",
//         "tags": "required|string",
//         "selectedFile": "required|string",
//     }
//     Validator(req.body, validationRule, {}, (err, status) => {
//         if (!status) {
//             res.status(412)
//                 .send({
//                     success: false,
//                     message: 'Validation failed',
//                     data: err
//                 });
//         } else {
//             console.log("pass control to next function");
//             next();
//         }
//     });
// }
