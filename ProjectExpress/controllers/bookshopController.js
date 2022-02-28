const Bookshop = require('../models/Bookshop')

//Metodo post-para guardar y crear
//Utilizaremos funciones 
exports.createBookshop = async(req, res) => {
    //console.log('Creando el producto desde el controlador');
    console.log(req.body);
    try {
        let data_bookshop;
        data_bookshop =  new  Bookshop(req.body);
        //Guardar la informacion y registrela
        await data_bookshop.save();
        //Enviar un message y mostrar la info
        res.send(data_bookshop)

    } catch (error) {
        console.log(error);
        res.status(500).send('Oh no.. comuniquese con soporte para resolver el problema de su busqueda')

    }
}

//Metodo get-consultar
exports.consultBookshop = async(req, res) => {
    try {
        //modelo valida y consulta la nfo
        const data_bookshop = await Bookshop.find();
        res.json(data_bookshop);
    } catch (error) {
        console.log(error);
        res.status(500).send('Oh no.. comuniquese con soporte para resolver el problema de su busqueda')

    }
}

//metodo get-bandera
exports.consultsBookshop = async(req, res) => {
    try {
        //Buscara el id por el metodo bandera :id
        const data_bookshop =  await Bookshop.findById(req.params.id);
        //! significa que es false
        if (!data_bookshop) {
            res.status(404).json({message: 'No se encontro el libro requerido'})

        }
        res.json(data_bookshop);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Oh no.. comuniquese con soporte para resolver el problema de su busqueda')
        
    }
}
//Metodo put actualizar o editar
exports.updateBookshop = async(req, res) => {
    try {
        const { nombre_libro, categoria, autor, descripcion, cantidad_unidad, precio } = req.body
        let data_bookshop = await Bookshop.findById(req.params.id);
    //! significa que es falso
        if (!data_bookshop) {
            res.status(404).json({ message: 'No se encontró coincidencias para la actualización de datos del libro que quiere modificar' })
        }

        data_bookshop.nombre_libro = nombre_libro;
        data_bookshop.categoria = categoria;
        data_bookshop.autor = autor;
        data_bookshop.descripcion= descripcion;
        data_bookshop.cantidad_unidad = cantidad_unidad;
        data_bookshop.precio = precio;

        data_bookshop = await Bookshop.findOneAndUpdate({ _id: req.params.id }, data_bookshop, { new: true })
        res.json(data_bookshop);

    } catch (error) {
        console.log(error);
        res.status(500).send('Oh no.. comuniquese con soporte para resolver el problema de su busqueda')
    }
}

//METODO DELETE
exports.deleteBookshop = async(req, res) => {
    try {
        const data_bookshop = await Bookshop.findById(req.params.id);
        //dato false
        if (!data_bookshop) {
            res.status(404).json({ message: 'No se encontró coincidencias para eliminar el libro que quiere' })
        }
        await Bookshop.findByIdAndRemove({ _id: req.params.id });
        res.json({ message: 'Libro eliminado exitosamente' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Oh no.. comuniquese con soporte para resolver el problema de su busqueda')
    }
}