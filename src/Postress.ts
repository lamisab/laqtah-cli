import axios from "axios";
import { prompt } from "inquirer";
import { v4 } from "uuid";
import { token, Url } from ".";

export async function portressAcc(){
    const portressData = await prompt([
        {
            type:'input',
            name:'name',
            message: 'what is your highness is name?'
        },
        {
            type:'input',
            name:'email',
            message: 'enter your Email : '
        },
        {
            type:'input',
            name:'phone',
            message: 'enter your number : '
        },
        {
            type:'input',
            name:'photo',
            message: 'add some photos to show the world how good you are! '
        },
        {
            type:'input',
            name:'link',
            message: 'add links social media to communicate with you:'
        },
        {
            type:'input',
            name:'price',
            message: 'how much does your photo costs?'
        },
    ]);

    await axios.put(
        Url +'/portress/create',
        {
            id:v4(),
            ...portressData,
        },
        {
            headers:{
                authorization: token,
            }
        }
    );
    console.log(`${portressData.name} is added ✅`)
}