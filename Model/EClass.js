import os from 'os';
import fs from 'fs';
import { EventEmitter } from 'events'

class Eclass extends EventEmitter {

    WriteFile() {
        let data = { cpu: os.cpus(), arch: os.arch() };
        fs.writeFile('./os.info', JSON.stringify(data), (err) => {
            if (err) throw err;
            // this.showData('Write', data);
            this.emit('write', data);
        });
    }
    readFile() {
        fs.readFile('./os.info', (err, data) => {
            if (err) throw err;
            // this.showData('Read:', JSON.parse(data));
            this.emit('read', data);
        });
    }

    // createEvent() {
    //     this.on('write', (data) => {
    //         this.showData('Write:', data);
    //     });
    //     this.on('read', (data) => {
    //         this.showData('Read:', JSON.parse(data));
    //     })
    // }

    createEvent(event) {
        this.on('write', (data) => {
            this.showData('Write:', data);
        });
        this.on('read', (data) => {
            this.showData('Read:', JSON.parse(data));
        })
    }

    showData(field, data) {
        console.log(field, data);
    }
}
export default Eclass;
// module.exports = Eclass;