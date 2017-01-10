var gulp                = require('gulp'),
    fileinclude         = require('gulp-file-include'),
    runSequence         = require('run-sequence'),
    browserify          = require('browserify'),
    babelify            = require('babelify'),
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
    browserSync         = require('browser-sync').create(),
    watch               = require('gulp-watch');

var dev  = environments.development,
    prod = environments.production;

// Clean dist folder
gulp.task('clean-temp', function () {
    return del(['./dist']);
});

// Javascript
// Transpiling ES6 Modules to CommonJS Using Babel & Gulp

gulp.task('build-js', function() {
    return browserify({
            entries: './src/js/entry.js',
            debug: true
        })
        .transform('babelify', {
            presets: ['es2015']
        })
        .bundle()
        .pipe(source('entry.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({
            debug: true,
            loadMaps: true
        }))
        .pipe(prod(uglify()))
        .pipe(sourcemaps.write('./maps'))
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.stream());
});


// CSS
gulp.task('build-styles', function () {
    return gulp.src('./src/**/main.scss')
    .pipe(plumber({
        errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(sourcemaps.init({
        debug: true,
        loadMaps: true
    }))
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: ['> 2%', 'not ie <= 8', 'Safari >= 8'],
        cascade: false
    }))
    .pipe(prod(cleanCSS()))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.stream());
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
    .pipe(browserSync.stream());
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
    .pipe(browserSync.stream());
});


// Copy Task
gulp.task('copy-fonts', function() {
    return gulp.src(['./src/fonts/*'])
    .pipe(plumber({
        errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(gulp.dest('./dist/fonts/'))
    .pipe(browserSync.stream());
});


// Move root files to build folder
gulp.task('move-root-files', function() {
    return gulp.src(['./src/*.ico'])
    .pipe(gulp.dest('dist/'));
});


// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});


// Static Server + watch files
gulp.task('serve', ['build-js', 'build-styles', 'build-html', 'build-img'], function() {

    browserSync.init({
        server: "./dist"
    });

    gulp.watch('./src/js/**/*.js', ['build-js']);
    gulp.watch('./src/css/**/*.scss', ['build-styles']);
    gulp.watch('./src/**/*.html', ['build-html']);
    gulp.watch('./src/img/**/*.+(png|gif|jpg|svg)', ['build-img']);

    gulp.watch("./dist/*.html").on('change', browserSync.reload);
});

// Run
gulp.task('default', function(callback) {
    runSequence(['build-js', 'build-styles', 'build-html', 'build-img', 'copy-fonts', 'serve'], callback);
});

gulp.task('build', function(callback) {
    runSequence('clean-temp', ['build-js', 'build-styles', 'build-html', 'build-img', 'copy-fonts', 'move-root-files'], callback);
});
