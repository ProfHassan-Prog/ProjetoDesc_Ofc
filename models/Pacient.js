import { mongoose } from "mongoose";

const Schema = mongoose.Schema;

const pacientSchema = new Schema({
    name:{
        type: String,
        required: [true, 'Name is required.']
    },
    BirthDate: {
        type: String,
        required: [true, 'Birth Date is required.'],
        unique: true
    }, 
    email: {
        type: String,
        required: [true, 'Email is required.']
    },
    phone: {
        type: String,
        required: [true, 'Phone is required.']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default pacientSchema;