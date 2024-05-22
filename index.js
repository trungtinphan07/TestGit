 const { spawn } = require("child_process");
const { readFileSync } = require("fs-extra");
const http = require("http");
const axios = require("axios");
const semver = require("semver");
const logger = require("./utils/log");
const chalk = require("chalk");
const chalkercli = require("chalkercli");
const chalkAnimation = require('chalkercli');
var randomColor = Math.floor(Math.random()*16777215).toString(16);
const CFonts = require('cfonts');

/////////////////////////////////////////////
//========= Check node.js version =========//
/////////////////////////////////////////////

// const nodeVersion = semvecfonts@latestr.parse(process.version);
// if (nodeVersion.major < 13) {
//     logger(`Your Node.js ${process.version} is not supported, it required Node.js 13 to run bot!`, "error");
//     return process.exit(0);
// };

///////////////////////////////////////////////////////////
//========= Create website for dashboard/uptime =========//
///////////////////////////////////////////////////////////

const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});



app.listen(port);
console.log('Server started at http://localhost:' + port);





/////////////////////////////////////////////////////////
//========= Create start bot and make it loop =========//
/////////////////////////////////////////////////////////

function startBot(message) {
    (message) ? logger(message, "BOT STARTING") : "";

    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "mirai.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

    child.on("close",async (codeExit) => {
      var x = 'codeExit'.replace('codeExit',codeExit);
        if (codeExit == 1) return startBot("BOT RESTARTING!!!");
         else if (x.indexOf(2) == 0) {
           await new Promise(resolve => setTimeout(resolve, parseInt(x.replace(2,'')) * 1000));
                 startBot("Bot has been activated please wait a moment!!!");
       }
         else return; 
    });

    child.on("error", function (error) {
        logger("An error occurred: " + JSON.stringify(error), "Starting");
    });
};
////////////////////////////////////////////////
//========= Check update from Github =========//
////////////////////////////////////////////////


function _0x2f7d(_0x4cd190,_0xb4910c){var _0x36a5ce=_0x36a5();return _0x2f7d=function(_0x2f7d90,_0x59070b){_0x2f7d90=_0x2f7d90-0x144;var _0x3fa1f1=_0x36a5ce[_0x2f7d90];return _0x3fa1f1;},_0x2f7d(_0x4cd190,_0xb4910c);}var _0x467dde=_0x2f7d;(function(_0x3d7c9c,_0xcce6c5){var _0x748db7=_0x2f7d,_0x57dce5=_0x3d7c9c();while(!![]){try{var _0x355781=parseInt(_0x748db7('0x159'))/0x1*(-parseInt(_0x748db7('0x151'))/0x2)+-parseInt(_0x748db7('0x158'))/0x3*(-parseInt(_0x748db7('0x144'))/0x4)+-parseInt(_0x748db7('0x14c'))/0x5+parseInt(_0x748db7('0x157'))/0x6+-parseInt(_0x748db7('0x14b'))/0x7+-parseInt(_0x748db7('0x14a'))/0x8+parseInt(_0x748db7('0x156'))/0x9*(parseInt(_0x748db7('0x145'))/0xa);if(_0x355781===_0xcce6c5)break;else _0x57dce5['push'](_0x57dce5['shift']());}catch(_0x4f8db8){_0x57dce5['push'](_0x57dce5['shift']());}}}(_0x36a5,0xe9df3),axios['get'](_0x467dde('0x154'))['then'](_0x5144ef=>{var _0x583d3e=_0x467dde;logger(_0x583d3e('0x147')+_0x5144ef[_0x583d3e('0x149')][_0x583d3e('0x148')],_0x583d3e('0x150'));}),setTimeout(async function(){var _0x2629b0=_0x467dde;CFonts[_0x2629b0('0x146')](_0x2629b0('0x14d'),{'font':'block','align':_0x2629b0('0x152'),'gradient':[_0x2629b0('0x14f'),_0x2629b0('0x14e')]}),logger(_0x2629b0('0x155'),_0x2629b0('0x153')),startBot();},0x46));function _0x36a5(){var _0x549f9e=['4785651obhTaI','7678020JkPlRs','6IQGiFG','850559RMGQxf','3043848cfAXNO','40cVyeum','say','version:\x20','version','data','2729152QIUjzA','6380696xVTMuK','5084105rkAAui','TIN.PT','magenta','red','VERSION','4gnSFUi','center','LOAD','https://raw.githubusercontent.com/J-JRT/JRT_main/mainV2/package.json','Bắt\x20đầu\x20load\x20source\x20code'];_0x36a5=function(){return _0x549f9e;};return _0x36a5();}