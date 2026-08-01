import { useState } from 'react';

function Participate() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="participe" id="participe">
      <div className="container">
        <div className="participe-info reveal">
          <span className="eyebrow">Participe</span>
          <h2>Quero fazer parte dessa corrente</h2>
          <p>
            Você pode ajudar de mais de um jeito: virando voluntário nas ações, doando itens que ainda estão em bom estado, ou nos contando que quer contribuir de outra forma. Preencha o formulário que a gente entra em contato.
          </p>
          <ul>
            <li>
              <span className="dot" /> Ser voluntário(a)
            </li>
            <li>
              <span className="dot" /> Doação de roupas, kits de higiene e alimentos
            </li>
            <li>
              <span className="dot" /> Parcerias institucionais e apoio logístico
            </li>
          </ul>
        </div>

        <form className="reveal" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="field">
              <label htmlFor="nome">Nome completo</label>
              <input id="nome" name="nome" required placeholder="Seu nome" />
            </div>
            <div className="field">
              <label htmlFor="telefone">Telefone / WhatsApp</label>
              <input id="telefone" name="telefone" required placeholder="(00) 00000-0000" />
            </div>
          </div>

          <div className="field">
            <label htmlFor="email">E-mail</label>
            <input id="email" name="email" type="email" required placeholder="voce@email.com" />
          </div>

          <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: 10 }}>
            Como você quer ajudar?
          </label>
          <div className="radio-group">
            <label>
              <input type="radio" name="tipo" value="voluntario" defaultChecked /> Ser voluntário(a)
            </label>
            <label>
              <input type="radio" name="tipo" value="doacao" /> Fazer uma doação
            </label>
            <label>
              <input type="radio" name="tipo" value="outro" /> Outra forma
            </label>
          </div>

          <div className="field">
            <label htmlFor="mensagem">Conte um pouco mais (o que deseja doar, disponibilidade, etc.)</label>
            <textarea id="mensagem" name="mensagem" placeholder="Ex: tenho roupas de inverno e um kit de higiene para doar" />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            Enviar
          </button>
          <p className={`form-msg${submitted ? ' show' : ''}`}>
            Recebemos sua mensagem! Em breve alguém da equipe entra em contato. 💛
          </p>
        </form>
      </div>
    </section>
  );
}

export default Participate;
