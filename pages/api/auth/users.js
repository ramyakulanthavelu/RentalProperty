import connectMongo from "@/database/conn";
//import Properties from "@/model/Prop-Schema";
import Users from "@/model/Schema";
import { data } from "autoprefixer";

const url = require("url");
const http = require("http");

export default async function handler(req, res) {
  connectMongo().catch((error) => res.json({ error: "Connection Failed" }));
  //const query = req.query;
  const { pathname, query } = url.parse(req.url, true);
  console.log(query.id);
  //const id  = query;

  if (req.method !== "GET") {
    res.status(405).send({ message: "balls" });
  }

  try {
    await connectMongo();
    const properties = await Users.find();
    const result = query ? properties.filter((property) => property.email === query.id) : res.status(200).send(properties);
    res.status(200).send(result[0]);

    //res.status(200).send(properties);
  } catch (err) {
    console.log(err);
    res.status(400).send({ err, msg: "Something Died" });
  }
}