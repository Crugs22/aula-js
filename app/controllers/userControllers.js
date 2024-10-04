const User = require('../models/userModel')

const userController = {
    getAllUsers: async (req, res) => {
        try{
            const users = await User.getALL()
            res.json(users)
        } catch(error){
            res.status(500).json({error:'Erro ao obter usuário'})
        }
    },
    getUserById: async (req, res) => {
        try{
            const { id } = req.params
            const user = await User.getById(id)
            if (user){
                res.json(user)
            }else{
                res.status(400).json({error:'Usuário não encontrado.'})
            }
        }catch(error){
            res.status(500).json({error: 'Erro ao obter usuário.'})
        }
    },
    
    createUser: async (req, res) => {
        try{
            const{name, email} = req.params
            const createUser = await User.createUser(name, email)
            res.status(201).json(newUser)
        }catch(error){
            res.status(500).json({error:'Erro ao criar usuário'})
        }
    },
    updateUser: async (req, res) => {
        try{
            const { id } = req.params
            const{name, email} = req.params
            const updateUser = await User.updateUser(id, name, email)
            if (updateUser){
                res.json(updateUser)
            }else{
                res.status(404).json({error:'Usuário não encontrado'})
            }
        }catch(error){
            res.status(500).json({error:'Erro ao atualizar usuário'})
        }
    },
    deleteUser: async (req, res) => {
        try{
            const { id } = req.params
            const{name, email} = req.params
            const deleteUser = await User.deleteUser(id)
            if (deleteUser){
                res.json({message: 'Usuário deletado com sucesso'})
            }else{
                res.status(404).json({error:'Usuário não encontrado'})
            }
        }catch(error){
            res.status(500).json({error:'Erro ao deletar usuário'})
        }
    }
}

module.exports = userController;