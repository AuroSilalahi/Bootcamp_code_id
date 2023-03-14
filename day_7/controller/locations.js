import { sequelize } from "../models/init-models.js";

const locationsController = {
  findAll: async (req, res) => {
    try {
      const query = await sequelize.query("select * from locations", {
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
        "SELECT * from locations where location_id = :id",
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
      const { address, postalCode, state, province, countryId } = req.body;
      const query = await sequelize.query(
        "Insert into LOCATIONS (STREET_ADDRESS,POSTAL_CODE,CITY,STATE_PROVINCE,COUNTRY_ID) values (:address, :code, :state, :province, :id)",
        {
          replacements: {
            address: address,
            code: postalCode,
            state: state,
            province: province,
            id: countryId,
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
      const { address } = req.body;
      await sequelize.query(
        "update locations set street_address = :address where location_id = :id",
        {
          replacements: { id: id, address: address },
        }
      );
      return res.send(`Success update location id ${id}`);
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  deleted: async (req, res) => {
    try {
      const id = req.params.id;
      await sequelize.query("delete from locations where location_id = :id", {
        replacements: { id: id },
        type: sequelize.QueryTypes.delete,
      });
      return res.send(`Success delete location id ${id}`);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};

export default locationsController;
