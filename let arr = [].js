const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function afterDelay() {
    console.log('молодець.');
    rl.close();
}

rl.question('Введіть інтервал затримки в мілісекундах: ', (interval) => {
    interval = parseInt(interval);

    if (!isNaN(interval) && interval > 0) {
        setTimeout(afterDelay, interval);
    } else {
        console.log('Будь ласка, введіть число більше 0.');
        rl.close();
    }
});

rl.on('close', () => {
    console.log('красава.');
    process.exit(0);
});