var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

/* GET Listar Novedades. */
router.get('/', async function (req, res, next) {
    var novedades = await novedadesModel.getNovedades();
    novedades = novedades.map(novedad => {
        if (novedad.img_id) {
            const imagen = cloudinary.image(novedad.img_id, {
                width: 100,
                height: 100,
                crop: 'fill'
            });
            return {
                ...novedad,
                imagen
            }
        } else {
            return {
                ...novedad,
                imagen: ''
            }
        }
    });
    res.render('admin/novedades', {     //novedades.hbs
        layout: 'admin/layout',         //layout.hbs
        persona: req.session.nombre,
        novedades
    });
});

/* GET Mostrar Formulario. */
router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {     //agregar.hbs
        layout: 'admin/layout',         //layout.hbs
    });
});


/* Agregar Novedades. */
router.post('/agregar', async (req, res, next) => {
    try {
        var img_id = '';
        if (req.files && Object.keys(req.files).length > 0) {
            imagen = req.files.imagen;
            img_id = (await uploader(imagen.tempFilePath)).public_id;
        }

        if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
            await novedadesModel.insertNovedad({
                ...req.body,
                img_id
            });
            res.redirect('/admin/novedades')
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true, message: 'Todos los campos son requeridos'
            })
        }
    } catch (error) {
        console.log(error)
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true, message: 'No se cargo la Novedad'
        })
    }
});

/* Eliminar Novedades*/
router.get('/eliminar/:id', async (req, res, next) => {
    var id = req.params.id;

    let novedad = await novedadesModel.getNovedadesById(id);
    if (novedad.img_id) {
        await (destroy(novedad.img_id))
    }
    await novedadesModel.deleteNovedadById(id);
    res.redirect('/admin/novedades');
});

/*Formulario de novedades para modificar Datos*/
router.get('/modificar/:id', async (req, res, next) => {
    var id = req.params.id;
    var novedad = await novedadesModel.getNovedadesById(id);

    res.render('admin/modificar', {
        layout: 'admin/layout',
        novedad
    });
});

/*Modificación de Novedades*/
router.post('/modificar', async (req, res, next) => {
    try {
        let img_id = req.body.img_original;
        let borrar_img_vieja = false;

        if (req.body.img_delete === "1") {
            img_id = null;
            borrar_img_vieja = true;
        } else {
            if (req.files && Object.keys(req.files).length > 0) {
                const imagen = req.files.imagen;
                img_id = (await uploader(imagen.tempFilePath)).public_id;
                console.log(img_id);
                borrar_img_vieja = true;
            }
        }

        if (borrar_img_vieja && req.body.img_original) {
            await (destroy(req.body.img_original));
        }

        var obj = {
            titulo: req.body.titulo,
            subtitulo: req.body.subtitulo,
            cuerpo: req.body.cuerpo,
            img_id
        }
        await novedadesModel.modificarNovedadesById(obj, req.body.id);
        res.redirect('/admin/novedades');
    } catch (error) {
        console.error(error)
        res.render('admin/modificar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se modifico la Novedad'
        })
    }
});


module.exports = router;