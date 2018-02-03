var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');

gulp.task('default', function(){
  console.log("Hooray we have created a Gulp task how cool is that...");
});

gulp.task('html', function(){
 console.log("Imagine something useful is being done to our HTML here...");

});

gulp.task('styles', function(){
//source css
//On every save, this transform styles.css to the temporary folder app/temp/styles applying
//postcss filters
return gulp.src('./app/assets/styles/styles.css')
.pipe(postcss([cssvars, autoprefixer]))
.pipe(gulp.dest('./app/temp/styles'));


});

gulp.task('watch', function(){
//Here we will put what we need to watch

  watch('./app/index.html', function(){
    gulp.start('html');
  });

  //Watch every css file in styles folder
  watch('./app/assets/styles/**/*.css', function(){
 //on save & changes call task 'styles'
  gulp.start('styles');
  });



});
