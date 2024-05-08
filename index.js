import inquirer from "inquirer";
let isFriend = await inquirer.prompt([
    {
        name: "name",
        type: "string",
        messsage: "Enter your friend name:",
    },
]);
if (isFriend.name === "Tahira" || isFriend.name === "Zahra") {
    console.log(`${isFriend.name} is your friend.`);
}
else {
    console.log(`${isFriend.name} is not your friend.`);
}
