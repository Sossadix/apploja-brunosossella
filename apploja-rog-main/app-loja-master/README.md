# 📱 App Loja – Catálogo de Produtos

Aplicativo mobile desenvolvido com **React Native** e **Expo Router**, como atividade prática da disciplina de **Desenvolvimento de Dispositivos Móveis**, ministrada pelo professor **Roginaldo Franco**.

---

## 👤 Desenvolvedor

- **Bruno Sossella**
- Curso: Engenharia de Software – 5º Período

---

## 🚀 Funcionalidades

- ✅ Navegação com Tabs e Stack
- ✅ Listagem de Categorias e Produtos
- ✅ Tela de Detalhes do Produto
- ✅ Tela "Sobre Mim"
- ✅ Dados simulados no arquivo `data/index.ts`

---

## 📁 Estrutura de Pastas
apploja-rog-main/
├── app/                          # Rotas e telas principais do app (usando Expo Router)
│   ├── categories/               # Tela de listagem de categorias
│   │   └── index.tsx
│   ├── product/                  # Tela de detalhes de produto
│   │   └── _layout.tsx
│   ├── about.tsx                # Tela "Sobre Mim"
│   └── index.tsx                # Tela inicial (Início)
│
├── data/                         # Arquivos de dados simulados
│   └── index.ts
│
├── services/                     # (opcional) Serviços ou chamadas de API
│
├── types/                        # Tipagens TypeScript utilizadas no projeto
│
├── assets/                       # Imagens e outros recursos estáticos (opcional)
│
├── .gitignore                    # Arquivos/pastas ignorados pelo Git
├── app.json                      # Configuração do projeto Expo
├── package.json                  # Dependências e scripts do projeto
├── tsconfig.json                 # Configuração do TypeScript
├── package-lock.json             # Travamento das versões das dependências
└── README.md                     # Explicações do projeto
