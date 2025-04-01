import * as readline from "readline";
import {validatePassword} from "./main";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const program = () => {
    rl.question('비밀번호를 입력하세요 \n', (password) =>  {
        const { isValid, error } = validatePassword(password);
        if(isValid) {
            console.log('올바른 비밀번호입니다')
        }
        if(!isValid) {
            console.log(error);
        }
        rl.question('다시 하시겠습니까? [Y | N]', (input) => {
            if(input.toUpperCase() === 'Y') {
                program();
            } else {
                rl.close();
            }
        })
    })
}

program();