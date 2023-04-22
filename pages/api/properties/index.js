import connectMongo from "@/database/conn";
import Properties from "@/model/Prop-Schema";

export default async function handler(req, res) {
  connectMongo().catch((error) => res.json({ error: "Connection Failed" }));

  if (req.method !== "GET") {
    res.status(405).send({ message: "balls"})
    
  }

  try {
    await connectMongo();
    const properties= await Properties.find();
    res.status(200).send(properties);
  }catch (err){
    console.log(err);
    res.status(400).send({err, msg :"Something Died"})
  }
}
