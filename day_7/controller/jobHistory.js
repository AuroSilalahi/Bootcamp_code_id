import { sequelize } from "../models/init-models.js";

const historyController = {
  findAll: async (req, res) => {
    try {
      const query = await sequelize.query("select * from job_history", {
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
        "SELECT * from job_history where employee_id = :id",
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
      const { id, start, end, jobId, departId } = req.body;
      const query = await sequelize.query(
        "insert into job_history (EMPLOYEE_ID,START_DATE,END_DATE,JOB_ID,DEPARTMENT_ID) values (:id, :start, :end, :jobId, :departId)",
        {
          replacements: {
            id: id,
            start: start,
            end: end,
            jobId: jobId,
            departId: departId,
          },
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
      const { end } = req.body;
      await sequelize.query(
        "update job_history set end_date = :end where employee_id = :id",
        {
          replacements: { id: id, end: end },
        }
      );
      return res.send(`Success update job_history id ${id}`);
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  deleted: async (req, res) => {
    try {
      const id = req.params.id;
      await sequelize.query("delete from job_history where employee_id = :id", {
        replacements: { id: id },
        type: sequelize.QueryTypes.delete,
      });
      return res.send(`Success delete job_history id ${id}`);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};

export default historyController;
