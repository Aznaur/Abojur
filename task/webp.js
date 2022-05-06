export const webp = () => {
    return app.gulp.src(app.path.src.webp)
    .pipe(app.plugins.newer(app.path.src.base + 'img'))
    .pipe(app.plugins.webp({qualiti: 90}))
    .pipe(app.gulp.dest('src/img'))
}
