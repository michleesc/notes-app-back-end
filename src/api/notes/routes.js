const routes = (handler) => [
    {
        method: 'POST',
        path: '/notes',
        handler: handler.postNoteHandler, // hanya menerima dan menyimpan "satu" note.
        options: {
            auth: 'notesapp_jwt',
        },
    },
    {
        method: 'GET',
        path: '/notes',
        handler: handler.getNotesHandler, // mengembalikan "banyak" data.
        options: {
            auth: 'notesapp_jwt',
        },
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: handler.getNoteByIdHandler, // mengembalikan "satu" note.
        options: {
            auth: 'notesapp_jwt',
        },
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: handler.putNoteByIdHandler, // hanya menerima dan mengubah "satu" note.
        options: {
            auth: 'notesapp_jwt',
        },
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: handler.deleteNoteByIdHandler, // hanya menerima dan menghapus "satu" note.
        options: {
            auth: 'notesapp_jwt',
        },
    },
];

module.exports = routes;