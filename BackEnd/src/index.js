

const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

/** 
 * Rota / recursos
*/

/**
 * Métod HTTP:
 * 
 * GET: Buscar/listar uma informação do Back-End
 * POST: Criar uma informação no Back-End
 * PUT: Alterar uma informação no Back-End
 * DELETE: Deletar uma informação no Back-End
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query params: Parâmetros nomeados enviados na rota após "?"
  * geralmente eles servem para filtros e paginação.
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
    */

// app.post('/users/:id',(request,response) => {
//     const body = request.body;

//     console.log(body);
    
//     return response.json({
//         evento: 'Semana Omnistack 11.0',
//         aluno: 'Tiago Santos Da Silva'
//     })
// })

app.listen(3333);