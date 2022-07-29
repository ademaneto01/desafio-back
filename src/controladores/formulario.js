const knex = require('../conexao');

const cadastrarUsuario = async (req, res) => {
    const { nome, email } = req.body;

    if (!nome) {
        return res.status(404).json("O campo nome é obrigatório");
    }

    if (!email) {
        return res.status(404).json("O campo email é obrigatório");
    }

    try {
        const emailExistente = await knex('usuarios').where({ email: email }).first();
        console.log(emailExistente);
        if (emailExistente) {
            return res.status(404).json("E-mail já existente")
        }

        await knex('usuarios').insert({ nome, email })

        return res.status(200).json("O usuario foi cadastrado com sucesso!");
    } catch (error) {
        return res.status(400).json(error.message);
    }
}


module.exports = {
    cadastrarUsuario

};