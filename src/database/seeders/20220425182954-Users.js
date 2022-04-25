'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
    {
      name: "admin",
      email: "admin@admin.com",
      password: "12345",
      role: "admin",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "user1",
      email: "user1@user1.com",
      password: "12345",
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
