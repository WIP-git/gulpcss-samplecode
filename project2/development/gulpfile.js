/**
 * ユーザー設定箇所
 * 出力先ディレクトリ
 * @type {string}
 * @const
 */
const GENERATED_PATH = '../css/';

// プラグインの読み込み
const gulp = require("gulp");
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const csscomb = require('gulp-csscomb');
const csslint = require('gulp-csslint');
const csslintReporter = require('gulp-csslint-report');

// autoprefixer用定義
const AUTOPREFIXER_CONFIG = [
  'last 2 versions',//各ブラウザの2世代前までのバージョンを担保
  'ie >= 11'//IE11を担保
];

/**
 * cssファイルの結合
 * 出力先 {GENERATED_PATH}
 */
function gulpProject2() {
    return gulp.src('./css/*.css') //対象とするcssファイル群
    .pipe(csscomb()) //csscombで整形
    .pipe(autoprefixer(AUTOPREFIXER_CONFIG)) //autoprefixerでベンダープレフィックス付与
    .pipe(csslint('csslintrc.json')) //csslint
    .pipe(csslintReporter()) //csslintのレポート
    .pipe(concat('style.css'))//結合するファイル名
    .pipe(gulp.dest(GENERATED_PATH));//出力先
}
exports.gulpProject2 = gulpProject2;//タスク登録