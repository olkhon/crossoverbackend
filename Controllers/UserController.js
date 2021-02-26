const pool = require('../dbconfig');


module.exports = {
    newUser: async(req, res) => {
        const {first_name, last_name, age} = req.body;
        // express validator; put column names in double quotes !!!;
        try {
            const answerDB = await pool.query('INSERT INTO users (first_name, last_name, age) VALUES ( $1, $2, $3)', [first_name, last_name, age]);
            res.json({
                message: "New user with the following values:" + [first_name, last_name, age],
                code: 200,
                description: "User added" + [first_name, last_name, age],
                data: answerDB.rows
            })

        }catch (e) {
            console.log(e);
            res.sendStatus(404);
        }
    },
    updateUser: async (req, res) => {

        const {first_name, last_name, age, id} = req.params;

        try {
            const answerDB = await pool.query('UPDATE users SET first_name = $1, last_name = $2, age= $3 WHERE id = $4',
            [first_name, last_name, age, id]);
            res.json({
                message: "Update user with id:" + id,
                code: 200,
                description: "User update with id:" + id,
                data: answerDB.rows[0]
            })

        }catch (e) {
            console.log(e);
            res.sendStatus(404);
        }
    },
    deleteUser: async(req, res) => {
        const {id} = req.params;
        console.log(id);
        try {
            const answerDB = await pool.query('DELETE FROM users WHERE id = $1', [id]);
            res.json({
                message: "Delete" + id,
                code: 200,
                description: "User with id:" + id,
                data: answerDB.rows[0]
            })

        }catch (e) {
            console.log(e);
            res.sendStatus(404);
        }
    },
    getUserById: async(req, res) => {

        const {id} = req.params;
        try {
            const answerDB = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
            res.json({
                message: "Retrieve user by id:" + id,
                code: 200,
                description: "User with id:" + id,
                data: answerDB.rows[0]
            })

        }catch (e) {
            console.log(e);
            res.sendStatus(404);
        }
    },
    getUser: async (_, res) => {
        try {
            const answerDB = await pool.query('SELECT * FROM users');
            res.json({
                message: "Retrieved all user",
                code: 200,
                description: "List of all Users",
                data: answerDB.rows
            })

        }catch (e) {
            console.log(e);
            res.sendStatus(404);
        }
    }
}

