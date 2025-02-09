import { Schema, model } from "mongoose";

interface user {
  _id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phoneNo: string;
  avatar: string;
  role: string;
  verified: boolean;
  kyc: boolean;
  password: string;
}

const UserSchema = new Schema<user>({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  username: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, unique: true },
  phoneNo: { type: String, required: true, trim: true, unique: true },
  avatar: { type: String, required: false, trim: true },
  role: { type: String, enum: ['admin', 'user', 'rep'], required: true, default: 'user' },
  verified: { type: Boolean, default: false },
  kyc: { type: Boolean, default: false },
  password: { type: String, required: true, select: false }
}, { timestamps: true });

const User = model<user>("User", UserSchema);

export default User;
