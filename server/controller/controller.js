var Userdb = require('../model/model');

//create user
exports.create = (req,res)=>{
    if(!req.body){
        res.status(400).send({message:"Content cannot be empty"});
        return;
    }

    const user = new Userdb({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        pwd: req.body.pwd,
        user_name: req.body.user_name
    })

    user
        .save(user)
        .then(data=>{
            // res.send(data)
            res.redirect('/');
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message || "Some error occured"
            });
        });
}

//fetch existing users
exports.find = (req,res)=>{
    Userdb.find()
    .then(user=>{
        res.send(user)
    })
    .catch(err=>{
        res.status(500).send({message:err.message||"Error occurred"})
    })
}

//edit user details
exports.update = (req,res)=>{
    if(!req.body){
        return res.status(400).send({message: "Data to update cannot be empty"})
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify: false})
        .then(data=>{
            if(!data){
                res.status(404).send({message: `Cannot Update user with ${id}.Maybe user not found`})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message: "Error update user information"})
        })
}


//delete user
exports.delete = (req,res)=>{
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then(data =>{
            if(!data){
                res.status(404).send({message: `Cannot delete with id ${id}, may be id is wrong`})
            }else{
                res.send({
                    message: "User deleted successfuly"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete user with id="+id
            });
        });
}