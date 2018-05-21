const gulp = require('gulp');
const sass = require('gulp-sass');
const eslint = require('gulp-eslint');
const livereload = require('gulp-livereload');
const del = require('del');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const pump = require('pump');

gulp.task('sass', function() {
   return gulp.src('./sass/**/*.scss')
              .pipe(sass())
              .pipe(gulp.dest('./css'));
});

gulp.task('eslint', function() {
    return gulp.src('./scripts/**/*.js')
        .pipe(eslint())
        .pipe(eslint.failAfterError())
        .pipe(gulp.dest('./js'));
});

gulp.task('live', function() {
    livereload.listen();
    gulp.watch('./scripts/**/*.js', ['eslint'])
});

gulp.task('del', function() {
    return del([
        './prod'
    ])
});

gulp.task('concat', function() {
    return gulp.src('./lib/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('uglify', function (cb) {
    pump([
            gulp.src('scripts/*.js'),
            uglify(),
            gulp.dest('dist')
        ],
        cb
    );
});

gulp.task('copyindex', function () {
    gulp.src('./index.html')
        .pipe(gulp.dest('./prod/'));
});

gulp.task('copycss', function () {
    gulp.src('./css/**/*.css')
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./prod/css'));
});

gulp.task('copyjs', function () {
    gulp.src('./dist/**/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./prod/js'));
});

gulp.task('create', function () {
    return gulp.src('*.*', {read: false})
        .pipe(gulp.dest('./prod'));
});

gulp.task('prod', [ 'del', 'create', 'copyindex', 'sass', 'copycss', 'uglify', 'copyjs' ]);