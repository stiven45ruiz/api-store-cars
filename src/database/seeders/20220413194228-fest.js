'use strict';

module.exports = {
  async up (queryInterface) {
     await queryInterface.bulkInsert('fests', [{
      fullName: 'Casimiro turaja',
      date: 'dia de la independencia',
      amountPeople: 'mildocientas',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      fullName: 'Rosa Melano',
      date: '5 de mayo',
      amountPeople: 'mildocientas',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
    ], {});
  },

  async down () {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
