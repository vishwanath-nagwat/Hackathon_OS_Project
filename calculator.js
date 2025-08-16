    function getInput(i) {
        var display = document.getElementById('display');
        if (i === 'C') {
            display.value = '';
        } else if (i === '=') {
            try {
                display.value = eval(display.value);
            } 
            catch (e) {
                display.value = 'Error';
            }
        } else {
            display.value += i;
        }
    }
