import validator from '../helpers/validate.js';

export const createPostValidation = (req, res, next) => {
    const validationRule = {
        "title": "required|string",
        "message": "required|string",
        "creator": "required|string",
        "tags": "required|string",
        "selectedFile": "required|string",
    }
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
        } else {
            next();
        }
    });
}
