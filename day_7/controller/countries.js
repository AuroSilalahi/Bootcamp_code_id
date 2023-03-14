const countriesController = {
    findAll: async (req, res) => {
      try {
        const country = await req.context.models.countries.findAll({});
        return res.send(country);
      } catch (error) {
        return res.status(400).send(error);
      }
    },
  
    findOne: async (req, res) => {
      try {
        const country = await req.context.models.countries.findOne({
          where: { country_id: req.params.id },
        });
        return res.send(country);
      } catch (error) {
        return res.status(400).send(error);
      }
    },
  
    create: async (req, res) => {
      try {
        const country = await req.context.models.countries.create({
          country_name: req.body.country_name,
        });
        return res.send(country);
      } catch (error) {
        return res.status(400).send(error);
      }
    },
  
    update: async (req, res) => {
      try {
        const country = await req.context.models.countries.update(
          {
            country_name: req.body.country_name,
          },
          { returning: true, where: { country_id: req.params.id } }
        );
        return res.send(country);
      } catch (error) {
        return res.status(400).send(error);
      }
    },
  
    deleted: async (req, res) => {
      try {
        const country = await req.context.models.countries.destroy({
          where: { country_id: req.params.id },
        });
        return res.send(`delete ${country} rows`);
      } catch (error) {
        return res.status(400).send(error);
      }
    },
  };
  
  export default countriesController;
  