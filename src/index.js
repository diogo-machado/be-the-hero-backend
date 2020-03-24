const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);


/*
Métodos HTTP

GET: Buscar informação do back-end
POST: Criar informação no back-end
PUT: Alterar uma informação no back-end
DELETE: Deletar uma informação no back-end



Tipos de parâmetros:

Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros,Paginação)
Route Params: Parâmetros utilizados para identificar recursos
Request Body: Corpo da requisição, utilizado para criar ou alterar recursos



SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
NOSQL: MongoDB, CouchDB, etc


Driver: SELECT  * FROM users
Query Builder: table('users').select('*').where()
*/



app.listen(3333);