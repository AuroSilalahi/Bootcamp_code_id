import { sequelize } from "../models/init-models.js";

const jobsController = {
  findAll: async (req, res) => {
    try {
      const query = await sequelize.query("select * from jobs", {
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
        "SELECT * from jobs where job_id = :id",
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
      const { id, title, minSalary, maxSalary } = req.body;
      const query = await sequelize.query(
        "insert into jobs (JOB_ID,JOB_TITLE,MIN_SALARY,MAX_SALARY) values (:id, :title, :min, :max)",
        {
          replacements: {
            id: id,
            title: title,
            min: minSalary,
            max: maxSalary,
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
      const { minSalary, maxSalary } = req.body;
      await sequelize.query(
        "update jobs set min_salary = :min, max_salary = :max where job_id = :id",
        {
          replacements: { min: minSalary, max: maxSalary, id: id },
        }
      );
      return res.send(`Success update jobs id ${id}`);
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  deleted: async (req, res) => {
    try {
      const id = req.params.id;
      await sequelize.query("delete from jobs where job_id = :id", {
        replacements: { id: id },
        type: sequelize.QueryTypes.delete,
      });
      return res.send(`Success delete jobs id ${id}`);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};

export default jobsController;
