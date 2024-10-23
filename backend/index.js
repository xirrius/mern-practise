// modules
// in built
// asynchronous coding - non-blocking

// modules - files - data - function
// REPL - read, eval, print, loop - debugging

// file system - readFile/readFileSync
// array = [1,2,34,5]
// array = [6,7,8,4]


const fs = require('fs') 

// fs.writeFile('./upload/text.txt', 'hello champa i am your dog', (err) => {
//     console.log(`file bn gyi`);
// })

// fs.readFile('../css/index.html', 'utf-8', (err, data) => {
    //     console.log(data);
    //     console.log('file read ho rhi');  
    // })
    
    // fs.appendFile('text.txt', 'lorem ipsum i love you ', (err) => {
    //     console.log(`file update/append gyi`);
    // })

// fs.mkdir('../utils', () => {
//     console.log('folder bn gya');
// })
// fs.rename('')
// delete 
// fs.unlink('text.txt', () => {})
// fs.rmdir

// stream

// os - operating system module - information

// const os = require("node:os");

// console.log(os.freemem())
// console.log(os.totalmem())

// path module - './src/public/'

// const path = require('path')
// src/public/ , //file/
// console.log(path.join('', ))

const http = require('http') 

// stream - readable writeable duplex transform

// const aman = http.createServer()

// aman.on('request', (req, res) => {
//     fs.readFile('text.txt', (err, data) => {
//         res.end(data.toString())
//     })
// })
 
// aman.listen(4000)

// stream
// data , end, error, finish

// const aman = http.createServer()

aman.on('request', (req, res) => {
    const rstream = fs.createReadStream('text.txt')
    // rstream.on('data', (chunk) => {
    //     res.write(chunk)
    // })
    // rstream.on('end', () =>{
    //     res.end()
    // })
    // rstream.on('error', () => {
    //     console.log(error);
    // })
    rstream.pipe(res);
})

aman.listen(4000)

const EventEmitter = require('events')

const events = new EventEmitter()

// on - event listener add krta h
// emit - event ko fire krta h


// events.on('sayMyName', () => {
//     console.log(`Your name is sapna rastogi.`)
// })
// events.on('sayMyName', () => {
//     console.log(`Your name is sapna rastogi.`)
// })
// events.on('sayMyName', () => {
//     console.log(`Your name is sapna rastogi.`)
// })

// events.emit('sayMyName')
