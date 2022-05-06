export const server = () => {
    app.plugins.bs.init({
        server: {
            baseDir: app.path.src.base
        },
        notify: false,
        online: true,
        // tunnel: true, для временного опубликования сайта в интренете для заказчика
        open: true,
        cors: true,
        ui: false
    });

    // app.gulp.watch(app.path.src.html, html);
    // // app.gulp.watch(app.path.src.scss, css);
};
