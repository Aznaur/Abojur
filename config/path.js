
export const path =  {
    src: {
        base: 'src/',
        html: 'src/*.html',
        css: 'src/css/',
        scss: 'src/scss/**/*.scss',
        styleScss: 'src/scss/style.scss',
        js: 'src/js/index.js',
        img: 'src/img/**/*.{jpg,png,jpeg,webp,svg}',
        webp: 'src/img/**/*.{jpg,png,jpeg,webp}',
        assets: ['src/fonts/**/*.ttf', 'src/icons/**/*.*']
    },

    dist: {
        base: 'build/',
        html: 'build/',
        css: 'build/css/',
        js: 'build/js/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },

    watch: {
        base: 'src/',
        html: 'src/*.html',
        scss: '/scss/**/*.*',
        js: 'src/js/**/*.js',
        img: 'src/img/**/*.{jpg,png,jpeg,svg}',
    },

    dev: false
}
