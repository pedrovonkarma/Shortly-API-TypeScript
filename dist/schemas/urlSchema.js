import joi from 'joi';
var urlSchema = joi.object({
    url: joi.string().uri().required()
});
export default urlSchema;
