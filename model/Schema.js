import { Schema, model, models } from "mongoose";

const useSchema = new Schema({
  username: String,
  email: String,
  password: String,
});

const Users = models.user || model("user", useSchema);

export default Users;
