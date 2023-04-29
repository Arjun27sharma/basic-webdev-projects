let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = "";

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
            if(txt.includes("+"))
            {
                let index = txt.indexOf('+');
                let a = txt.slice(0,index);
                let b = txt.slice(index+1);
                let choice = txt.slice(index,index+1);
                console.log(a);
                console.log(choice);
                console.log(b);
                screen.value = parseFloat(a)+parseFloat(b);
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
                screen.value = parseFloat(a)-parseFloat(b);
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
                screen.value = parseFloat(a)*parseFloat(b);
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
                screen.value = parseFloat(a)/parseFloat(b);
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
                screen.value = parseFloat(a)%parseFloat(b);
            }

        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
        
    })
}
