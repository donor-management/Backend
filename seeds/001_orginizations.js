const faker = require('faker');
const bcrypt = require('bcryptjs')

const hash = bcrypt.hashSync('pass123', 12)

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('organizations').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('organizations').insert([
        {"username": "YaleAlumni2018", "password": hash, "email":"YaleAlumni@yale.edu", "org_name": "Yale Alumni Association" },
        {"username": "peta2018", "password": hash, "email":"petaFundraising@peta.com", "org_name": "P.E.T.A" },
        {"username": "whaleFunds", "password": hash, "email":"saveTheWhalte@whale.com", "org_name": "Save The Whales" },
      ]);
    });
};
