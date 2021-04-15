const UserModel = require('../Model/user')
module.exports ={
    register:async(req,res)=>{
        try{
            let user = new UserModel(req.body);
            user = await user.save();
            return res.json({Code:1,
                data:user,
            msg:"Data Saved"})
        }
        catch(err){
            console.log(err);
        }
    }
}