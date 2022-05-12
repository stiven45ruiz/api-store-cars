'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
    {
      name: "Stiven Ruiz",
      email: "stiven45ruiz@gmail.com",
      password: "eyJhbGciOiJIUzI1NiJ9.c3RpdmVuNDU.mVrd_QwFxARP0DtWRplfNzoifH6WB78xDcH5X7bL4ZY",
      role: "admin",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Charles Lecler",
      email: "charleslecler@gmail.com",
      password: "eyJhbGciOiJIUzI1NiJ9.Y2hhcmxlc2xlY2xlcg.NKR8DWhMEJki_03V7apa-n6nrLsUrHh3g-f5MHmdUzc",
      role: "user",
      createdAt: new Date(),
      updatedAt: new Date(),
    },

  ], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
