import { prompt } from "inquirer";
import { q1 } from "./questions/q1";

export const Url ='http://0.0.0.0:3001';
export let token ='1234'

async function start() {
    console.log('');
    console.log('Laqtah Wep, Fantasy inspired by laqtah 📸');
    console.log('');
    console.log('Good <morning/evening>');
    console.log('');
    console.log('');

    const name = await prompt({
        type: 'input',
        name: 'name',
        message: 'what would you like us to call you?'
    })
    console.log('');
    console.log('');
    console.log('');

    console.log(`hey Lamis did you know you are the first user of Laqtah !! `);
    console.log('hope you enjoy our website ');
    console.log('');
    console.log('');
    console.log('');
    
    while (true) {
		await q1();
	}
}

start();
