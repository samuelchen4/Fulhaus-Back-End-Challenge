const Acronym = require('../models/acronymModel');

const getAcronyms = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 1;
    const skipAmount = (page - 1) * limit;

    const search = req.query.search
      ? { acronym: { $regex: req.query.search, $options: 'i' } }
      : {};

    const docAmount = await Acronym.countDocuments({ ...search });
    const acronyms = await Acronym.find({ ...search })
      .skip(skipAmount)
      .limit(limit);

    const pages = Math.ceil(docAmount / limit);

    res.setHeader('Current-Page-Position', `${page}/${pages}`);
    res.setHeader('More-Results-Avaliable', page < pages ? true : false);
    res.status(200).json({ acronyms, page, pages });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const insertAcronym = async (req, res) => {
  try {
    const { acronym, definition } = req.body;

    await Acronym.create({ acronym, definition });
    res.status(200).json({
      message: `A new acronym, ${acronym} with the definition,${definition} was added to the db`,
      acronym,
      definition,
    });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const updateAcronym = async (req, res) => {
  try {
    const _id = req.params.acronymID;
    const acronym = req.body.acronym;
    const acronymDoc = await Acronym.findById(_id);

    acronymDoc.acronym = acronym;
    await acronymDoc.save();

    res.status(200).json({
      message: `The acronym with _id: ${_id} has been changed to ${acronym}`,
      acronym,
      _id,
    });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const deleteAcronym = async (req, res) => {
  try {
    const _id = req.params.acronymID;
    await Acronym.deleteOne({ _id });
    res.status(200).json({
      message: `The acronym document with an id of: ${_id} was deleted`,
      _id,
    });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = { getAcronyms, insertAcronym, updateAcronym, deleteAcronym };
