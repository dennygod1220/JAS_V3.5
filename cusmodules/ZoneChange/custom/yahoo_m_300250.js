module.exports = async (htmlcode,zone) => {
  var cheerio = require('cheerio');
  var $ = cheerio.load(htmlcode);var b = $("#rawad-gemini-wrapper");
$(b).children().remove();
$(b).append(zone);return $.html();}