import WebSocket, { WebSocketServer } from 'ws';
console.log(WebSocket);

const URL = 'ws://machineagency-shopbot-server.herokuapp.com';
const PROTOCOL = 'drawing';
const testPacket = { foo: 'bar' };

let main = () => {
    let ws = new WebSocket(URL, PROTOCOL);
    ws.on('open', () => {
        ws.send(JSON.stringify(testPacket), (maybeError) => {
            if (maybeError) {
                console.error(maybeError);
            }
            else {
                console.log('Data sent successfully.');
            }
            ws.close();
        });
    });
}

main();
