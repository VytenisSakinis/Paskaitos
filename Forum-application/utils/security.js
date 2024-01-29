const crypto = require('crypto');

// hash password

function hashPassword(password, salt)
{
    const hash = crypto.createHmac('sha256', 'salt');
    hash.update(password)
    return hash.digest('hex')
}


// salt extra string for password hashing
function generateSalt()
{
    return crypto.randomBytes(16).toString('hex');
}

function isValidCredentials(providedPassword, salt, hashPassword)
{
    return hashPassword(providedPassword, salt) === hashPassword;
}

module.exports = { hashPassword, generateSalt, isValidCredentials };