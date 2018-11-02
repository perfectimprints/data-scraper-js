const request = require('request');

let url =
  "https://www.perfectimprints.com/promos/PI-AVL-AD-WO/Custom-Laser-Cut-Wood-Ornaments.html?trackcode=googleBase&keyword_session_id=vt~adwords%7ckt~%7cmt~%7cta~284645420109&_vsrefdom=wordstream";

request(url, { json: false }, (err, res, body) => {
  if (err) return console.error(err);

  

});