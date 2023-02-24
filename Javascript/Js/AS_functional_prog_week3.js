// Task 1: Build a function-based console log message generator
function consoleStyler(color,background,fontSize,txt) {
    var message = "%c" + txt;
    // The "%c" string is a placeholder for a CSS style that will be applied to the text. The actual text content is stored in the "txt" variable, which is concatenated to the "%c" string. The resulting string is then assigned to the "message" variable.
    var style = `color: ${color};` 
    // The code declares a variable named "style" which is a template literal string that sets the value of a CSS style "color" to the value of a variable "color".

    // The template literal syntax, indicated by the backticks (``), allows for embedding expressions within a string. The expression ${color} is evaluated and its value is concatenated into the string. The resulting string is then assigned to the "style" variable, which represents a CSS style rule with the color property set to the value of the "color" variable.
    style += `background: ${background};`
    style += `font-size: ${fontSize};`
  
    console.log(message, style);
}

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
    var fontStyle = "color: tomato; font-size: 50px";
    if (reason == "birthday")
    {
        console.log(`%cHappy birthday`, fontStyle);
    }
    else if (reason == "champions")
    {
       console.log(`%cCongrats on the title!`, fontStyle); 
    }
    else
    {
        console.log(message, style);    
    }
    
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler('blue', '#ede6db', '40px',  'Congrats!');
celebrateStyler('birthday');

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt,reason) {
    consoleStyler(color, background, fontSize, txt);  
    celebrateStyler(reason);
}
// Call styleAndCelebrate
styleAndCelebrate ('ef7c8e', 'fae8e0', '30px','You made it!', 'champions');