import woff from 'gulp-ttf2woff';
import woff2 from 'gulp-ttf2woff2'

export const fonts = () => {
    return app.plugins.gulp.src(app.path.src.assets[0])
    .pipe(woff())
    .pipe(app.plugins.gulp.dest(app.path.dist.fonts))
    .pipe(app.plugins.gulp.src(app.path.src.assets[0]))
    .pipe(woff2())
    .pipe(app.plugins.gulp.dest(app.path.dist.fonts))
}
