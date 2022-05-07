import gulp from 'gulp';

// Конфигурация
import { path } from './config/path.js';
import { plugins } from './config/plugins.js';
// let dev = false;

//Задачи
import { clear } from './task/clear.js';
import { html } from './task/html.js';
import { css } from './task/css.js';
import { server } from './task/server.js';
import { images } from './task/image.js';
import { webp } from './task/webp.js';
import { copy } from './task/copy.js';
import { fonts } from './task/fonts.js';

// Глобальная переменная
global.app = {
    gulp: gulp,
    plugins: plugins,
    path: path
}

// Наблюдатель
const watcher = () => {
    gulp.watch(app.path.src.html).on("change", app.plugins.bs.reload);
    gulp.watch(app.path.src.scss, css);
}

const develop = (ready) => {
    app.path.dev = true;
    ready();
}


//Разовые задачи
export { clear };
export { images};
export { webp };
export { copy };
export { fonts };


export const base = gulp.parallel(css);
export const build = gulp.series(clear, html, base);
export default gulp.series(develop, base, gulp.parallel(watcher, server));
