import gulpSass from 'gulp-sass';
import sass from 'sass';

const cScss = gulpSass(sass);

export const css = () => {
    return app.gulp.src(app.path.src.styleScss)
      .pipe(app.plugins.plumber())
      .pipe(app.plugins.gulpif(app.path.dev, app.plugins.sourcemaps.init()))
      .pipe(cScss().on('error', cScss.logError))
      .pipe(app.plugins.gulpif(!(app.path.dev), app.plugins.autoprefixer(({
        cascade: false
      }))))
      .pipe(app.plugins.gcmq())
      .pipe(app.plugins.gulpif(!(app.path.dev), app.plugins.cleanCss({
        2: {
          specialComments: 0,
        }
      })))
      .pipe(app.plugins.gulpif(!(app.path.dev), app.plugins.rename({suffix: '.min'})))
      .pipe(app.plugins.gulpif(app.path.dev, app.plugins.sourcemaps.write(".")))
      .pipe(app.gulp.dest(app.path.src.css))
      .pipe(app.plugins.bs.stream())
}
