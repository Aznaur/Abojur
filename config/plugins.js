import gulp from 'gulp';
import bs from 'browser-sync';
import gulpif from 'gulp-if';
import htmlMin from 'gulp-htmlmin';
import plumber from 'gulp-plumber';
import gcmq from 'gulp-group-css-media-queries';
import { stream as critical } from 'critical';
import cleanCss from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';
import del from 'del';
import webp from 'gulp-webp';
import newer from 'gulp-newer';

export const plugins = {
    gulp: gulp,
    bs: bs,
    gulpif: gulpif,
    htmlMin: htmlMin,
    plumber: plumber,
    gcmq: gcmq,
    cleanCss: cleanCss,
    autoprefixer: autoprefixer,
    sourcemaps: sourcemaps,
    rename: rename,
    del: del,
    webp: webp,
    newer: newer
}
