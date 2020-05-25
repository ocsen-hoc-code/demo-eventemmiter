import Eclass from "./Model/EClass";
import { EventEmitter } from "events";
import { write } from "fs";
// const Eclass = require('./Model/EClass');
// const os = require("os");
// const fs = require("fs");
let event = new EventEmitter();
let ecl = new Eclass();

// ecl.on('write', (data) => {
//     ecl.showData('Write:', data);
// });
// ecl.on('read', (data) => {
//     ecl.showData('Read:', JSON.parse(data));
// });
// ecl.createEvent();
ecl.createEvent(event);
// ecl.WriteFile();
// ecl.readFile();
// let data = { cpu: os.cpus(), arch: os.arch() };
// const write = () => fs.writeFile('./os.info', JSON.stringify(data), (err) => {
//     if (err) throw err;
//     console.log('Write:', data);
// });

// const read = () => fs.readFile('./os.info', (err, data) => {
//     if (err) throw err;
//     console.log('Read:', JSON.parse(data.toString()));
// });
// write();
// // process.nextTick(write);
// read();


event.on('write', (data) => {
    ecl.showData('Event:', data);
});

event.emit('write', 'Fake write message!');
ecl.WriteFile();
console.log('Learn Node');