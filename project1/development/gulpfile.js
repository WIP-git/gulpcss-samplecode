/**
 * ユーザー設定箇所
 * 出力先ディレクトリ
 * @type {string}
 * @const
 */
const GENERATED_PATH = '../css/';

// プラグインの読み込み
const gulp = require("gulp");//gulp…(1)
const concat = require('gulp-concat');//gulp-concat…(2)

/**
 * cssファイルの結合/出力
 * 出力先 {GENERATED_PATH}
 */
function gulpProject1() {
    return gulp.src('./css/*.css') //対象とするcssファイル群…(3)
        .pipe(concat('style.css'))//結合するファイル名…(4)
        .pipe(gulp.dest(GENERATED_PATH));//出力先…(5)
}
exports.gulpProject1 = gulpProject1;//タスク登録…(6)