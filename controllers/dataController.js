const { Pool } = require('pg');

const pool = new Pool({
  user: 'admin_postgres',
  host: 'database-practica.c78gkks6a7a7.us-east-1.rds.amazonaws.com',
  database: 'postgres',
  password: 'admin_database',
  port: 5432
});

exports.getAllDataTrx = async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM transaccion');
      const data = result.rows;
      client.release();
      res.status(200).json(data);
    } catch (err) {
      console.error('Error al obtener datos:', err);
      res.status(500).send('Error interno del servidor');
    }
  };
  

  exports.getAllDataClient = async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM cliente');
      const data = result.rows;
      client.release();
      res.status(200).json(data);
    } catch (err) {
      console.error('Error al obtener datos:', err);
      res.status(500).send('Error interno del servidor');
    }
  };




  exports.getAllDataProduct = async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM producto');
      const data = result.rows;
      client.release();
      res.status(200).json(data);
    } catch (err) {
      console.error('Error al obtener datos:', err);
      res.status(500).send('Error interno del servidor');
    }
  };



//----------------------------------------------------

exports.createDataTrx = async (req, res) => {
    const { cliente_id, producto_id ,cantidad} = req.body;
    try {
      const client = await pool.connect();
      const result = await client.query('INSERT INTO transaccion (cliente_id, producto_id, cantidad) VALUES ($1, $2, $3) RETURNING *', [ cliente_id, producto_id ,cantidad]);
      const newData = result.rows[0];
      client.release();
      res.status(200).json(newData);
    } catch (err) {
      console.error('Error al crear un nuevo registro:', err);
      res.status(500).send('Error interno del servidor');
    }
  };


  //-------------------------------------


  exports.updateDataTrx = async (req, res) => {
    const id = req.params.id;
    const {cliente_id, producto_id ,cantidad } = req.body;
    try {
      const client = await pool.connect();
      const result = await client.query('UPDATE transaccion SET cliente_id = $1, producto_id = $2, cantidad =$3  WHERE id = $4 RETURNING *', [cliente_id, producto_id ,cantidad ,id]);
      const updatedData = result.rows[0];
      client.release();
      if (!updatedData) {
        return res.status(404).send('Registro no encontrado');
      }
      res.json(updatedData);
    } catch (err) {
      console.error('Error al actualizar el registro:', err);
      res.status(500).send('Error interno del servidor');
    }
  };

  //----------------------------------------------------


  exports.deleteDataTrx = async (req, res) => {
    const id = req.params.id;
    try {
      const client = await pool.connect();
      const result = await client.query('DELETE FROM transaccion WHERE id = $1 RETURNING *', [id]);
      const deletedData = result.rows[0];
      client.release();
      if (!deletedData) {
        return res.status(404).send('Registro no encontrado');
      }
      res.status(200).json(deletedData);
    } catch (err) {
      console.error('Error al eliminar el registro:', err);
      res.status(500).send('Error interno del servidor');
    }
  };