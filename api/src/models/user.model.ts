import { model, Schema } from "mongoose";

//Hizmet belgesinin tipini tanımla
export interface IUser {
  _id: string;
  username: string;
  email: string;
  password: string;
  photo: string;
  country: string;
  isSeller: boolean;
  phone?: string;
  desc?: string;
  createdAt: Date;
  updatedAt: Date;
}
//şema oluştur
const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      unique: [true, "Bu isimde bir kulanıcı zaten var"],
      required: [true, "Lütfen username alanını belirleyin"],
    },
    email: {
      type: String,
      unique: [true, "Bu mail'de bir kullanıcı zaten var"],
      required: [true, "Lütfen mail alanını belirleyin"],
    },
    password: {
      type: String,
      required: [true, "Lütfen şifre alanını belirleyin"],
    },
    country: {
      type: String,
      required: [true, "Lütfen country alanını belirleyin"],
    },
    photo: {
      type: String,
      default: "https://picsum.photos/200",
    },
    isSeller: {
      type: Boolean,
      default: false,
    },
    phone: {
      type: String,
    },
    desc: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

//model oluştur
const User = model<IUser>("User", userSchema);

export default User;
