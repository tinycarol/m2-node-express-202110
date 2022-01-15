const yellow = "\x1b[33m";
const blue = "\x1b[34m";
const magenta = "\x1b[35m";
const reset = "\x1b[0m";

module.exports.logBlue = (text) => {
  console.log(`${blue}%s${reset}`, text);
};

module.exports.logPink = (text) => {
  console.log(`${magenta}%s${reset}`, text);
};

module.exports.logYellow = (text) => {
  console.log(`${yellow}%s${reset}`, text);
};
