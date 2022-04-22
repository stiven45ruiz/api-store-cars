'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
     {
      id:'15',
      image: 'https://2.bp.blogspot.com/-TV7z2_kYwSM/UeBlAcN-9eI/AAAAAAAAK-Q/FWShcJyRlig/s1600/037.jpg',
      title: 'Honda NSX',
      price: 80000,
      description: 'bla bla bla bla bla',
      typeCar: 'jdm',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:'14',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/aa238a91974539.5e3fd3aecb220.jpg',
      title: 'Mazda Rx-7',
      price: 80000,
      description: 'bla bla bla bla bla',
      typeCar: 'jdm',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:'13',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/cadde3120056831.60aa77dc82614.jpg',
      title: 'Toyota Supra MK5',
      price: 80000,
      description: 'bla bla bla bla bla',
      typeCar: 'jdm',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:'12',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/2dfc31131885615.619e0bb7e3720.jpg',
      title: 'lancer Evolution X',
      price: 80000,
      description: 'bla bla bla bla bla',
      typeCar: 'jdm',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:'11',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/f5eee5131091359.618d98f27cb5e.jpg',
      title: 'Subaru Impreza WRX STI',
      price: 80000,
      description: 'bla bla bla bla bla',
      typeCar: 'jdm',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:'10',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/8ecb91109180607.5fce4e7241fad.jpg',
      title: 'Honda S2000',
      price: 80000,
      description: 'bla bla bla bla bla',
      typeCar: 'jdm',
      createdAt: new Date(),
      updatedAt: new Date(),
    },


    {
      id: '1',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/ba8a2667628875.5b405a41459c9.jpg',
      title: 'BMW E30 M3',
      price: 80000,
      description: 'bla bla bla bla bla',
      typeCar: 'euro',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '2',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a812d335089243.56e93cf695aae.jpg',
      title: 'Ferrari F40',
      price: 80000,
      description: 'bla bla bla bla bla',
      typeCar: 'euro',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '3',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/08273e136319667.61f7d31f2d708.png',
      title: 'Lamborghini Countach',
      price: 80000,
      description: 'bla bla bla bla bla',
      typeCar: 'euro',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '4',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/3d31f6130404033.617fc1ee56a2d.jpg',
      title: 'Mercedes AMG GT-R',
      price: 80000,
      description: 'bla bla bla bla bla',
      typeCar: 'euro',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '5',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/202be3105932211.5f8486ff13845.jpeg',
      title: 'Porche 911 GT3 RS',
      price: 80000,
      description: 'bla bla bla bla bla',
      typeCar: 'euro',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '6',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/38b6cf69249587.5b7d08586ed63.jpg',
      title: 'Audi R8 V10 Plus',
      price: 80000,
      description: 'bla bla bla bla bla',
      typeCar: 'euro',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    ], {});
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
