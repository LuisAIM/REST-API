const { Router } = require('express');
const router = Router();


router.get('/test', (req, res) => {
   const data = {
       "Name": "Luis",
       "Apellido": "Meza",
       "Edad": "22" 
   };
   res.json(data);
})


module.exports = router;
