const through = require('through2');
const gutil = require('gulp-util');
const PluginError = gutil.PluginError;
const regular=require('./lib/regular');
const expressions=regular.regular;
const fs = require('fs');


function converter() {
  console.log('меня экспортировали')
  var stream = through.obj(function(file, enc, cb) {
    let code;
    if (file.isStream()) {
      //this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
      return cb();
    }
    
    if (file.isBuffer()) {
      //file.contents = Buffer.concat([prefixText, file.contents]);
      
      code = file.contents.toString();
      
      // console.log(file.contents);
        for(let i in expressions){ 
          console.log(i); 
            code = code.replace(expressions[i].re, expressions[i].change);
        }
        file.contents = new Buffer(code);
    }
    
    cb(null,file);
  });
  console.log('меня экспортировали3')
  return stream;
}

module.exports = converter;