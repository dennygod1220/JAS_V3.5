module.exports = async (htmlcode,zone) => {
  var cheerio = require('cheerio');
  var $ = cheerio.load(htmlcode);var b = $('#Mobile-eyeball-0_320x100');
$(b).children().remove();
$(b).append(zone);return $.html();}