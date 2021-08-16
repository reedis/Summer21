function main() {
    let ranMessage = Math.floor(Math.random() * 10);
    let messages = ["Do some streching", "Call someone!", "Take a 15 minute break", "Look away from the screen for a second!", "Go for a walk!",
                    "Make your bed!", "Drink some Water", "Is there a task you are forgetting", "Make sure to finish the checkList today!", "Today will be a good day!"];
        console.log(messages[ranMessage]);
}
main();