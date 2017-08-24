import gulp from 'gulp';
import babel from 'gulp-babel';

gulp.task('default', () =>
  gulp.src('./lib/**/*.js').pipe(babel()).pipe(gulp.dest('dist')),
);
