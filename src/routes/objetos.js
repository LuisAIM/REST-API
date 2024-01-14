const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const obj = require('../sample.json');


router.get('/', (req, res) => {
    res.json(obj);
});

router.post('/', (req, res) => {
    const { Objeto, Caracteristica } = req.body;

    if(Objeto && Caracteristica){
        const id = obj.length + 1;
        const newObj = {...req.body, id};
        console.log(newObj);
        obj.push(newObj);
        res.json(obj);
    } else{
        res.send({error: 'No pues no llego tu'});
    }
   
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const {Objeto, Caracteristica} = req.body;
    if(Objeto && Caracteristica){
        _.each(obj, (obj, i) => {
            if(obj.id == id){                
                obj.objeto = Objeto;
                obj.Caracteristica = Caracteristica;
            }
        });
        res.json(obj);
    }else{
        res.status(500).json({error: 'Ya chafio el put'});
    }
})
router.delete('/:id', (req, res) => {
    const { id } = req.params;

   
    const indexToDelete = obj.findIndex(objeto => objeto.id == id);

    if (indexToDelete !== -1) {
        
        const deletedObj = obj.splice(indexToDelete, 1)[0];
        console.log(deletedObj); 
        res.json(obj); 
    } else {
    
        res.status(404).json({ error: 'Objeto no encontrado' });
    }
});

module.exports = router;