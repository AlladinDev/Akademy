import mongoose, { Document, Model, models, Schema } from "mongoose";

export interface IAdminSchema extends Document {
    userName: string,
    address: string,
    age: number,
    phoneNumber: number,
    email: string,
    password: string,
    photo: string,
    createdAt: Date
}

const AdminSchema: Schema<IAdminSchema> = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,

    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
},
    {
        timestamps: true // automatically adds createdAt and updatedAt
    }
)

export const AdminModel: Model<IAdminSchema> = mongoose.models.Admin || mongoose.model<IAdminSchema>("Admin", AdminSchema);