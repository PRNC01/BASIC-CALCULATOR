const sciButton = document.querySelectorAll('.Sci-Btn');
const normalButton = document.querySelectorAll('.Btn');

// DISSPLAY 
const Display = document.getElementById('Display');

let calculationThatDisplay = "";
let Calculation = "";

// SCIENTIFIC CALCULATION
Array.from(sciButton).forEach( (e) => {
    e.addEventListener('click', () => {
        if(e.id == 'B-Left'){
            Calculation = Calculation + '(';
            calculationThatDisplay = calculationThatDisplay + e.innerHTML;
            Display.value = calculationThatDisplay;
        }else if(e.id == 'B-Right'){
            Calculation = Calculation + ')';
            calculationThatDisplay = calculationThatDisplay + e.innerHTML;
            Display.value = calculationThatDisplay;
        }else if(e.id == 'SecNd'){
            
        }else if(e.id == 'Xsq'){
            
        }else if(e.id == 'Xcube'){
            
        }else if(e.id == 'xPy'){
            
        }else if(e.id == 'ePx'){
            
        }else if(e.id == 'tenPx'){
            
        }else if(e.id == 'oneBYx'){
            
        }else if(e.id == 'twoRootX'){
           
        }else if(e.id == 'threeRootX'){
            
        }else if(e.id == 'yRootX'){
            
        }else if(e.id == 'logTen'){
            
        }else if(e.id == 'Prod'){
            
        }
    })
})

// NORMAL CALCULATION
Array.from(normalButton).forEach( (e) => {
    e.addEventListener('click', () => {
        if(e.innerHTML == '='){
            Calculation = eval(Calculation);
            Display.value = Calculation;
        }else if(e.id == 'Divide'){
            Calculation = Calculation + '/';
            calculationThatDisplay = calculationThatDisplay + e.innerHTML;
            Display.value = calculationThatDisplay;
        }else if(e.innerHTML == 'AC'){
            Calculation = '';
            calculationThatDisplay = Calculation;
            Display.value = calculationThatDisplay;
        }else if(e.id == 'Multiply'){
            Calculation = Calculation + '*';
            calculationThatDisplay = calculationThatDisplay + e.innerHTML;
            Display.value = calculationThatDisplay;
        }else if(e.id == 'Minus'){
            Calculation = Calculation + '-';
            calculationThatDisplay = calculationThatDisplay + e.innerHTML;
            Display.value = calculationThatDisplay;
        }else if(e.id == 'Plus'){
            Calculation = Calculation + '+';
            calculationThatDisplay = calculationThatDisplay + e.innerHTML;
            Display.value = calculationThatDisplay;
        }else{
            Calculation = Calculation + e.innerHTML;
            calculationThatDisplay = calculationThatDisplay + e.innerHTML;
            Display.value = calculationThatDisplay;
        }
    })
})

