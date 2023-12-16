import express, { request, response } from 'express';
import mongoose from 'mongoose';
import { Customer } from './CustomerModel.js';
import { CUSTOMER_NOT_FOUND, DELETE_SUCCESS, ERROR_MESSAGE, INSERT_SUCCESS, LOGIN_SUCCESS, PORT_NUMBER, REGISTER_FAIL, REGISTER_SUCCESS, UPDATE_SUCCESS } from './constants.js';
import { StatusCodes } from 'http-status-codes';
import  cors  from 'cors';
//import { Register } from './RegisterModel.js';

import { Admin }  from './AdminModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Contact } from './ContactModel.js';


function verifyToken(request,response,next){
    const header=request.get('Authorization');
    if (header) {
        const token=header.split(" ")[1];
        jwt.verify(token,"secret1234",(error,payload)=>{
            if (error) {
                response.status(StatusCodes.UNAUTHORIZED).send({message:"Invalid token"});
            }
            else{
                next();
            }
        });
    } else {
        response.status(StatusCodes.UNAUTHORIZED).send({message:"Please login first"});
    }
    
}

const app=express();           
app.use(cors());                
app.use(express.json());        



const connectDb=async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/parkingsystem');
        console.log("Database connection created !")
    } catch (error) {
        console.log(error);
    }
}



app.post("/admin",async (request,response)=>{
    try {
        const reqData=request.body;
        reqData['password']=bcrypt.hashSync(reqData.password,10);
        const admin=new Admin(reqData);
        await admin.save();
        response.status(StatusCodes.CREATED).send({message:INSERT_SUCCESS});
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
    }
});



app.post("/admin/login",async(request,response)=>{
    try {
        const admin=await Admin.findOne({phone:request.body.phone});
        if (admin) {
            if (bcrypt.compareSync(request.body.password,admin.password)) {
                const token=jwt.sign({adminPhone:admin.phone},"secret1234");
                response.status(StatusCodes.OK).send({message:"Login successful", token:token});
            }
            else{
                response.status(StatusCodes.BAD_REQUEST).send({message:"Invalid phone or password"});
            }
        }
        else{
            response.status(StatusCodes.BAD_REQUEST).send({message:"Invalid phone or password"});
        }
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
    }
});


app.post("/customer", verifyToken,async(request,response)=>{
    try {
        const reqData=request.body;
        const customer=new Customer(reqData);
        await customer.save();
        response.status(StatusCodes.CREATED).send({message:INSERT_SUCCESS});
        
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
    }
});

// to get data from server :
app.get("/customer",verifyToken,async(request,response)=>{
    try {
       const customer = await Customer.find();                            //.find() method returns an array of documents. If we want to find a single document, then  use .findOne() 
       response.send({customer:customer})
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
    }
});


// to get only one customer from server :
app.get("/customer/:slot",verifyToken,async(request,response)=>{
    try {
            const customer = await Customer.findOne({slot:request.params.slot});
            if(customer==null){
                response.status(StatusCodes.NOT_FOUND).send({message:CUSTOMER_NOT_FOUND});
            }
            else{
                response.send({customer:customer});
            }
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
    }
});





// to delete data from the server :


app.delete("/customer/:slot",verifyToken,async(request,response)=>{
        try {
            await Customer.deleteOne({slot:request.params.slot});
            response.send({message:DELETE_SUCCESS});
        } catch (error) {
            response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
        }

});


//to update the data into server :
app.put("/customer/:slot",verifyToken,async(request,response)=>{
    try {
        await Customer.updateOne({slot:request.params.slot},request.body);         // params will takes values which pass from from URL
        response.send({message:UPDATE_SUCCESS});
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
    }
});



//contact :
app.post("/contact", verifyToken,async(request,response)=>{
    try {
        const reqData=request.body;
        const customerContact=new Contact(reqData);
        await customerContact.save();
        response.status(StatusCodes.CREATED).send({message:INSERT_SUCCESS});
        
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
    }
});




app.listen(PORT_NUMBER,()=>{
    console.log("server started !!!!");
    mongoose.connect('mongodb://127.0.0.1:27017/parkingsystem');
    connectDb();
})
































/*

const app=express();
app.use(cors());
app.use(express.json());

const connectDb=async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/parkingsystem');
        console.log("Database server created");
    } catch (error) {
        console.log(error);
    }
}

// to send data from user to server :
app.post("/customer", verifyToken,async(request,response)=>{
    try {
        const reqData=request.body;
        const customer=new Customer(reqData);
        await customer.save();
        response.status(StatusCodes.CREATED).send({message:INSERT_SUCCESS});
        
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
    }
});

// to get data from server :
app.get("/customer",verifyToken,async(request,response)=>{
    try {
       const customer = await Customer.find();
       response.send({customer:customer})
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
    }
});


// to get only one customer from server :
app.get("/customer/:slot",verifyToken,async(request,response)=>{
    try {
            const customer = await Customer.findOne({slot:request.params.slot});
            if(customer==null){
                response.status(StatusCodes.NOT_FOUND).send({message:CUSTOMER_NOT_FOUND});
            }
            else{
                response.send({customer:customer});
            }
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
    }
});


// to delete data from the server :
app.delete("/customer/:slot",verifyToken,async(request,response)=>{
        try {
            await Customer.deleteOne({slot:request.params.slot});
            response.send({message:DELETE_SUCCESS});
        } catch (error) {
            response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
        }

});


//to update the data into server :
app.put("/customer/:slot",verifyToken,async(request,response)=>{
    try {
        await Customer.updateOne({slot:request.params.slot},request.body);
        response.send({message:UPDATE_SUCCESS});
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
    }
});



//for registration :
app.post('/register',async (request, response)=>{
    try {
        const reqData=request.body;
        const result=new Register(reqData);
        await result.save();
        response.status(StatusCodes.CREATED).send({message:REGISTER_SUCCESS});
        
    } catch (error) {
        response.status(StatusCodes.BAD_REQUEST).send({message:REGISTER_FAIL});
    }
});


//for login :
app.post('/login',async(request,response)=>{
    try {
            const {email,password} = request.body;
           const user = await Register.findOne({email:email});
           if(user){
                if(user.email === email){
                    if(user.password === password){
                        response.send({message:LOGIN_SUCCESS});
                    }
                    else{
                        response.send({message:LOGIN_FAIL});
                    }
                
                }else{
                    response.send({message:LOGIN_FAIL});
                }
           }else{
            response.send({message:NOT_FOUND});
           }
    } catch (error) {
        response.status(StatusCodes.BAD_REQUEST).send({message:REGISTER_FAIL});
    }
})


app.listen(PORT_NUMBER,()=>{
    console.log("server started !!!!");
    mongoose.connect('mongodb://127.0.0.1:27017/parkingsystem');
    connectDb();
})
*/