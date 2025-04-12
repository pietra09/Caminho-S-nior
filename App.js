import React from "react";
import logo from "./assets/logo.png";

export default function CaminhoSeniorSite() {
  return (
    <main className="min-h-screen bg-black text-white p-4">
      {/* Header */}
      <header className="text-center py-10">
        <img src={logo} alt="Logo Caminho Sênior" className="mx-auto mb-4" style={{ width: '5cm', height: '5cm' }} />
        <h1 className="text-4xl font-bold text-blue-500">Caminho Sênior</h1>
        <p className="text-lg mt-2">Seu caminho para mais saúde e vitalidade</p>
      </header>

      {/* Galeria de Fotos */}
      <section className="w-full bg-gray-900 shadow-xl rounded-2xl p-6 mb-10">
        <h2 className="text-2xl font-semibold text-blue-400 mb-4 text-center">Inspirações</h2>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <img src="https://seniorconcierge.com.br/wp-content/uploads/2022/01/5-maneiras-de-evitar-o-estresse-na-vida-dos-idosos.jpeg" alt="Idoso correndo 3" className="rounded-xl w-full md:w-1/3 object-cover h-[350px]" />
        </div>
      </section>

      {/* Sobre */}
      <section className="max-w-4xl mx-auto bg-gray-900 shadow-xl rounded-2xl p-6 mb-10">
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">Sobre Nós</h2>
        <p>
          A Caminho Sênior é uma assessoria de corrida dedicada à terceira idade. Oferecemos
          treinos personalizados, acompanhamento próximo e foco total em saúde, bem-estar e
          qualidade de vida para pessoas com 60 anos ou mais.
        </p>
      </section>

      {/* Planos */}
      <section className="max-w-6xl mx-auto p-6 mb-10">
        <h2 className="text-2xl font-semibold text-blue-400 mb-6 text-center">Nossos Planos</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[ 
            {
              nome: "Essencial",
              preco: "R$ 150 - R$ 200",
              detalhes: "1x/semana | Individual",
              descricao: "Para quem está começando e quer dar os primeiros passos."
            },
            {
              nome: "Vitalidade",
              preco: "R$ 300 - R$ 350",
              detalhes: "2x/semana | Individual",
              descricao: "Regularidade e mais energia no dia a dia."
            },
            {
              nome: "Longevidade",
              preco: "R$ 380 - R$ 450",
              detalhes: "3x/semana | Individual",
              descricao: "Ideal para quem busca autonomia e saúde duradoura."
            },
            {
              nome: "Amizade",
              preco: "R$ 180 - R$ 250",
              detalhes: "2-3x/semana | Grupo (até 5)",
              descricao: "Perfeito para quem quer treinar com companhia."
            },
            {
              nome: "Caminho Firme",
              preco: "R$ 850 - R$ 1.100",
              detalhes: "Trimestral",
              descricao: "Comprometimento com resultados duradouros."
            },
            {
              nome: "Vida Plena",
              preco: "R$ 3.200 - R$ 4.000",
              detalhes: "Anual",
              descricao: "Transformação completa com parcelamento acessível."
            }
          ].map((plano, index) => (
            <div
              key={index}
              className="bg-black text-white rounded-2xl p-6 shadow-xl border-2 border-blue-500 w-full sm:w-[300px] relative"
            >
              {plano.nome === "Longevidade" && (
                <span className="absolute -top-3 left-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                  Mais completo
                </span>
              )}
              <h3 className="text-xl font-bold mb-2 text-blue-400">Plano {plano.nome}</h3>
              <p className="font-medium mb-1">{plano.detalhes}</p>
              <p className="text-2xl font-bold text-yellow-400 mb-2">{plano.preco}</p>
              <p className="text-sm text-gray-300 mb-4">{plano.descricao}</p>
              <button className="mt-auto w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded">
                Quero esse plano
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Formulário de Inscrição */}
      <section className="max-w-4xl mx-auto bg-gray-900 shadow-xl rounded-2xl p-6 mb-10">
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">Inscreva-se</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Nome completo" className="w-full p-2 rounded bg-black border border-blue-500 text-white" />
          <input type="email" placeholder="E-mail" className="w-full p-2 rounded bg-black border border-blue-500 text-white" />
          <input type="tel" placeholder="WhatsApp" className="w-full p-2 rounded bg-black border border-blue-500 text-white" />
          <textarea placeholder="Mensagem" className="w-full p-2 rounded bg-black border border-blue-500 text-white" rows={4}></textarea>
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded">Enviar</button>
        </form>
      </section>

      {/* Contato */}
      <section className="max-w-4xl mx-auto bg-gray-900 shadow-xl rounded-2xl p-6 mb-20">
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">Contato</h2>
        <p className="mb-2">📞 WhatsApp: (41) 98855-8331</p>
        <p className="mb-2">📧 E-mail: caminhoseniorassessoria@gmail.com</p>
        <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded">Fale conosco</button>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 py-6">
        © 2025 Caminho Sênior. Todos os direitos reservados.
      </footer>
    </main>
  );
}
