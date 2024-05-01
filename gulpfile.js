const gulp = require("gulp");
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const sass = require('gulp-sass')(require('sass'));

const adminFolder = "/Users/nikitagulaev/Desktop/Pp/OrtoStom/admin"

gulp.task("copy-html", () => {
  return gulp.src("/Users/nikitagulaev/Desktop/Pp/OrtoStom/index.html")
    .pipe(gulp.dest(adminFolder))
});

gulp.task("build-js", () => {
  return gulp.src("/Users/nikitagulaev/Desktop/Pp/OrtoStom/src/main.js")
    .pipe(webpackStream({
      mode: 'development',
      output: {
        filename: 'script.js'
      },
      watch: false,
      devtool: "source-map",
      module: {
        rules: [
          {
            test: /\.(?:js|mjs|cjs)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', {
                    debug: true,
                    corejs: 3,
                    useBuiltIns: "usage"
                  }],
                  "@babel/react"
                ]
              }
            }
          }
        ]
      }
    }))
    .pipe(gulp.dest(adminFolder));
});

gulp.task("build-sass", () => {
  return gulp.src("/Users/nikitagulaev/Desktop/Pp/OrtoStom/scc/style.css")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(adminFolder))
})

gulp.task("copy-api", () => {
  return gulp.src("/Users/nikitagulaev/Desktop/Pp/OrtoStom/app/api/**/*.*")
  .pipe(gulp.dest(adminFolder + "/api"))
})

gulp.task("copy-assets", () => {
  return gulp.src("/Users/nikitagulaev/Desktop/Pp/OrtoStom/assets/**/*.*")
  .pipe(gulp.dest(adminFolder + "/assets"))
})

gulp.task("watch", () => {
  gulp.watch("/Users/nikitagulaev/Desktop/Pp/OrtoStom/index.html", gulp.parallel("copy-html"))
  gulp.watch("/Users/nikitagulaev/Desktop/Pp/OrtoStom/assets/**/*.*", gulp.parallel("copy-assets"))
  gulp.watch("/Users/nikitagulaev/Desktop/Pp/OrtoStom/app/api/**/*.*", gulp.parallel("copy-api"))
  gulp.watch("/Users/nikitagulaev/Desktop/Pp/OrtoStom/scc/**/*.scss", gulp.parallel("build-sass"))
  gulp.watch("/Users/nikitagulaev/Desktop/Pp/OrtoStom/src/**/*.*", gulp.parallel("build-js"))
});

gulp.task("build", gulp.parallel("copy-html", "copy-assets", "copy-api", "build-sass", "build-js"))

gulp.task("default", gulp.parallel("watch", "build"))
