import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export default async function handler(req, res) {

  if (req.method === "POST") {

    const {
      nome,
      telefone,
      origem,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
      gclid,
      fbclid,
      pagina
    } = req.body;

    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          nome,
          telefone,
          origem,
          utm_source,
          utm_medium,
          utm_campaign,
          utm_term,
          utm_content,
          gclid,
          fbclid,
          pagina
        }
      ]);

    if (error) {
      console.error("Erro ao salvar:", error);
      return res.status(500).json({ error: "Erro ao salvar lead" });
    }

    return res.status(200).json({
      success: true,
      mensagem: "Lead salvo no banco 🚀"
    });
  }

  if (req.method === "GET") {
    return res.status(200).json({ message: "API funcionando" });
  }
}