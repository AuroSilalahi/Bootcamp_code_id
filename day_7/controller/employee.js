import { sequelize } from "../models/init-models.js";

const employeeController = {
  findAll: async (req, res) => {
    try {
      const query = await sequelize.query("select * from employees", {
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
        "SELECT * from employees where employee_id = :id",
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
      const {
        firstName,
        lastName,
        email,
        phone,
        hireDate,
        jobId,
        salary,
        commission,
        managerId,
        departmentId,
      } = req.body;
      const query = await sequelize.query(
        "Insert into EMPLOYEES (FIRST_NAME,LAST_NAME,EMAIL,PHONE_NUMBER,HIRE_DATE,JOB_ID,SALARY,COMMISSION_PCT,MANAGER_ID,DEPARTMENT_ID) values (:firstName, :lastName, :email, :phone, :hireDate, :jobId, :salary, :commission, :managerId, :departmentId)",
        {
          replacements: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            hireDate: hireDate,
            jobId: jobId,
            salary: salary,
            commission: commission,
            managerId: managerId,
            departmentId: departmentId,
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
      const { firstName } = req.body;
      await sequelize.query(
        "update employees set FIRST_NAME = :firstName where employee_id = :id",
        {
          replacements: { firstName: firstName, id: id },
        }
      );
      return res.send(`Success update employees id ${id}`);
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  deleted: async (req, res) => {
    try {
      const id = req.params.id;
      await sequelize.query("delete from employees where employee_id = :id", {
        replacements: { id: id },
        type: sequelize.QueryTypes.delete,
      });
      return res.send(`Success delete employees id ${id}`);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};

export default employeeController;
