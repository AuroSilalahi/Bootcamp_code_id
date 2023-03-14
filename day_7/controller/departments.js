import { sequelize } from "../models/init-models.js";

const departmentsController = {
  findAll: async (req, res) => {
    try {
      const query = await sequelize.query("select * from departments", {
        type: sequelize.QueryTypes.SELECT,
      });
      return res.send(query);
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  findOne: async (req, res) => {
    try {
      const id = req.params.id;
      const query = await sequelize.query(
        "SELECT * from departments where department_id = :id",
        {
          replacements: { id: id },
          type: sequelize.QueryTypes.SELECT,
        }
      );
      return res.send(query);
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  create: async (req, res) => {
    try {
      const { name, locationId } = req.body;
      const query = await sequelize.query(
        "insert into departments (department_name, location_id) values (:name, :locationId)",
        {
          replacements: { name: name, locationId: locationId },
          type: sequelize.QueryTypes.create,
        }
      );
      return res.send(query);
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;
      const { name } = req.body;
      await sequelize.query(
        "update departments set department_name = :name where department_id = :id",
        {
          replacements: { id: id, name: name },
        }
      );
      return res.send(`Success update department id ${id}`);
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  deleted: async (req, res) => {
    try {
      const id = req.params.id;
      await sequelize.query(
        "delete from departments where department_id = :id",
        {
          replacements: { id: id },
          type: sequelize.QueryTypes.delete,
        }
      );
      return res.send(`Success delete department id ${id}`);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};

export default departmentsController;
