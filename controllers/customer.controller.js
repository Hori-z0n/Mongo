const customer = require('../model/customer.js')

exports.index = (req, res)=>{
    res.send('<h1>Customer Application<\h1><a href = "/api/customer">customer list</a>')
}

exports.findAll = (req, res)=>{
    customer.find().then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).send({
            msg: err.message
        })
    })
}