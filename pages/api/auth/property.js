import connectMongo from "@/database/conn";
import Properties from "@/model/Prop-Schema";

export default async function handler(req, res) {
  connectMongo().catch((error) => res.json({ error: "Connection Failed" }));

  if (req.method === "POST") {
    if (!req.body)
      return res.status(404).json({ error: "Don't have form data" });
    const { name,address,contact,price } = req.body;

    const checkexisting = await Properties.findOne({ name });
    if (checkexisting)
      return res.status(422).json({ message: "Property Already Exists" });

    Properties.create(
      { name,address,contact,price },
      function (err, data) {
        if (err) return res.status(404).json({ err });
        res.status(201).json({ status: true, user: data });
      }
    );
  } else {
    res
      .status(500)
      .json({ message: "HTTPS method not valid only POST acitve" });
  }
}
