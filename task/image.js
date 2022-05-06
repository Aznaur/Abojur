import imagemin from 'gulp-imagemin';

export const images = () => {
    return app.gulp.src(app.path.src.img)
    .pipe(app.plugins.newer(app.path.src.img))
    .pipe(imagemin([
        imagemin.mozjpeg({quality: 75, progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ]))
    .pipe(app.gulp.dest(app.path.src.base + 'img'))
}
