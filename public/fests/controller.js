const {pool} = require('./../../db');



module.exports.FestController = {
  getAllFests: (req, res)=>{
    try {
      pool.query('select * from fests', (error, result)=>{
        if(error){
          console.log(error)
        }
        res.status(200).send({
          message: 'sirve jajja',
          body: result
        });
      });
    } catch (error) {
      console.error(error);
    }
  },
  newFest:(req, res)=>{
    try {
      let fecha = new Date();
      let y = fecha.getFullYear();
      let m = fecha.getMonth() + 1;
      let d = fecha.getDay();
      let h = fecha.getHours();
      let mi = fecha.getMinutes();
      let s = fecha.getSeconds();
      fecha = y + '-' + m + '-' + d + ' ' + h + ':' + mi + ':' + s;

      const fests = req.body;
      pool.query(`insert into fests (fullname, date, amountPeople, createdAt, updatedAt) values
      ('${fests.fullName}', '${fests.date}', '${fests.amountPeaple}', '${fecha}', '${fecha}')`,
      (error, result)=>{
        if(error){
          console.log(error);
        }
        res.status(200).send({
          message: 'sirve jajja',
          body: result
        });
      });
    } catch (error) {
      console.error(error);
    }
  }
}
