let port = 8083

let express = require('express')

let app = express()

let bodyParser = require('body-parser')

let cors = require('cors')

let mysql = require('mysql')

app.use((req,res,next) => {
    // * permite tudo
  res.header('Access-Control-Allow-Origin', '*') // ou http://localhost:8080 ou o site .com.br

   res.header('Access-Control-Allow-Headers', 
       'Origin, X-Requested-With, Content-Type, Accept, Authorization')

      res.header('Access-Control-Allow-Methods', 'GET', 'PUT','POST','DELETE')

        app.use(cors())

        next()
})

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())

// app.use(express.static(__dirname))



function execSQLQuery(sqlQry, res){
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Info@3304",
    database: "floripa"
  });

  
  connection.query(sqlQry, function(error, results, fields){
    if(error) 
      res.json(error);
    else
      res.json(results);
    connection.end();
    //console.log('executou!');
});
}

app.get('/pessoas', (req, res) => {
    execSQLQuery("SELECT * FROM  falafloripas", res)
})



  app.listen(port, () => {
      console.log('rodando!!!')
  })



