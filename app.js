const request = require('request');
const cheerio = require('cheerio');

let url = 'https://www.perfectimprints.com/promos/PI-AVL-AD-WO/Custom-Laser-Cut-Wood-Ornaments.html';

request(url, (err, res, body) => {

  if (err) return console.error(err);

  const $ = cheerio.load(body);

  let name = $('.details_product_name>h1').text();
  let sku = $('.sku_value').text();
  let image = $('meta[property="og:image"]').attr('content');
  let title = $('meta[property="og:title"]').attr('content');
  let shortDesc = $('meta[name=description]').attr('content');
  let pricing = $('th').text().replace(/\t/g, '').replace(/\n/g, '').split(' ').filter(function (el) {
    return el != undefined;
  })

  if (!shortDesc) {
    shortDesc = 'Get custom {{ name }} from PerfectImprints.com.'
  }

  console.log(Array.from(pricing))
});