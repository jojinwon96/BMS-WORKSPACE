const Test = require('../models/testModel');

exports.getTest = async (req, res, next) => {
  try {
    const test = await Test.getAll();
    console.log(test);
    res.status(200).json(test);
  } catch (error) {
    console.error('에러 : ', error);
    res.status(500).json({message : 'getTest 실패'});
    next();
  }
};