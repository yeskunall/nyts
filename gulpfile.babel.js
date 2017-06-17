import gulp from 'gulp';
import babel from 'gulp-babel';

gulp.task('default', () =>
  gulp.src('./lib/nyts.js')
    .pipe(babel({
      presets: ['env'],
    }))
    .pipe(gulp.dest('dist')),
);
