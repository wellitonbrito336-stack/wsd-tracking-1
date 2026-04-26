export default async function handler(req, res) {
  if (req.method === "POST") {

    const {
      nome,
      telefone,
      origem,
      utm_source,
      utm_campaign,
      utm_term,
      pagina
    } = req.body;

    console.log("🔥 Novo lead recebido:");
    console.log({
      nome,
      telefone,
      origem,
      utm_source,
      utm_campaign,
      utm_term,
      pagina
    });

    return res.status(200).json({
      success: true,
      mensagem: "Lead recebido com sucesso"
    });
  }

  if (req.method === "GET") {
    return res.status(200).json({ message: "API funcionando" });
  }
}