const {io} = require('../server');
io.on('connection', (client) => {
    console.log('usuario conectado');
    //Emitir informacion hacia el cliente
    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Orale wey'
    });
    //detectar la desconexion de un usuario
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        //emitir mensaje hacia todos los usuarios
        client.broadcast.emit('enviarMensaje', data);
        // if (data.usuario){
        //     //ejecutar funcion que envio el cliente
        //     callback({
        //         message: 'Todo salio bien'
        //     });
        // }else{
        //     callback({
        //         message: 'Todo salio mal!!!!!!!!!'
        //     });
        // }

    });
});