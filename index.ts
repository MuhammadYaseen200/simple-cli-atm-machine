import inquirer from "inquirer";

let myBalance = 10000; //Dollar
console.log("Your current amount is:" + myBalance );
let myPin = 1230;

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "Enter your pin",
            type: "number",
        }
    ]
);
//console.log(pinAnswer);
if (pinAnswer.pin === myPin) {
    console.log("Your pin is correct..!!");

    let operationAns = await inquirer.prompt(
        [
            {
                name: "account type",
                message:"Select Youe Account Type",
                type: "list",
                choices:["Current Account","Saving Account"]
            },
            {
                name: "TransactionMethod",
                message: "Select your Transaction Method: ",
                type: "list",
                choices: ["CashWithdrawl","FastCash","CheckBalance"]
            }
        ]
    );

    // console.log(TransactionMethod);

    if (operationAns.TransactionMethod === "CashWithdrawl") { 
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "Enter your required amount", 
                    type: "number"
                }
            ]
        );
         //assignment operators =, -=, +=,
         if(myBalance >= amountAns.amount){
             
             myBalance -= amountAns.amount
             console.log(`Your remaning balance is: ${myBalance}`)
            }
            else(
                console.log("Insufficient value")
                
            )
         
    }else if(operationAns.TransactionMethod === "FastCash"){
        let FastCashAmount = await inquirer.prompt(
            [
                {
                    name:"FastCash",
                    message:"Select the amount you want to Withdraw",
                    type:"list", 
                    choices:["1000","2000","5000","8000","10000","15000","20000"]

                 }
            ]
        )
        if(myBalance >= FastCashAmount.FastCash ){
            myBalance -= FastCashAmount.FastCash 
            console.log(`Your remaning balance is: ${myBalance}`)
         }
         else(
            console.log("Insufficient Ammount")
            
         )

     }
     else if( operationAns.TransactionMethod === "CheckBalance")
     {
           console.log(`Your remaning balance is: ${myBalance}`);
     }

}
else {
    console.log("invalid pin code.Make sure that the pin you entered is correct");
    console.log("....TRY AGAIN....");
    
};

//home-work:
// 1) deposit k lye command 
// 2) koi current balance  se ziada withDraw krey to us k stop button
// 3) fast cash opt
// 4) concatinate with template literals
