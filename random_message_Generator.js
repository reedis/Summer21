function main() {
    let ranMessage = Math.floor(Math.random() * 10);
    switch(ranMessage) {
        case 0:
            console.log("Today will be a good day!");
            break;
        case 1:
            console.log("Make sure to finish the checkList today!");
            break;
        case 2:
            console.log("Is there a task you are forgetting");
            break;
        case 3:
            console.log("Drink some Water");
            break;
        case 4:
            console.log("Make your bed!");
            break;
        case 5:
            console.log("Go for a walk!");
            break;
        case 6:
            console.log("Look away from the screen for a second!");
            break;
        case 7:
            console.log("Take a 15 minute break");
            break;
        case 8:
            console.log("Call someone!");
            break;
        case 9:
            console.log("Do some streching");
            break;
        default:
            console.log("I dont know how you got here!");
            break;
    }
}

main();