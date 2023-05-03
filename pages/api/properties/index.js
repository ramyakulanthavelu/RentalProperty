import connectMongo from "@/database/conn";
import Properties from "@/model/Prop-Schema";
import { data } from "autoprefixer";

const url = require("url");
const http = require("http");

export default async function handler(req, res) {
  connectMongo().catch((error) => res.json({ error: "Connection Failed" }));
  //const query = req.query;
  // const { pathname, query } = url.parse(req.url, true);
  // console.log(query.id);
  //const id  = query;

  if (req.method !== "GET") {
    res.status(405).send({ message: "balls" });
  }

  try {
    await connectMongo();
    const properties = await Properties.find();
    //const result = query ? properties.filter((property) => property.name === query.id) : res.status(200).send(properties);
    //res.status(200).send(result);

    res.status(200).send(properties);
  } catch (err) {
    console.log(err);
    res.status(400).send({ err, msg: "Something Died" });
  }
}

// async function fetchData(url) {
//   const res = await fetch(url);
//   const data = await res.json();
//   //console.log("API response data:", data);
//   return data;
// }

// const server = http.createServer((req, res) => {
//   const { pathname, query } = url.parse(req.url, true);
//   console.log(query);
//   res.writeHead(200, {
//     "content-type": "application/json",
//   });
//   if (pathname === "/api/properties") {
//      const data = fetchData("http://localhost:3000/api/properties")
//       .then(data.filter((property) => property._id === query))
//       .catch((error) => {
//         console.error(error);
//         res.statusCode = 500;
//         res.end("Server error");
//       });
//   }
// });

// server.listen(6969, "127.0.0.1", () => console.log("Server is running..."));
