# 🏳️‍🌈 Protótipo Back-End Lacrei

---

## 📌 O Desafio

A ideia é desenvolver uma API de cadastro de pessoas profissionais da área da saúde com as funcionalidades de login e cadastro (em três etapas: pré-cadastro, cadastro e pós-cadastro), visando automatizar o processo atual para assim proporcionar uma melhor experiência para os profissionais, fazendo com que eles se cadastrem e se tornem parceiros.

### 🔧 Instalação

Para a **Implantação** dessa aplicação, é necessário seguir o seguinte passo-apasso:

#### 1 - clonar o repositório

```
git clone https://github.com/rafaelsangali/front-lacrei
```

#### 2 - Instalar pacotes e dependências

```
npm install
```
#### 3 - Compilar o códio TS para JS

```
tsc
```
#### 4 - Criar um banco de dados local de acordo com as necessidades do projeto ([Diagrama Entidade-Relacionamento](https://drive.google.com/file/d/17mz9r794bSmmYuLDYlp6ps_Tq2QnZ0xJ/view?usp=sharing)):

* Criar um arquivo .env na raiz do projeto de acordo com .env.exemplo;

* Criar o banco de dados
```
npx sequelize db:create
```

* Criar as tabelas do banco de dados
```
npx sequelize db:migrate
```

* Preencher o banco de dados com as informações pré-definidas
```
node dist/database/carga_inicial
```

#### 5 - Inicializar a API localmente
```
node dist/index.js
```
####
####
####
####
