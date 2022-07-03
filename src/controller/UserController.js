const responseModel = {
    sucess: false,
    data: [],
    error: []
}

module.exports = {
    async create(req, res){
        const response = {...responseModel}

        const { username, password, email } = req.body;
        const [, affectedRows] = await connection.query(`
        INSERT INTO users VALUES (
            DEFAULT,
            '${username}',
            '${password}',
            '${email}'
            NOW(),
            NOW()
        );
    `)
        return res.json(response)
    },
    async login(req, res){
        const response = {...responseModel}

        const { username, password } = req.body;
        const [, data] = await connection.query(`
            SELECT * FROM users
            WHERE username='${username}' AND password='${password}'
            ORDER BY id DESC LIMIT 1
        `)
        return res.json(response)
    }
}