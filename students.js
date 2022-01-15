const students = require("./data/students.json");

module.exports.randomStudent = () => {
  return students[Math.floor(Math.random() * students.length)];
};
