process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
const express = require('express')
const app = express()
const path = require('path');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const axios = require('axios');
const port = 3000;
const fs = require('fs');
const folderRinex = path.join(__dirname,'/data/rinex');
const {spawn} = require('child_process');
// set the view engine to ejs
app.set('view engine', 'ejs');
// set global resources (js scripts, css styles)
app.use(express.static(path.join(__dirname, 'public')));
const url = require('url');
const urlencodedParser = express.urlencoded({extended: false});


/*
app.get('/', (req, res) => {
    //const dom = new JSDOM(`<p>fdfdfd<p>`);
    //console.log(res.innerHTML);
    //res.innerHtml = res.innerHtml + dom;

    //let rinexFiles = [];
    let rinexFilesNamesIn = [];
    //let rinexFilesNamesOut = [];
    let signals = ['L1C','L1P', 'L2C', 'L2P','D1C','S1C'];
    let satelites = ['R24','R08'];
    let tmp;
    fs.readdirSync(folderRinex).forEach(file => {
       // console.log(file);
        tmp = __dirname+'\\data\\rinex\\'+file;
        rinexFilesNamesIn.push(tmp);
        //tmp = __dirname+'\\data\\rinex_out\\'+file;
        //rinexFilesNamesOut.push(tmp);
        //rinexFiles.push(fs.readFileSync(path.join(__dirname,'\\data\\rinex\\', file),
            //{encoding:'utf8', flag:'r'}).split('\n'));
    });
    var dataToSend;
    //console.log(rinexFiles[0]);
    //console.log(rinexFilesNamesIn[1])
    //console.log(rinexFilesNamesOut[1])
    const python = spawn('python3', [__dirname+'\\data\\'+'parser_rinex.py',rinexFilesNamesIn, signals, satelites]);
    python.stdout.on('data', function (data) {
      console.log('Pipe data from python script ...');
      
      dataToSend = data.toString()
      //.replace(/['\r\n]/g, '"')
      //.split(',');
      dataToSend = JSON.parse(dataToSend);
     });
   
     python.on('close', (code) => {
      console.log(`child process close all stdio with code ${code}`);
      // send data to browser
      console.log(dataToSend);
      //res.send(dataToSend);
      //dataToSend['signals'] = signals;
      //dataToSend['satelites'] = satelites;
      res.render(path.join(__dirname,'/view/index'),{data: dataToSend})
      });

})
*/




app.get('/', (req, res, next) => {
    let rinexFilesNamesIn = [];
    let tmp;
    fs.readdirSync(folderRinex).forEach(file => {
        tmp = __dirname+'\\data\\rinex\\'+file;
        rinexFilesNamesIn.push(tmp);
    });
    var dataToSend;
    const python = spawn('python3', [__dirname+'\\data\\'+'parser_rinex2.py',rinexFilesNamesIn]);
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');

        dataToSend = data.toString()
        //.replace(/['\r\n]/g, '"')
        //.split(',');
        dataToSend = JSON.parse(dataToSend);
     });
   
     python.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        // send data to browser
        console.log(dataToSend);
        //res.render(path.join(__dirname,'/view/index'),{data: dataToSend})


        
        res.redirect(
          //`/view/test?data=${JSON.stringify(dataToSend)}`
          //'/view/test'
          url.format({
            pathname:'/view/test',
            query: {
               "data": JSON.stringify(dataToSend)
             }
          })
          );
        
        //next(JSON.stringify(dataToSend));
      
      });

})
app.get('/view/test/', (req, res) => {
    console.log("test");
    let data = JSON.parse(req.query.data)
    console.log(data);
   //res.render(path.join(__dirname,'/view/index'),{data: dataToSend})
   //res.send(req.query.data);
   res.render(path.join(__dirname,'/view/test'),{data: data})
})

app.post('/graph', urlencodedParser, (req, res) => {
  console.log('!!!!!!!!!graph!!!!!!!!!!!');
  console.log(req.body);
  console.log(req.body.satelite);

    let rinexFilesNamesIn = [];
    //let rinexFilesNamesOut = [];
    let signals = req.body.signals
    let satelites = req.body.satelite;
    let times = req.body.times;
    let tmp;
    fs.readdirSync(folderRinex).forEach(file => {
       // console.log(file);
        tmp = __dirname+'\\data\\rinex\\'+file;
        rinexFilesNamesIn.push(tmp);
        //tmp = __dirname+'\\data\\rinex_out\\'+file;
        //rinexFilesNamesOut.push(tmp);
        //rinexFiles.push(fs.readFileSync(path.join(__dirname,'\\data\\rinex\\', file),
            //{encoding:'utf8', flag:'r'}).split('\n'));
    });
    var dataToSend;
    //console.log(rinexFiles[0]);
    //console.log(rinexFilesNamesIn[1])
    //console.log(rinexFilesNamesOut[1])
    //const python = spawn('python3', [__dirname+'\\data\\'+'parser_rinex.py',rinexFilesNamesIn, signals, satelites]);
    const python = spawn('python3', [__dirname+'\\data\\'+'test.py',rinexFilesNamesIn, signals, satelites, times]);
    python.stdout.on('data', function (data) {
      console.log('Pipe data from python script ...');
      
      dataToSend = data.toString()
      //.replace(/['\r\n]/g, '"')
      //.split(',');
      dataToSend = JSON.parse(dataToSend);
     });
   
     python.on('close', (code) => {
      console.log(`child process close all stdio with code ${code}`);
      // send data to browser
      console.log(dataToSend);
      //res.send(dataToSend);
      //dataToSend['signals'] = signals;
      //dataToSend['satelites'] = satelites;
      res.render(path.join(__dirname,'/view/test2'),{data: dataToSend})
      });
 
})



/*
app.get('/', (req, res, next) => {
  let rinexFilesNamesIn = [];
  let tmp;
  fs.readdirSync(folderRinex).forEach(file => {
      tmp = __dirname+'\\data\\rinex\\'+file;
      rinexFilesNamesIn.push(tmp);
  });
  console.log(rinexFilesNamesIn)

 

})
*/

var exec = require('child_process').execFile;

app.get("/hello", function(request, response){
  console.log("start");
  let test= `{"name": "testsddfdf", "family": "dfdf"}`;
  exec(`D:/PASKO/GNSS/node.js/gnss/test exe/dist/hello.exe`, [test], function(err, data) {  
       console.log(err)
       console.log(JSON.parse(JSON.parse(data).test).family);                       
   });
})
app.listen(port, () => {
  console.log(` App listening on the port ${port}`)
})