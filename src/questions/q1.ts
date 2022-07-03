import axios from "axios";
import { prompt } from "inquirer";
import { Url } from "..";
import { adminAcc } from "../Admin";
import { clientAcc } from "../Client";
import { portressAcc } from "../Postress";

//in laqtah, we will provide some services but first who are you? 
export async function q1(){
    const { q1 } = await prompt({
		type: 'list',
		name: 'q1',
		message: 'In laqtah, we will provide some services but first who are you?',
		choices: [
			' Admin',
			' Portress',
			' Client',
		],
		filter: (val) => +val[0],
	});

    const { email } = await prompt({
        type:'input',
        name: 'email',
        message: 'Enter your Email',
    })
    const { data: Portress } = await axios.get(Url + '/portress');
	const formattedPortress =Portress.filter()
    if (email==formattedPortress){

        switch (q1){
        case 0:
            await adminAcc();
        break;
        case 1:
            await portressAcc();
        break;
        case 2:
            await clientAcc();
        break;            
    }}
    
    }
    