# gulp-elevator
Converts svg to elevator project

const gulp = require('gulp');
const rename = require('gulp-rename');
const gulpElevator = require('gulp-elevator');

gulp.task('converter', () => {
  return gulp.src('./control/static/imgOfProject/somename.svg')
    .pipe(gulpElevator())
    .pipe(rename("another_name.svg"))
    .pipe(gulp.dest('./control/imgOfProject'));
});
