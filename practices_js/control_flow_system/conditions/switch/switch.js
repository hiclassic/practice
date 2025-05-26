let letter =prompt("Enter a letter");
switch(letter){
    case "a": 
    // here case behave like as if;
    Text = "Vowel";
    break;
     case "e": 
     Text = "Vowel";
    break;
     case "i": 
     Text = "Vowel";
    break;
     case "o": 
    Text = "Vowel";
    break;
     case "u": 
     Text = "Vowel";
    break;
    default:
        // here default work as else:
      Text = "Consonant";
        break;
}
    alert(Text);



    console.log("select an option:\na. option 1 \nb.option 2 \nc. option 3 ");
    choice = prompt();
    var text;
    switch(choice){
      case "a":
        text = "option 1 is selected";
        break;
        case "b":
        text = "option 2 is selected";
        break;
        case "c":
        text = "option 3 is selected";
        break;
        default:
       text = "no option is selected";
        break;   
    }
    console.log(text);





