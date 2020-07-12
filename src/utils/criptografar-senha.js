const crypto = require('crypto');

const criptografado = (param) => {
    return crypto
    .createHash("md5")
    .update(param)
    .digest("hex");
};
module.exports = criptografado;