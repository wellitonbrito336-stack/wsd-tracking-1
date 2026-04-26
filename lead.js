export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log("Novo lead:", req.body);

    return res.status(200).json({ success: true });
  }

  if (req.method === 'GET') {
    return res.status(200).json({ message: "API funcionando" });
  }
}