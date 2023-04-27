import { Schema, model, models } from "mongoose";

const useSchema = new Schema({
  name: String,
  address: String,
  contact: String,
  price: String,
  description: String,
  imglink: String
});

const Properties = models.property || model("property", useSchema);

export default Properties;
