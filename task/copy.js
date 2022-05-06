export const copy = () => {
    return app.plugins.gulp.src([
        'src/fonts/**/*.{woff,woff2}',
        'src/img/**',
        'src/js/**',
        'src//*.ico'
        ], {
          base: 'src'
        })
    .pipe(app.plugins.gulp.dest(app.path.dist.base))
}
