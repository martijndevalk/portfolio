var gulp                = require('gulp'),
    babel               = require('gulp-babel'),
    fileinclude         = require('gulp-file-include'),
    htmlmin             = require('gulp-html-minifier'),
    runSequence         = require('run-sequence'),
    browserify          = require('browserify'),
    source              = require('vinyl-source-stream'),
    buffer              = require('vinyl-buffer'),
    rename              = require('gulp-rename'),
    uglify              = require('gulp-uglify'),
    sourcemaps          = require('gulp-sourcemaps'),
    del                 = require('del'),
    environments        = require('gulp-environments'),
    sass                = require('gulp-sass'),
    cleanCSS            = require('gulp-clean-css'),
    autoprefixer        = require('gulp-autoprefixer'),
    imagemin            = require('gulp-imagemin'),
    imageminPngquant    = require('imagemin-pngquant'),
    notify              = require('gulp-notify'),
    plumber             = require('gulp-plumber'),
    connect             = require('gulp-connect'),
    watch               = require('gulp-watch');

/*  TODO
    Automatically load any gulp plugins in your package.json
var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins({
    pattern: ['gulp-*', 'gulp.*'],
    scope: 'devDependencies'
});
*/

var dev  = environments.development,
    prod = environments.production;


// Javascript
// Transpiling ES6 Modules to CommonJS Using Babel & Gulp
// https://goo.gl/JsElNa
gulp.task('clean-temp', function () {
    return del(['./dist']);
});

gulp.task('es6-commonjs', function () {
    return gulp.src('./src/js/**/*.js')
    .pipe(plumber({
        errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(gulp.dest('./dist/temp/js'));
});

gulp.task('clean-js', function () {
    return del(['./dist/js']);
});

gulp.task('build-js', ['clean-js', 'es6-commonjs'], function () {
    return browserify(['./dist/temp/js/entry.js']).bundle()
    .pipe(source('entry.js'))
    .pipe(buffer())
    .pipe(prod(uglify()))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(connect.reload());
});


// CSS
gulp.task('build-styles', function () {
    return gulp.src('./src/**/main.scss')
    .pipe(plumber({
        errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(sourcemaps.init({
        debug: true
    }))
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: ['> 2%', 'not ie <= 8', 'Safari >= 8'],
        cascade: false
    }))
    .pipe(prod(cleanCSS()))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/'))
    .pipe(connect.reload());
});


// HTML
gulp.task('build-html', function() {
    return gulp.src('./src/**/*.html')
    .pipe(plumber({
        errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
    }))
    .pipe(gulp.dest('./dist/'))
    .pipe(connect.reload());
});


// Optimizing Images
gulp.task('build-img', function() {
    return gulp.src('./src/img/**/*.+(png|gif|jpg|svg)')
    .pipe(plumber({
        errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(prod(imagemin({
        interlaced: true,
        progressive: true,
        use: [imageminPngquant()],
        svgoPlugins: [{
            removeViewBox: false
        }]
    })))
    .pipe(gulp.dest('./dist/img/'))
    .pipe(connect.reload());
});


// Copy Task
gulp.task('copy-fonts', function() {
    return gulp.src(['./src/fonts/*'])
    .pipe(plumber({
        errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(gulp.dest('./dist/fonts/'))
    .pipe(connect.reload());
});


// Move root files to build folder
gulp.task('move-root-files', function() {
    return gulp.src(['./src/*.ico'])
    .pipe(gulp.dest('dist/'));
});


// Server
gulp.task('connect', function() {
    connect.server({
        root: './dist',
        livereload: true
    });
});


// Watcher
gulp.task('watch', function() {
    gulp.watch('./src/js/**/*.js', ['build-js']);
    gulp.watch('./src/css/**/*.scss', ['build-styles']);
    gulp.watch('./src/**/*.html', ['build-html']);
    gulp.watch('./src/img/**/*.+(png|gif|jpg|svg)', ['build-img']);
});



// Run
gulp.task('default', function(callback) {
    runSequence('clean-temp', ['build-js', 'build-styles', 'build-html', 'build-img', 'copy-fonts', 'connect', 'watch'], callback);
});

gulp.task('build', function(callback) {
    runSequence('clean-temp', ['build-js', 'build-styles', 'build-html', 'build-img', 'copy-fonts', 'move-root-files'], callback);
});
