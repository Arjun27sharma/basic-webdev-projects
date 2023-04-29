let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = "";

// function calculate(a,b,choice){
//     switch(choice){
//         case '+':
//                 return a+b;
//         case '-':
//                 return a-b;
//         case '*':
//             return a*b;
//         case '/':
//             {
//                 if (b == 0){
//                     alert('denominator cannot be 0');
//                     break;
//                 }
//                 return a/b;
//             }
//         default:{
//             alert('not approprite operator');
//             break;}
        
//     }
// }
for(item of buttons)
{
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        console.log(buttonText);

        
        if(buttonText == 'C')
        {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=')
        {
            let txt = screenValue;
            // screen.value = eval(screenValue);
            if(txt.includes("+"))
            {
                let index = txt.indexOf('+');
                let a = txt.slice(0,index);
                let b = txt.slice(index+1);
                let choice = txt.slice(index,index+1);
                console.log(a);
                console.log(choice);
                console.log(b);
                screen.value = parseInt(a)+parseInt(b);
            }
            if(txt.includes("-"))
            {
                let index = txt.indexOf('-');
                let a = txt.slice(0,index);
                let b = txt.slice(index+1);
                let choice = txt.slice(index,index+1);
                console.log(a);
                console.log(choice);
                console.log(b);
                screen.value = parseInt(a)-parseInt(b);
            }
            if(txt.includes("*"))
            {
                let index = txt.indexOf('*');
                let a = txt.slice(0,index);
                let b = txt.slice(index+1);
                let choice = txt.slice(index,index+1);
                console.log(a);
                console.log(choice);
                console.log(b);
                screen.value = parseInt(a)*parseInt(b);
            }
            if(txt.includes("/"))
            {
                let index = txt.indexOf('/');
                let a = txt.slice(0,index);
                let b = txt.slice(index+1);
                let choice = txt.slice(index,index+1);
                console.log(a);
                console.log(choice);
                console.log(b);
                screen.value = parseInt(a)/parseInt(b);
            }
            if(txt.includes("%"))
            {
                let index = txt.indexOf('%');
                let a = txt.slice(0,index);
                let b = txt.slice(index+1);
                let choice = txt.slice(index,index+1);
                console.log(a);
                console.log(choice);
                console.log(b);
                screen.value = parseInt(a)%parseInt(b);
            }

            // if(txt.includes("+" || "-"))
            // {
            //     let index = txt.indexOf('+');
            //     let a = txt.slice(0,index);
            //     let b = txt.slice(index+1);
            //     let choice = txt.slice(index,index+1);
            //     console.log(a);
            //     console.log(choice);
            //     console.log(b);
            //     screen.value = calculate(parseInt(a),parseInt(b),choice);
            //     console.log(screen.value);
            // }

        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
        
    })
}
