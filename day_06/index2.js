import dotenv from 'dotenv'
import express from 'express'
dotenv.config()

const Pool = require('pg').Pool;
const pool = new Pool({
    host : 'localhost',
    user : 'postgres',
    password : 'admin',
    port : 5432,
    database : 'hr-db'
})

const app = express()
const port = process.env.PORT || 3005

app.listen(port,()=> console.log(`Server listening on port ${port}`))

app.get("/api/departments", (req, res) => {
    pool.query("select *  from departments", [], (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rows);
    });
  });
  
  app.get("/api/department/:id", (req, res) => {
    const { id } = req.params;
    pool.query("select * from departments where department_id =$1", [id], (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rows);
    });
  });
  
  app.post("/api/department", (req, res) => {
    const { department_id, department_name, manager_id, location_id } = req.body;
    pool.query("insert into departments (department_id, department_name, manager_id, location_id ) values ($1, $2, $3, $4)", [department_id, department_name, manager_id, location_id], (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rowCount);
    });
  });
  
  app.put("/api/department/:id", (req, res) => {
    const { id } = req.params;
    const { department_id, department_name, manager_id, location_id } = req.body;
  
    pool.query("update departments set department_id = $1, department_name = $2, manager_id = $3, location_id = $4 where department_id = $5", [department_id, department_name, manager_id, location_id, id], (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).end("Data berhasil update");
    });
  });
  
  app.delete("/api/department/:id", (req, res) => {
    const { id } = req.params;
  
    pool.query("delete from departments where department_id = $1", [id], (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).end("Data berhasil dihapus");
    });
  });