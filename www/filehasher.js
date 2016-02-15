var argscheck = require('cordova/argscheck'),
  exec = require('cordova/exec');

var FileHasher = function () {}

FileHasher.prototype.hash = function (path, digestType, cb) {
  if (typeof digestType === 'function') {
    cb = digestType;
    digestType = 'MD5';
  }
  exec(function (hash) {
    return cb(null, hash);
  }, function (err) {
    return cb(new Error(err));
  }, 'FileHasher', 'hash', [path, digestType]);
};

module.exports = FileHasher;
