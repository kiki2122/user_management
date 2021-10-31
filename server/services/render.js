const axios = require("axios");


exports.homeRoutes = (req,res) =>{
  axios.get("http://localhost:3000/http://3.6.93.159:7883/machstatz/get_all_users")
    .then(function(response){
        res.render('index',{users: response.data});
    })
    .catch(err =>{
        res.status(err)
    });
};

exports.add_user = (req,res) =>{
    res.render('add_user');
}

exports.edit = (req,res) =>{
    axios.get('http://localhost:3000/http://3.6.93.159:7883/machstatz/get_all_users',{params:{id:req.query.id}})
        .then(function(user){
            res.render("edit",{user: user.data})
        })
        .catch(err =>{
            res.send(err);
        });
};