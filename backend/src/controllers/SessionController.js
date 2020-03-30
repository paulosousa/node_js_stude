const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const ong_id = request.headers.authorization;

        const ong = await connection('ongs')
            .where('id', ong_id)
            .select('name')
            .first();

        if(ong) {
            return response.json(ong);
        } else {
            return response.status(400).json({error: 'No ONG found with this id.'});
        }
    }
}