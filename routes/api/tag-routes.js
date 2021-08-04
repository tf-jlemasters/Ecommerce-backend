const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

//GET route

router.get('/', async (req, res) => {
    try{
        const tagData = await Tag.findAll({
            include: [{model: Product, through: ProductTag, as:'products_with_tag'}]
        });
        res.status(200).json(tagData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const tagData = await Tag.findByPk(req.params.id,{
            include: [{model: Product, through: ProductTag, as:'products_with_tag'}]
        });
        res.status(200).json(tagData);
    } catch (err) {
        res.status(500).json(err);
    }
});
//POST route

router.post('/', async(req, res) => {
    try{
        const tagData = await Tag.create({
            tag_name: req.body.tag_name
        });
        res.status(200).json(tagData);
    } catch (err){
        res.status(400).json(err);
    }
});

//PUT route

router.put('/:id', async (req, res) => {
    try {
        const tagData = await Tag.update(
            {
                tag_name: req.body.tag_name
            },
            {
                where: {
                    id: req.params.id
                }
            }
        );
        if (!tagData) {
            res.status(404).json({ message: 'No tag found with this id!!!'});
            return;
        }
        res.status(200).json(tagData);
    } catch (err) {
        res.status(500).json(err);
    }
});
//DELETE route

router.delete('/:id', async (req, res) => {
    try{
        const tagData = await Tag.destroy({
            where: {
                id: req.params.id,
            },
        });
        if ( !tagData) {
            res.status(404).json({message: 'No tag found with this id!!!'});
            return;
        }
        res.status(200).json(tagData);
    } catch (err) {
    res.status(500).json(err);
    }
});

module.exports = router;