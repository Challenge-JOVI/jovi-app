<div align="center">

# 📸 JOVI App

**Protótipo funcional de um aplicativo mobile que ensina a explorar os recursos avançados da câmera do celular e devolve sugestões de melhoria para as suas fotos.**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

</div>

---

## 🧭 Sobre o projeto

O **JOVI App** é uma aplicação **100% front-end** (HTML + CSS + JavaScript puro), construída com **Tailwind CSS v4** e pensada para telas de celular. Não existe back-end: todo o conteúdo vem de um arquivo estático de dados e o "cadastro de usuários" é simulado com o `localStorage` do navegador.

O app se divide em três grandes áreas:

| Área | O que faz |
| :--- | :--- |
| 🎓 **Tutoriais** | 8 tutoriais passo a passo dos recursos da câmera (Super Zoom, Aura Light com IA, Autofocus, Microfilme, Modo Superlua, Modo Comida, Modo Cores e Visualização Dupla). |
| 🖼️ **Galeria** | 8 fotos de exemplo que, ao serem abertas, exibem uma análise simulada de IA com sugestões de nitidez, enquadramento, cores, exposição e dicas. |
| 👤 **Perfil** | Dados do usuário cadastrado, progresso nos tutoriais, preferências de idioma (pt-BR / en-US), privacidade, lojas oficiais e logout. |

---

## 🗺️ Fluxo de navegação

```
onboarding.html  →  signup.html  →  login.html  →  menu.html
                                                      │
                        ┌─────────────────────────────┼─────────────────────────────┐
                        ▼                             ▼                             ▼
                   tutorial.html                galeria.html                   perfil.html
                        │                        │        │
                        ▼                        ▼        ▼
                   final.html         uploadImage.html    feedback.html
                                              │                 ▲
                                              └─────────────────┘
```

**Como cada tela conversa com a outra:**

- `onboarding.html` — apresentação em 4 passos, encaminha para o cadastro.
- `signup.html` — valida nome, idade, e-mail, senha (mín. 6 caracteres) e termos; grava o usuário em `localStorage.users`.
- `login.html` — confere e-mail/senha contra `localStorage.users` e guarda o `loggedUserId`.
- `menu.html` — carrossel de tutoriais lido de `data.js`; abre `tutorial.html?id=<id>`.
- `tutorial.html` — navega pelos passos e, ao final, registra o tutorial em `localStorage.completedTutorials` e leva para `final.html?name=<título>`.
- `galeria.html` — monta o grid de fotos e abre `feedback.html?id=<id>` após uma animação de carregamento.
- `uploadImage.html` — recebe uma foto do usuário, reduz a prévia para o `sessionStorage` e sorteia uma análise: `feedback.html?origem=upload&id=<id>`.
- `feedback.html` — renderiza a foto e as sugestões de IA correspondentes.
- `perfil.html` — exibe os dados do usuário logado e as configurações do app.

---

## 📁 Estrutura de pastas

```
jovi-app/
├── data.js                 # ⚙️ Fonte única de dados: tutoriais, galeria e sugestões de upload
├── package.json            # Scripts e dependências (Tailwind CSS v4)
├── src/
│   └── input.css           # Entrada do Tailwind: tema, fontes e componentes customizados
└── dist/
    ├── css/styles.css      # CSS final gerado pelo Tailwind
    ├── images/             # Imagens dos tutoriais, ícones e fotos da galeria
    ├── js/                 # Um script por tela (login, menu, tutorial, galeria...)
    └── pages/              # As 10 telas em HTML
```

> [!IMPORTANT]
> As páginas em `dist/pages/` carregam o `data.js` que fica **na raiz do projeto** (`<script src="../../data.js">`). Por isso o servidor local precisa ser iniciado a partir da **raiz `jovi-app/`** — servir apenas a pasta `dist/` quebra os tutoriais, a galeria e o feedback.

---

## 🚀 Rodando localmente (iniciando pelo `login.html`)

