const{response} = require('express')


const usuariosGet =(req, res) => {

    const {q, nombre, apikey,page, limit} = req.query

        res.json({
            msg: 'get API - controlador',
            q,
            nombre,
            apikey,
            page,
            limit
        })
    }
const usuariosPost =(req, res) => {

    const body = req.body

        res.json({
            msg: 'post API - controlador',
            body
        })
    }

const usuariosPut =(req, res) => {

    const {id} = req.params

        res.json({
            msg: 'put API - controlador',
            id
        })
    } 

const usuariosPatch =(req, res) => {

        res.json({
            msg: 'get API - controlador'
        })
    }

const usuariosDelete =(req, res) => {

        res.json({
            msg: 'get API - controlador'
        })
    }


module.exports= {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}    