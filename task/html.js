export const html = () => {
    return app.gulp.src(app.path.src.html)
    .pipe(app.plugins.gulpif(!(app.path.dev), app.plugins.htmlMin({
        removeComments: true,
        collapseWhitespace: true
    })))
    .pause(app.plugins.plumber())
    .pipe(app.gulp.dest(app.path.dist.html))
    .pipe(app.plugins.bs.stream())
}
