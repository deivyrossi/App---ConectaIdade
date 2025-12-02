#  Conecta Idade - Tecnologia Social Digital

Este projeto é um protótipo de **Tecnologia Social Digital** desenvolvido como parte do **Seminário II de Engenharia de Computação (CEFET-MG)**. 

O objetivo da solução é promover a inclusão digital, o acesso a direitos e o monitoramento do bem-estar de idosos através de uma interface simplificada e acessível.

##  Objetivos do Projeto
- **Inclusão Digital:** Interface adaptada (UI/UX) com botões grandes, alto contraste e linguagem simples.
- **Gestão de Direitos:** Acesso rápido e fácil a informações sobre benefícios e legislação (Estatuto do Idoso).
- **Engajamento Social:** Divulgação de eventos comunitários e oficinas para combater o isolamento.
- **Segurança Passiva:** Funcionalidade de "Check-in de Bem-Estar" diário.

##  Tecnologias Utilizadas
- **[React.js](https://react.dev/)** (via Vite): Biblioteca para construção da interface.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Framework de estilização "utility-first" moderno.
- **[Lucide React](https://lucide.dev/)**: Biblioteca de ícones leves e acessíveis.

##  Como rodar o projeto localmente

### Pré-requisitos
Certifique-se de ter o **[Node.js](https://nodejs.org/)** (versão LTS recomendada) instalado em sua máquina.

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/deivyrossi/App---ConectaIdade
   
2. **Entre na pasta do projeto:**
   ```bash
   cd conecta-idade
   
3. **Instale as dependências**
   ```bash
   npm install

4. **Inicie o ambiente de desenvolvimento**
   ```bash
   npm run dev
   
5. **Acesse o aplicativo:**
   Abra o navegador no endereço indicado no terminal.


##  Estrutura do projeto
```bash
conecta-idade/
├── src/
│   ├── App.jsx          # Lógica principal, rotas e componentes da interface
│   ├── main.jsx         # Ponto de entrada da aplicação React
│   └── index.css        # Importação do Tailwind CSS (@import "tailwindcss";)
├── index.html           # Arquivo HTML base
├── package.json         # Dependências e scripts do projeto
├── postcss.config.js    # Configuração do PostCSS (para Tailwind v4)
└── vite.config.js       # Configuração do Vite
```

## Funcionalidades do Protótipo (MVP)

**Tela Inicial (Dashboard):**

 - Saudação personalizada.
 - Check-in Diário: Botão de ação rápida e visual para o idoso confirmar que está bem ("Estou Bem!").

**Meus Direitos:**

- Lista de cards informativos sobre direitos (Transporte, Saúde, Prioridade).
-  Botão simulado de "Ouvir Texto" para acessibilidade.

**Atividades e Social:**

- Agenda de eventos locais (Ginástica, Oficinas de Celular).
- Informações claras de data, local e botão de confirmação de presença.

**Emergência:**

- Botões de discagem rápida com áreas de toque expandidas.
- Contato direto com SAMU (192), Conselho do Idoso ou Familiares cadastrados.
   
