import gulp from 'gulp';
import babel from 'gulp-babel';
import rimraf from 'rimraf';

gulp.task('clean', () => rimraf('./dist', () => {}));

gulp.task('build', ['clean'], () =>
  gulp.src('./lib/**/*.js').pipe(babel()).pipe(gulp.dest('dist')),
);
