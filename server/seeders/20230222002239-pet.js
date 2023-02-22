'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pets', [
        {
          name: 'Tobi',
          birth_date:2002,
          health_issues:'N/A',
          comments:'Was happy to be here and no problems to report'
        },
        {
          name: 'Dood',
          birth_date:2009,
          health_issues:'Can Not See Out of Left Eye',
          comments:'N/A'
        },
        {
          name: 'Cache',
          birth_date:2021,
          health_issues:'Came in for a Case of Kennel Cough',
          comments:'Had to keep separated from other pets to prevent spread of Kennel Cough'
        },
        {
          name: 'Lucky',
          birth_date:2022,
          health_issues:'N/A',
          comments:'Regular Check-Up'
        },
        {
          name: 'Lucy',
          birth_date:2021,
          health_issues:'N/A',
          comments:'Regular Check-Up'
        }
    
    ])
  },

//Use sequelize db:seed:all to migrate data into Supabase Table

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('pets', null, {})
  }
};
