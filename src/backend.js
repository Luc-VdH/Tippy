var clients = [];
var defaultC = {pNum: "0781125674", balance: 0}
clients.push(defaultC)

//function calls for testing:
// record("111111111")
// updateBal("111111111", 200)
// console.log(getBal("111111111"))
// resetBal("111111111")
// console.log(getClient("111111111"))


//NOTE: any function that changes the DS will print all the contents of the DS to the console

//adds a new client to the array, if they already exist nothing will change, call function and pass phone number in a string
export function record(number){
    var present = false
    for (var i = 0; i < clients.length; i++) {
        if(clients[i].pNum == number){
            present = true
        }
    }
    if(!present){
        var newC = {pNum: number, balance: 0}
        clients.push(newC)
        console.log(clients)
    }
}
//updates the balance of a client, input the phone number as a string and amount to be added (int)
export function updateBal(number, num){
    for (var i = 0; i < clients.length; i++) {
        if(clients[i].pNum == number){
            clients[i].balance = clients[i].balance + num
            
        }
    }
    console.log(clients)
}
//returns the current balance of the client as an integer
export function getBal(number){
    var bal = 0
    for (var i = 0; i < clients.length; i++) {
        if(clients[i].pNum == number){
            bal = clients[i].balance
            
        }
    }
    return bal
}
//sets the balance of the client to 0, to be used when the instant payment is made, after a call to the getBal function
export function resetBal(number){
    
    for (var i = 0; i < clients.length; i++) {
        if(clients[i].pNum == number){
            clients[i].balance = 0
            
        }
    }
    console.log(clients)
}
//gets all the information on a client, their number and current balance. Returns an object with properties {pNum: <number as string>, balance: <amount as int>}
export function getClient(number){
    var out = {pNum: "not found", balance: 0}
    for (var i = 0; i < clients.length; i++) {
        if(clients[i].pNum == number){
            out = clients[i]
            
        }
    }
    return out
}
