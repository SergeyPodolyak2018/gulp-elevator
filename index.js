const through = require('through2');
const gutil = require('gulp-util');
const regular=require('./lib/regular');
const expressions=regular.regular;



function converter() {
  
  var stream = through.obj(function(file, enc, cb) {
    let code;
    if (file.isStream()) {
      return cb();
    }
    
    if (file.isBuffer()) {
      code = file.contents.toString();
      for(let i in expressions){
        code = code.replace(expressions[i].re, expressions[i].change);
      }
      file.contents = new Buffer(code);
    }
    cb(null,file);
  });
  return stream;
}
module.exports = converter;