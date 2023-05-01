/* 
To install gulp, follow the steps bellow:

1. $ npm rm --global gulp
2. Install node and npm
3. $ npm install --global gulp-cli
4. $ npm install --save-dev gulp
*/

const { series, parallel, src, dest, watch } = require("gulp");
const del = require("del");
const JSZip = require("gulp-zip");
const browserSync = require("browser-sync").create();

async function clean() {
	const deletedPaths = await del(["dist/**/*", "dist/", "dist.zip"]);

	console.log("Deleted files and directories:\n", deletedPaths.join("\n"));
}

function buildFontAwesome() {
	return src("node_modules/@fortawesome/fontawesome-free/webfonts/*").pipe(dest("dist/assets/webfonts"));
}

function buildImages() {
	return src(["src/assets/img/**/*"]).pipe(dest("dist/assets/img/"));
}

function zip() {
	return src("dist/**/*")
		.pipe(JSZip("dist.zip"))
		.pipe(dest("./"));
}

function liveReload() {
	browserSync.init({
		server: "./"
	});
	watch("src/**/*.*").on("change", browserSync.reload);
}

exports.build = series(buildFontAwesome, buildImages);
exports.clean = clean;
exports.zip = zip;
exports.server = liveReload;
