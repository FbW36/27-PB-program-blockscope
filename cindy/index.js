//27-PB-program-blockscope
//On the block
//1. Updater

    //Depending on the value of a variable (determiner), assign a value to x.
    const determiner = [2,4,5,6,-77,9,-11,-33]
        //If determiner is less than 0, x's value should be "Less than 0"
        //If determiner is greater or equal 0, x's value should "Greater or equal to 0".
    for(let i = 0; i < determiner.length; i++){
        if(determiner[i] < 0){
            console.log(`Exercise 1 => ${determiner[i]} is Less than 0`)
        }else{
            console.log(`Exercise 1 => ${determiner[i]} is Greater/equal to 0`)
        }
    }


        //2. New Variables

        //Depending on the value of the determiner, assign a value to another variable (updater) and create another variable.
        const updater = [44, 93, 0, -234, 4,3, 1000, -9]
            //If determiner is greater of equal to 0, updater's value should be "Greater or equal to 0" and create another variable called message, assign a value of "Positive Integer" and print message.
            let message = 'Positive Integer'
            for(let i = 0; i < determiner.length; i++){
                if(determiner[i] >= 0){
                    console.log(`Exercise 2 => ${determiner[i]} Greater or equal to 0 ${message}`)
                }else{
                    console.log(`Exercise 2 => ${determiner[i]} is Less than 0`)
                }
                console.log("test1=> ", message)
            }
            console.log("test2=> ", message)
            
            //If determiner is less than 0, updater's value should be "Less than 0".
    
        //Question: What would happen if we tried to print "message" outside of the if statement? Comment your answer in the js file.
            //I tried to print 'message' in both sides (outside if and outsite loop), it's printing but I'm pretty sure it's only a string being printed. It is not the expected result. 

            //3. Ternary v.s. If statement

            //When do you use a ternary v.s. an if statement? Give an example.

            //Use ternary operators to set a value to a variable, or to reduce code if necessary.Or if your code is as short as it can. 
            //Use if-else statements for everything else. 
        
            //if example => 
            const studentAges = [20,60,29,55,19,23,27]
            for(let i = 0; i < studentAges.length; i++){
                if(studentAges[i] >= 30){
                    console.log(`Ex 3 => Your age is ${studentAges[i]}! Too old man`)
                }else{
                    console.log(`Ex 3 => Your age is ${studentAges[i]}! Too baby man`)
                }
            }
            //Ternary example => 
            let studentAge1 = 20
            oldOrNot = (studentAge1 >= 30) ? console.log("too old man") : console.log("too baby man")