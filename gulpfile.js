var gulp = require('gulp'),
		sass = require('gulp-sass'), // Преобразовует scss/scss файлы в css
		cssmin = require('gulp-cssmin'); // Минимизирует CSS

gulp.task('minCSS', function(){
	return gulp.src('app/sass/*.scss') // Берем файлы
		.pipe(sass()) // Преобразовуем в css
		.pipe(cssmin()) // Минимизируем css
		.pipe(gulp.dest('app/css')) // Выгружаем результат
})
