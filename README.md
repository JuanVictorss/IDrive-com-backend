
# Projeto IDrive Programação para internet 1
Projeto de integração entre Frontend e Backend através do JS vanilla


## Estrutura do Projeto

- **`/database`**: Contém arquivos de configuração do banco de dados.
  - `db.js`: Configuração do banco de dados SQLite.
  - `idrive.db`: Arquivo do banco de dados SQLite.
  - `seed.js`: Script para popular o banco de dados com dados iniciais.
  - `table.js`: Definições das tabelas do banco de dados.
- **`/middleware`**: Contém middleware para autenticação e autorização.
  - `JWT.js`: Middleware para autenticação usando JSON Web Tokens (JWT).

- **`/models`**: Contém modelos para interagir com o banco de dados.
  - `carros.js`: Modelo para a tabela de veículos.
  - `usuarios.js`: Modelo para a tabela de usuários.

- **`/public`**: Contém arquivos estáticos do frontend.
  - `css/`: Estilo CSS.
  - `html/`: Arquivos HTML.
  - `images/`: Imagens utilizadas na aplicação.
  - `js/`: Scripts JavaScript para o frontend.
  - `index.html`: Página principal da aplicação.

- **`/node_modules`**: Diretório para pacotes do npm.

## Pacotes Utilizados

- **`bcrypt@5.1.1`**: Para hashing de senhas.
- **`cors@2.8.5`**: Para habilitar CORS.
- **`dotenv@16.4.5`**: Para carregar variáveis de ambiente.
- **`express@4.19.2`**: Framework para criar o servidor.
- **`jsonwebtoken@9.0.2`**: Para criação e verificação de JWTs.
- **`nodemon@3.1.4`**: Para reinício automático do servidor durante o desenvolvimento.
- **`sqlite@5.1.1`**: Biblioteca para interagir com o banco de dados SQLite.
- **`sqlite3@5.1.7`**: Bindings nativos para SQLite3 em Node.js.
- **`uuid@10.0.0`**: Para geração de UUIDs.
## Instalação

Abra o terminal na pasta idrive-backend e use os comandos

Instalando pacotes
```bash
  npm install
```
    
criando .env
```bash
  echo "senha = escolhaUmaSenha" > .env
```
## Rodando


Entre no diretório idrive-backend


Inicie o servidor

```bash
  npm run start:dev
```

