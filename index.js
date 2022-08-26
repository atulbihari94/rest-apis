

/**
 * TODO: request body
 * 
 * fName
 * lName
 * email
 * mobile
 */

/**
 * TODO: success response output
 * 
 * message : success
 * status: 201
 * data: {id: ...}
 */

/**
 * TODO: failure response
 * 
 * message for failure, statuscode 400,
 * data: [{field:fname, message: mandatory}]
 */

const express = require('express');
const Joi = require('joi');

const app = express();

const PORT = 3000;

app.use(express.json());

let id = 0;

const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    mobile: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
});



app.post('/api/user', async (req, res) => {
    const {
        error,
        value
    } = schema.validate(req.body, {
        abortEarly: false
    });

    if (error) {
        const errorArr = error.details.map(err => ({
            field: err.path[0],
            message: err.message.replaceAll('"', '')
        }));
        res.status(400).send(errorArr);
    } else {
        id++;
        console.log('value=>', value);
        res.status(201).send({
            message: 'success',
            status: 201,
            data: {
                id
            }
        });
    }
});

app.listen(PORT, () => {
    console.log(`app listening on the port ${PORT}`);
})