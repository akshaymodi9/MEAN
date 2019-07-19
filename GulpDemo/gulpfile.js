"use strict";

var gulp = require('gulp')
/*var gulpprint = require('gulp-print')
var jscs = require('gulp-jscs')
var jshint = require('gulp-jshint')
var gulpjscsstylish = require('gulp-jscs-stylish')
var gulpif=require('gulp-if')*/
var args = require('yargs').argv
var $ = require('gulp-load-plugins')({ lazy: true })
var imagemin = require('gulp-imagemin');

var config = require('./gulp.config')
var del = require('del')
// gulp.task('mytask',function(){

//     console.log("Gulp task started")

//     console.log("Gulp task completed")
// })

// gulp.task('firsttask',function(){

//         console.log("first task completed")
//     })



// gulp.task('secondtask',['firsttask'],function(){

//         console.log("second task completed")
//     })



// gulp.task('done',['mytask','secondtask'],function(){

//     console.log("Done all tasks till done")
// })

// gulp.task('default',['mytask','secondtask'],function(){

//         console.log("Done all tasks")
//     })


gulp.task('analyze', function () {
    gulp.src(config.allJSfiles)
        .pipe($.if(args.showfiles, $.print()))
        .pipe($.jscs())
        .pipe($.jscsStylish())
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', { verbose: true }))
})

gulp.task('compileLESS', function () {

    gulp.src(config.less)
        .pipe($.less())
        .pipe($.autoprefixer({
            browsers: ['last 2 version', '>5%']
        }))
        /*.pipe($.cssmin())
        .pipe($.rename({
            suffix: '.min',
            extname: '.css'
        }))*/
        .pipe(gulp.dest(config.temp))
})


gulp.task('clean', function () {
    console.log('cleaning started')
    del(config.outputDir)
    console.log("Deleted")
})


gulp.task('copycss', function () {
    gulp.src(config.css)
        .pipe($.autoprefixer({
            browsers: ['last 2 version', '>5%']
        }))
        .pipe($.cssmin())

        // .pipe($.rename({
        //     suffix:'.min',
        //     extname:'.css'

        // }))
        .pipe($.concat('style.bundle.min.css'))
        .pipe(gulp.dest(config.outputDir + '/css'))
})

gulp.task('help', function () {
    $.taskListing()
})

gulp.task('copyImages', function () {
    gulp.src(config.images)
        /*.pipe($.imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.jpegtran({ progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({ plugins: [{ removeViewBox: true }] })
        ]))*/
        .pipe(gulp.dest(config.outputDir))
})
gulp.task('default', ['index'], function () {

    console.log("Both are completed")
})

gulp.task('index',['copyImages'],function(){

    gulp.src(config.indexHtml)
    .pipe($.useref())
    .pipe($.if('*.js',$.uglify()))
    .pipe($.if('*.css',$.cssmin()))
    .pipe(gulp.dest(config.outputDir))
})