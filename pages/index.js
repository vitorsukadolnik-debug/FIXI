import { useState } from "react";

export default function Home() {
  const [cidade, setCidade] = useState("");
  const [servico, setServico] = useState("");

  const profissionais = [
    { nome: "João Silva", profissao: "Pedreiro", cidade: "São Paulo" },
    { nome: "Carlos Souza", profissao: "Eletricista", cidade: "São Paulo" },
    { nome: "Marcos Lima", profissao: "Pintor", cidade: "Campinas" },
  ];

  const filtrados = profissionais.filter((p) => {
    return (
      (cidade === "" || p.cidade.toLowerCase().includes(cidade.toLowerCase())) &&
      (servico === "" || p.profissao.toLowerCase().includes(servico.toLowerCase()))
    );
  });

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>FIXI - Encontre profissionais</h1>

      <input
        placeholder="Cidade"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
      />

      <input
        placeholder="Serviço"
        value={servico}
        onChange={(e) => setServico(e.target.value)}
        style={{ marginLeft: 10 }}
      />

      <hr />

      {filtrados.map((p, i) => (
        <div key={i} style={{ padding: 10, border: "1px solid #ccc", marginBottom: 10 }}>
          <h3>{p.nome}</h3>
          <p>{p.profissao} - {p.cidade}</p>

          <a href="https://wa.me/5511999999999" target="_blank">
            Chamar no WhatsApp
          </a>
        </div>
      ))}
    </div>
  );
}
