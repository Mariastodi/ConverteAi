const data = {
  navLinks: [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Como ajudar', href: '#materiais' },
    { label: 'Parceiros', href: '#parceiros' },
    { label: 'Pontos de coleta', href: '#pontos' },
    { label: 'Eventos', href: '#midia' },
  ],
  heroStats: [],
  badges: [
    {
      label: 'Tampinhas',
      type: 'tampinha',
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#5a4400" strokeWidth="2">
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      label: 'Garrafas PET',
      type: 'pet',
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#1c5a75" strokeWidth="2">
          <path d="M9 3h6v3l2 2v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V8l2-2z" />
          <path d="M9 11h6" />
        </svg>
      ),
    },
    {
      label: 'Latinhas',
      type: 'lata',
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#245c3e" strokeWidth="2">
          <rect x="7" y="4" width="10" height="16" rx="2" />
          <path d="M9 4V2h6v2" />
        </svg>
      ),
    },
    {
      label: 'Lacres',
      type: 'lacre',
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#8a3b3b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 5h10" />
          <path d="M8 5v2h8V5" />
          <path d="M7 8h10l-1 12H8L7 8Z" />
          <path d="M10 11h4" />
        </svg>
      ),
    },
  ],
  aboutCards: [],
  materials: [
    {
      title: 'Tampinhas',
      description: 'De garrafa PET, de leite, de refrigerante. Qualquer cor e tamanho.',
      color: 'var(--amarelo)',
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#5a4400" strokeWidth="2">
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      title: 'Garrafas PET',
      description: 'De preferência limpas e amassadas, para ocupar menos espaço no transporte.',
      color: 'var(--azul-bebe-2)',
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#1c5a75" strokeWidth="2">
          <path d="M9 3h6v3l2 2v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V8l2-2z" />
          <path d="M9 11h6" />
        </svg>
      ),
    },
    {
      title: 'Latinhas',
      description: 'De alumínio, amassadas para facilitar o armazenamento e transporte.',
      color: 'var(--verde)',
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#245c3e" strokeWidth="2">
          <rect x="7" y="4" width="10" height="16" rx="2" />
          <path d="M9 4V2h6v2" />
        </svg>
      ),
    },
    {
      title: 'Lacres de latinha',
      description: 'Aqueles anéis de alumínio que soltam da latinha. Guarde num potinho!',
      color: '#f6c9c9',
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#8a3b3b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 5h10" />
          <path d="M8 5v2h8V5" />
          <path d="M7 8h10l-1 12H8L7 8Z" />
          <path d="M10 11h4" />
        </svg>
      ),
    },
  ],
  partners: [
    { initials: 'CS', name: 'Cooperativa sei la', role: 'Compra e triagem', color: '#2f7a4f' },
    { initials: 'PD', name: 'Pizzaria Sabor Divino', role: 'Ponto de coleta', color: '#1c5a75' },
    { initials: 'OL', name: 'Oficina Leão', role: 'Logística', color: '#c98a2c' },
    { initials: 'EP', name: 'Escola Piamarta Montese', role: 'Educação ambiental', color: '#8a3b3b' },
  ],
  points: [
    { tag: 'Ponto fixo', name: 'Comunidade Novo Êxodo', address: 'Rua armando monteiro, 95 - Vila União', hours: 'Seg e sáb, 18h às 20h' },
    { tag: 'Ponto fixo', name: 'Pizzaria Sabor Divino', address: 'R. Suiça, 890 A - Manoel Sátiro', hours: 'Seg a Seg, 17h às 23:30h' },
    { tag: 'Escola parceira', name: 'Escola Piamarta Montese', address: 'R. Padre João Piamarta, 161 - Bom Futuro', hours: 'Seg a sex, 7h às 18h' },
  ],
  actions: [
    { date: 'Agosto 2026', title: 'Ação especial do Dia dos Pais', color: 'var(--amarelo)', icon: 'box' },
    { date: 'Setembro 2026', title: 'Lanche nas ruas e sensibilização', color: 'var(--azul-bebe-2)', icon: 'star' },
    { date: 'Outubro 2026', title: 'Mutirão de arrecadação e coleta local', color: 'var(--verde)', icon: 'heart' },
  ],
};

export default data;
