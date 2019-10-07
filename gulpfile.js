

// const { watch, series, parallel, src, dest, gulp } = require('gulp');
// const connect = require('gulp-connect'); // Runs a local webserver
// const open = require('gulp-open'); // Opens a URL in a web browser
// const exec = require('child_process').exec; // run command-line programs from gulp
// const execSync = require('child_process').execSync; // command-line reports

// // Launch Chrome web browser
// // https://www.npmjs.com/package/gulp-open
// function openBrowser(done) {
//     var options = {
//     uri: 'http://localhost:8080'
//     };
//     return src('./')
//     .pipe(open(options));
//     done();
// }

// // Gulp plugin to run a webserver (with LiveReload)
// // https://www.npmjs.com/package/gulp-connect
// function server(done) {
//     return connect.server({
//     root: './',
//     port: 8080,
//     debug: true,
//     });
//     done();
// }

// // Commit and push files to Git
// function git(done) {
//     return exec('git add . && git commit -m "netlify deploy" && git push');
//     done();
// }

// // Watch for netlify deployment
// function netlify(done) {
//     return new Promise(function(resolve, reject) {
//         console.log(execSync('netlify watch').toString());
//         resolve();
//     });
// }

// // Preview Deployment
// function netlifyOpen(done) {
//     return exec('netlify open:site');
//     done();
// }


// // Deploy command
// exports.deploy = series(git, netlify, netlifyOpen);

// // Default Gulp command
// exports.default = series(openBrowser, server);