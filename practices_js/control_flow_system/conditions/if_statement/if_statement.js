if (true){
    console.log("If statement executed");
} else{
    console.log("Else statement executed");
}
    console.log("End of If statement");

    if (false){
    console.log("If statement executed");
} else{
    console.log("Else statement executed");
}
    console.log("End of If statement");


    var age= 70;
    if(age>50){
        console.log("old!");
    };

    var age= 70;
    if(age>50){
        console.log("old!");
    }else{
        console.log("not aged!");

    };

    var age=prompt("Enter your age!");
    if(age>=60){
        console.log("oldest!");
    } else if(age>=50) {
        console.log("older!");
    } else if(age>=40){
        console.log("old!");
    } else if(age>=30){
        console.log("middle aged!");
    } else if(age>=20){
        console.log("young!");
    } else{
        console.log("teenaged!");
    }


 console.log("select an option:\na. option 1 \nb.option 2 \nc. option 3 ");
     choice = prompt();
     var tex;
     if (choice=="a"){
        tex = "You have selected option 1";
     }el    se if (choice=="b"){
        tex = "You have selected option 2";
     }else if (choice=="c"){
        tex = "You have selected option 3";
     }else {
        tex =  "No option is selected";
     }
     console.log(tex);
