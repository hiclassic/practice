// break;

for ( var i =1; i <=10; i++){
    console.log(i)
    break;
};

for ( var i =1; i <=10; i++){
    if ( i ==3){
        break;
    }
    console.log(i);

};


for ( var i =1; i <=10; i++){
    if ( i ==5){
        break;
    }
    console.log(i);

};

for ( var i =1; i <=10; i++){
      console.log(i);
    if ( i ==5){
        break;
    }

};


// continue;
// skip;


for ( var i =1; i <=10; i++){
    if ( i ==5){
        continue;
    }
    console.log(i);

};

// Find out the Even number 110 to 200;


for ( var i =110; i <=200; i++){
    if ( i % 2 == 1){
        continue;
    }
    console.log(i);
};





// Find out the Odd number 110 to 200;


for ( var i =110; i <=200; i++){
    if ( i % 2 == 0){
        continue;
    }
    console.log(i);
};


