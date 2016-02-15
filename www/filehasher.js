function FileHasher() {}

FileHasher.prototype.hash = function (path, digestType, cb) {
  debugger;
  if (typeof digestType === 'function') {
    cb = digestType;
    digestType = 'MD5';
  }
  cordova.exec(function (hash) {
    return cb(null, hash);
  }, function (err) {
    return cb(new Error(err));
  }, 'FileHasher', 'hash', [path, digestType]);
};

module.exports = new FileHasher();
