var socket = io();
socket.on('disconnect', function () {
    console.log('Conexión perdida con el servidor');
});
//escuchar  on
socket.on('connect', function () {
    console.log('conectado al servidor')
});
//Emitir evento hacia el servidor
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Holi'
    //retroalimentación de evento
    //se dispara cunado el que recibe ejecuta el callback
}, function (mensaje) {
    console.log(mensaje)
});
//escuchar informacion
socket.on('enviarMensaje', function (mensaje) {
    console.log(mensaje);
} );