### ✅ Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (apenas se você for recompilar o CSS)
- Um navegador moderno
- Um servidor local — abrir o arquivo com duplo clique (`file://`) **não é recomendado**

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/Challenge-JOVI/jovi-app.git
cd jovi-app
```

### 2️⃣ Instale as dependências *(opcional)*

Só é necessário se você for **alterar estilos**. O arquivo `dist/css/styles.css` já vem compilado no repositório.

```bash
npm install
```

### 3️⃣ Suba um servidor local na raiz do projeto

<details open>
<summary><b>🅰️ Opção 1 — Live Server (VS Code) · recomendada</b></summary>

<br>

1. Instale a extensão **Live Server** no VS Code.
2. Abra a pasta **`jovi-app`** (a raiz, não a `dist`).
3. Clique com o botão direito em `dist/pages/login.html` → **Open with Live Server**.
4. O projeto já vem configurado com a porta **5501** em `.vscode/settings.json`:

```
http://127.0.0.1:5501/dist/pages/login.html
```

</details>

<details>
<summary><b>🅱️ Opção 2 — Node (sem instalar nada globalmente)</b></summary>

<br>

```bash
npx serve .
```

Depois acesse:

```
http://localhost:3000/dist/pages/login.html
```

</details>

<details>
<summary><b>🅲 Opção 3 — Python</b></summary>

<br>

```bash
python -m http.server 5501
```

Depois acesse:

```
http://localhost:5501/dist/pages/login.html
```

</details>

### 4️⃣ Crie uma conta antes de entrar

> [!NOTE]
> O login valida o e-mail e a senha contra os usuários salvos no `localStorage` do navegador. Como ele começa vazio, **nenhuma credencial funciona na primeira execução**.

Na tela de login, clique em **"Cadastrar-se!"**, preencha o formulário em `signup.html` e volte para o `login.html` com os mesmos dados. Depois disso o app libera o `menu.html` e todo o restante da navegação.

### 5️⃣ Visualize como celular 📱

As telas foram desenhadas para telas pequenas. Abra o **DevTools** (`F12`) → **Toggle device toolbar** (`Ctrl + Shift + M`) e escolha um aparelho como o *iPhone 14 Pro* ou o *Galaxy S20*.

---

## 🎨 Editando os estilos

O Tailwind v4 é compilado a partir de `src/input.css` (onde ficam a paleta `royal-blue`, a fonte *Poppins* e os componentes customizados) para `dist/css/styles.css`.

```bash
npm run build
```

O script roda em modo `--watch`: deixe-o aberto em um terminal enquanto edita e o CSS é regerado a cada alteração.

---

## 🗄️ Dados e persistência

Todo o conteúdo do app vem de três listas declaradas em [`data.js`](data.js):

| Constante | Conteúdo |
| :--- | :--- |
| `tutorials` | Os 8 tutoriais, com `id`, `title`, `icon` e a lista de `steps` (título, descrição em HTML e imagem). |
| `galeria` | As 8 fotos de exemplo, com `tag`, `alt` e as `suggestions` da análise de IA. |
| `uploadSuggestions` | As 6 análises sorteadas quando o usuário envia a própria foto. |

Para adicionar um tutorial ou uma foto, basta incluir um novo objeto na lista correspondente — as telas se ajustam sozinhas.

O navegador guarda o estado da sessão nestas chaves:

| Chave | Onde | Para quê |
| :--- | :--- | :--- |
| `users` | `localStorage` | Lista de contas criadas no cadastro |
| `loggedUserId` | `localStorage` | Identifica quem está logado |
| `completedTutorials` | `localStorage` | Tutoriais concluídos, exibidos no perfil |
| `uploadPreview` | `sessionStorage` | Prévia da foto enviada, mostrada no feedback |

> 💡 Para começar do zero, limpe o armazenamento em **DevTools → Application → Storage → Clear site data**.

---

<div align="center">

Feito com 💙 pela equipe **Challenge JOVI**

</div>
