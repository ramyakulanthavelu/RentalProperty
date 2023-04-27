export default async function handler(req, res) {
  const fd = new FormData();
  fd.append("image", req.body.image);
  fd.append("type", "base64");
  const response = await fetch("https://api.imgur.com/3/image", {
    method: "POST",
    headers: {
      Authorization: "Client-ID 56be34eb3f0831a",
    },
    body: fd,
    redirect: "follow",
  });
  const data = await response.json();
  return res.json(data);
}
