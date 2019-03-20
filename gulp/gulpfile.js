var gulp = require('gulp'),
// webserver = require('gulp-webserver'),
    uglify = require('gulp-uglify');

// gulp.task('webserver', function() {
//     gulp.src('./').pipe(webserver({
//         open: true,
//         host: 'localhost',
//         port: 8888,
//         fallback: 'index.html'
//     }));
// });

gulp.task('default', function(){
    gulp.src('src/app.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/'));
});

console.log(gulp);