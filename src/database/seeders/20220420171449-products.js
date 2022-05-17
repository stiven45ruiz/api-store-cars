'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products',
      [
        {
          "id": 1,
          "image": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/ba8a2667628875.5b405a41459c9.jpg",
          "title": "BMW E30 M3",
          "price": 57000,
          "description": "El BMW M3(E30) tiene 4 plazas y 2 puertas y es de tracción trasera. De este precioso Coupe, remarcar que tiene un motor 2.3(200 Cv) de gasolina con una cilindrada real de 2302 c.c.(140.48 c.i.) y una potencia de 200(cv) caballos a 6750 rpm.",
          "typeCar": "euro",
          "createdAt": "2022-04-22T22:22:32.000Z",
          "updatedAt": "2022-04-27T14:10:22.000Z"
        },
        {
          "id": 2,
          "image": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a812d335089243.56e93cf695aae.jpg",
          "title": "Ferrari F40",
          "price": 5000000,
          "description": "La esencia del Ferrari F40 es un motor V8 de 2.936 cm3 con turbo, gracias a el cual alcanzaba nada más y nada menos que 478 CV de potencia, gracias a el cual alcanzaba 324 km/h de velocidad punta. ",
          "typeCar": "euro",
          "createdAt": "2022-04-22T22:22:32.000Z",
          "updatedAt": "2022-04-27T14:10:22.000Z"
        },
        {
          "id": 3,
          "image": "https://mir-s3-cdn-cf.behance.net/project_modules/fs/08273e136319667.61f7d31f2d708.png",
          "title": "Lamborghini Countach",
          "price": 2500000,
          "description": "El Lamborghini Countach, es un automóvil deportivo coupé producido por el fabricante italiano Lamborghini desde 1974 hasta 1990, con carrocería hecha de aluminio y fibra de vidrio, tracción trasera y un motor V12 de gasolina,",
          "typeCar": "euro",
          "createdAt": "2022-04-22T22:22:32.000Z",
          "updatedAt": "2022-04-27T14:10:22.000Z"
        },
        {
          "id": 4,
          "image": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/3d31f6130404033.617fc1ee56a2d.jpg",
          "title": "Mercedes AMG GT-R",
          "price": 120000,
          "description": "Con una potencia máxima de 585 CV (577 HP; 430 kW) a las 6250 rpm y un par máxima de 700 N·m (516 lb·pie) a las 5500 rpm, con lo que es capaz de alcanzar una velocidad máxima de 318 km/h (198 mph) y acelerar de 0 a 100 km/h (62 mph) en 3,6 segundos.\n",
          "typeCar": "euro",
          "createdAt": "2022-04-22T22:22:32.000Z",
          "updatedAt": "2022-04-27T14:10:22.000Z"
        },
        {
          "id": 5,
          "image": "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/202be3105932211.5f8486ff13845.jpeg",
          "title": "Porche 911 GT3 RS",
          "price": 125000,
          "description": "El Porsche 911 GT3 RS tiene un motor gasolina de 3996cc con 6 cilindros situados boxer que alcanza una potencia máxima de 521CV a 8250rpm y par máximo de 470Nm a 6000rpm con nutrición inyección directa.",
          "typeCar": "euro",
          "createdAt": "2022-04-22T22:22:32.000Z",
          "updatedAt": "2022-04-27T14:10:22.000Z"
        },
        {
          "id": 6,
          "image": "https://mir-s3-cdn-cf.behance.net/project_modules/fs/38b6cf69249587.5b7d08586ed63.jpg",
          "title": "Audi R8 V10 Plus",
          "price": 152000,
          "description": "El Audi R8 se comercializa con un único propulsor, un V10 atmosférico de 5,2 litros, con lubricación por cárter seco e inyección directa. Se ofrece en dos niveles de potencia, 570 CV y 620 CV",
          "typeCar": "euro",
          "createdAt": "2022-04-22T22:22:32.000Z",
          "updatedAt": "2022-04-27T14:10:22.000Z"
        },
        {
          "id": 10,
          "image": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/8ecb91109180607.5fce4e7241fad.jpg",
          "title": "Honda S2000",
          "price": 80000,
          "description": "bla bla bla bla bla",
          "typeCar": "jdm",
          "createdAt": "2022-04-22T22:22:32.000Z",
          "updatedAt": "2022-04-22T22:22:32.000Z"
        },
        {
          "id": 11,
          "image": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/f5eee5131091359.618d98f27cb5e.jpg",
          "title": "Subaru Impreza WRX STI",
          "price": 80000,
          "description": "bla bla bla bla bla",
          "typeCar": "jdm",
          "createdAt": "2022-04-22T22:22:32.000Z",
          "updatedAt": "2022-04-22T22:22:32.000Z"
        },
        {
          "id": 12,
          "image": "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/2dfc31131885615.619e0bb7e3720.jpg",
          "title": "lancer Evolution X",
          "price": 80000,
          "description": "bla bla bla bla bla",
          "typeCar": "jdm",
          "createdAt": "2022-04-22T22:22:32.000Z",
          "updatedAt": "2022-04-22T22:22:32.000Z"
        },
        {
          "id": 13,
          "image": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/cadde3120056831.60aa77dc82614.jpg",
          "title": "Toyota Supra MK5",
          "price": 80000,
          "description": "bla bla bla bla bla",
          "typeCar": "jdm",
          "createdAt": "2022-04-22T22:22:32.000Z",
          "updatedAt": "2022-04-22T22:22:32.000Z"
        },
        {
          "id": 14,
          "image": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/aa238a91974539.5e3fd3aecb220.jpg",
          "title": "Mazda Rx-7",
          "price": 135000,
          "description": "Presentado en 1992, el Mazda RX-7 turbo es un deportivo de raza que enamoraba por su dinamismo. Ligero, ágil, con un motor rabioso, un sonido que ponía los pelos de punta y 240 CV, el Mazda RX-7 era uno de los deportivos más exóticos del mercado.",
          "typeCar": "jdm",
          "createdAt": "2022-04-22T22:22:32.000Z",
          "updatedAt": "2022-05-10T14:03:33.000Z"
        },
        {
          "id": 15,
          "image": "https://2.bp.blogspot.com/-TV7z2_kYwSM/UeBlAcN-9eI/AAAAAAAAK-Q/FWShcJyRlig/s1600/037.jpg",
          "title": "Honda NSX",
          "price": 350000,
          "description": "El Honda NSX, comercializado en América del Norte como el Acura NSX, es un automóvil deportivo coupé de dos asientos con motor central fabricado por Honda.",
          "typeCar": "jdm",
          "createdAt": "2022-04-22T22:22:32.000Z",
          "updatedAt": "2022-04-27T14:10:22.000Z"
        },
        {
          "id": 35,
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Nissan_GT-R_MY2017_%281%29_%28cropped%29.jpg/1024px-Nissan_GT-R_MY2017_%281%29_%28cropped%29.jpg",
          "title": "Nissan GT-R 35",
          "price": 75000,
          "description": "El Nissan GT-R (japonés: 日産・GT-R, Nissan GT-R), es un automóvil deportivo de alto rendimiento y gran turismo producido por Nissan presentado en 2007. Es el sucesor del Skyline GT-R, una variante de alto rendimiento del Nissan Skyline.",
          "typeCar": "jdm",
          "createdAt": "2022-04-22T17:56:38.000Z",
          "updatedAt": "2022-04-22T17:56:38.000Z"
        },
        {
          "id": 86,
          "image": "https://wallpaperaccess.com/full/2326149.jpg",
          "title": "Toyota ae86",
          "price": 45000,
          "description": "La serie AE86 del Toyota Corolla Levin y Toyota Sprinter Trueno son modelos pequeños, de motor delantero / tracción trasera dentro de la gama Corolla (E80) de quinta generación con motor delantero / tracción delantera.",
          "typeCar": "jdm",
          "createdAt": "2022-04-22T18:28:41.000Z",
          "updatedAt": "2022-04-22T18:28:41.000Z"
        },
        {
          "id": 350,
          "image": "https://wallpapercave.com/wp/wrydcHP.jpg",
          "title": "Nissan 350z",
          "price": 60000,
          "description": "El Nissan 350Z, también llamado Nissan Fairlady Z (Z33) en algunos países, es un automóvil deportivo de 2 puertas biplaza con motor central-delantero montado longitudinalmente de tracción trasera",
          "typeCar": "jdm",
          "createdAt": "2022-04-22T17:23:52.000Z",
          "updatedAt": "2022-04-22T17:23:52.000Z"
        },
        {
          "id": 436,
          "image": "https://www.supercars.net/blog/wp-content/uploads/2020/10/2020-Aston-Martin-Vantage-AMR-001-2160-scaled.jpg",
          "title": "Aston Martin Vantage",
          "price": 85000,
          "description": "El Aston Martin Vantage es un automóvil deportivo biplaza fabricado por el fabricante británico de automóviles de lujo Aston Martin como sucesor del modelo saliente anterior que había estado en producción durante 12 años.",
          "typeCar": "euro",
          "createdAt": "2022-04-22T17:42:40.000Z",
          "updatedAt": "2022-04-22T17:42:40.000Z"
        }
      ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
