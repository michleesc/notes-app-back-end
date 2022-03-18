const ClientError = require('./ClientError');

class NofFoundError extends ClientError {
    constructor(message) {
        super(message, 404);
        this.name = 'NotFoundError';
    }
}

module.exports = ClientError;