# Caption Generator com Tradução Automática

Um projeto full-stack que gera legendas para imagens em inglês e as traduz automaticamente para português brasileiro usando modelos de IA da Hugging Face.

## 📋 Descrição do Projeto

Este projeto consiste em:

- **Frontend (React + Vite)**: Aplicação web que permite ao usuário inserir a URL de uma imagem e gerar legendas automaticamente em inglês
- **Backend (Node.js + Express)**: API que fornece o serviço de tradução de legendas do inglês para português brasileiro
- **IA Integrada**: Utiliza modelos pré-treinados da Hugging Face:
  - `Xenova/vit-gpt2-image-captioning` para geração de legendas
  - `Xenova/nllb-200-distilled-600M` para tradução automática

## 🚀 Como Executar

### Pré-requisitos

- Node.js 24.0.2 ou superior
- npm ou yarn
- Docker (opcional, para containerização)

### Frontend

1. Navegue até a pasta do frontend:
```bash
cd front
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

**Scripts disponíveis:**
- `npm run dev` - Inicia o servidor de desenvolvimento com HMR
- `npm run build` - Compila o projeto para produção
- `npm run lint` - Executa o linter ESLint
- `npm run preview` - Visualiza o build de produção localmente

### Backend

1. Navegue até a pasta do backend:
```bash
cd server_node
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor:
```bash
node index.js
```

O servidor estará rodando em `http://localhost:3000`

**Endpoints disponíveis:**
- `GET /` - Health check
- `POST /translate` - Traduz texto do inglês para português brasileiro
  - Body: `{ "text": "texto em inglês" }`

### 🐳 Docker

#### Com Docker Compose

1. Navegue até a pasta do backend:
```bash
cd server_node
```

2. Construa e inicie o container:
```bash
docker-compose up --build
```

O servidor estará disponível em `http://localhost:3000`

#### Com Dockerfile apenas

1. Navegue até a pasta do backend:
```bash
cd server_node
```

2. Construa a imagem:
```bash
docker build -t caption-generator-server:latest .
```

3. Execute o container:
```bash
docker run -p 3000:3000 caption-generator-server:latest
```

**Notas sobre o Docker:**
- O arquivo [compose.yaml](server_node/compose.yaml) configura o serviço com Node.js 24.0.2
- O container expõe a porta 3000
- As dependências são instaladas apenas uma vez durante o build
- Um volume de cache npm é utilizado para otimizar builds posteriores

## 📁 Estrutura do Projeto

```
.
├── front/                          # Frontend React + Vite
│   ├── src/
│   │   ├── App.jsx                # Componente principal
│   │   ├── App.css                # Estilos da aplicação
│   │   ├── main.jsx               # Ponto de entrada
│   │   ├── index.css              # Estilos globais
│   │   └── models/
│   │       ├── api.js             # Funções de API do frontend
│   │       └── ImageCaptioner.js  # Classe para gerar legendas
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
│
├── server_node/                    # Backend Node.js + Express
│   ├── models/
│   │   ├── api.js                 # Funções de API do backend
│   │   └── Translator.js          # Classe para tradução
│   ├── index.js                   # Servidor Express
│   ├── package.json
│   ├── Dockerfile
│   └── compose.yaml
│
└── .vscode/                       # Configurações do VS Code
```

## 🛠️ Stack Tecnológico

### Frontend
- **React** 19.2.0
- **Vite** 7.2.2
- **@huggingface/transformers** 3.7.6
- **ESLint** para linting

### Backend
- **Node.js** 24.0.2
- **Express** 5.1.0
- **@huggingface/transformers** 3.7.6
- **CORS** para requisições cross-origin

## 🔄 Fluxo de Funcionamento

1. Usuário insere a URL de uma imagem no frontend
2. Frontend usa o modelo `vit-gpt2-image-captioning` para gerar legenda em inglês
3. Legenda é enviada ao backend para tradução
4. Backend traduz usando o modelo `nllb-200-distilled-600M`
5. Tradução é retornada e exibida no frontend

## ⚙️ Configuração CORS

O backend está configurado para aceitar requisições do frontend em `http://localhost:5173`. Para produção, ajuste o arquivo [server_node/index.js](server_node/index.js).

## 📝 Notas Importantes

- O modelo de geração de legendas é executado no frontend para melhor performance
- O modelo de tradução é executado no backend
- Ambos os modelos usam quantização (q8) para reduzir uso de memória
- A primeira execução de cada modelo pode levar alguns minutos para download e inicialização

## 📄 Licença

ISC