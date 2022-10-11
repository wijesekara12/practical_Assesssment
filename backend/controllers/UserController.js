const User = require("../models/UserModel");

//registration
const registerUser = (req, res) => {

    const {
        FirstName,
        LastName,
        NICNumber,
        email,
        password,
        Address
    } = req.body;

    const newUser = new User({
        FirstName,
        LastName,
        NICNumber,
        email,
        password,
        Address
    });

    newUser.save()
        .then((customer) => {
            res.status(200).send({status: "Customer Registered", customer});
        }).catch((err) => {
            console.log(err);
        })
}

//login
const loginUser = async (req, res) => {

    let UserName = req.body.UserName;
    let Password = req.body.Password;

    await User.findOne({email: UserName}).then((data) => {
        if(data){
            if(data.password == Password){
                res.status(200).send({status: "Login Successfully", data});
            }else{
                res.send({status: "Incorrect Password"});
            }
        }else{
            res.send({status: "User does not exists"});
        }
    });

}

//get one user through id
const getOneUser = (req, res) => {
    
    let ID = req.params.id;

    User.findById(ID)
        .then((user) => {
            res.status(200).send({status: "User Data Fetched", user});
        }).catch((err) => {
            console.log(err);
        })
}

//get all users
const getAllUsers = (req, res) => {

    User.find()
        .then((data) => {
            res.status(200).send({status: "Fetched All Users Data", data});
        }).catch((err) => {
            console.log(err);
        })
}

//update user
const updateUser = async (req, res) => {

    let UserId = req.params.id;

    const {
        FirstName,
        LastName,
        NICNumber,
        email,
        password,
        Address
    } = req.body;

    const updateUser = {
        FirstName,
        LastName,
        NICNumber,
        email,
        password,
        Address
    }

    const update = await User.findByIdAndUpdate(UserId, updateUser)
        .then((update) => {
            res.status(200).send({status: "Customer Updated", update});
        }).catch((err) => {
            console.log(err);
        })
}

//delete customer
const deleteUser = (req, res) => {

    let UserId = req.params.id;

    User.findByIdAndDelete(UserId)
        .then(() => {
            res.status(200).send({status: "Successfully Deleted"});
        }).catch((err) => {
            console.log(err);
        })
}

module.exports = {
    registerUser,
    loginUser,
    getOneUser,
    getAllUsers,
    updateUser,
    deleteUser
}