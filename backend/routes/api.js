var express = require('express');
var router = express.Router();
var novedadesModel = require('./../models/novedadesModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');


router.get('/novedades', async function (req, res, next) {
    var novedades = await novedadesModel.getNovedades();

    novedades = novedades.map(novedades => {
        if (novedades.img_id) {
            const imagen = cloudinary.url(novedades.img_id, {
                width: 960,
                height: 500,
                crop: 'fill'
            });
            return {
                ...novedades,
                imagen
            }
        } else {
            return {
                ...novedades,
                imagen: ''
            }
        }
    });
    res.json(novedades);
});

router.post('/contacto', async (req, res) => {
    const mail = {
        to: 'allendesmunozf@gmail.com',
        subject: 'Contacto Web',
        html: `${req.body.nombre} se contacto a traves del sitio web y quiere mayor información a este correo: ${req.body.email} <br> Ademas realizo el siguiente comentario: ${req.body.mensaje} <br> Sutelefono es el siguiente: ${req.body.telefono}`
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    })
    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: 'Mensaje Enviado'
    });
});


module.exports = router;