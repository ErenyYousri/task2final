const yargs = require('yargs')
const fs = require('fs')
const { argv } = require('process')
 const customers = []
 const account = function (name, balance){
    account.name = name;
    account.balance = balance;
  
    account.deposit = function (depositAmount) {
      newBalance = account.balance - depositAmount;
      console.log("Your balance is now " + newBalance);
      if (newBalance <= 0) {
        console.log("you dont have enough money");
      }
    };
  
    account.withdraw = function (withdrawAmount){
      newBalance = account.balance - withdrawAmount;
      console.log("Your balance is now " + newBalance);
      if (newBalance <= 0) {
        console.log("You dont have enough money");
      }
  
    };
}

readFileData = function(){
    try{
        data = fs.readFileSync('customeres.json')
        if(data.toString().length==0) throw new Error('errrr')
        data = JSON.parse(data.toString())
        if(!Array.isArray(data)) throw new Error('')
    }
    catch(e){
        data = []
        fs.writeFileSync('customeres.json', "[]")
    }
    return data    
}
showAllData = function(){
    data = readFileData()
    if(data.length>0) console.table(data);
    else console.log("nothing here")
}

addNewData = function(customer) {
    data = readFileData() 
    for(i=0;i<customers.length;i++){
        if(addNewData == argv.accNum){ 
            console.log("errorrrr");
        }
        else{   
            data.push(customers) 
        }
    data.push(customer)
    
    fs.writeFileSync('customeres.json', JSON.stringify(data))}
  
    

addbalance = function(newbalance){
    showSingleCustomer(addNewData.accNum)
    newbalance += balance


showSingleCustomer = function(single){
    data = readFileData()
    result = data.find(element=>{
        return element.single == single
    })
    if(!result) console.log("not found")
    else {console.log(result)}
}

yargs.command({
command:"addCustomer",
describe:"add new customer to our file",
builder:{
name:{
    demandOption:true,
    describe:"name",
    type:"string"
},
balance:{

    demandOption:true,
    describe:"balance",
    type:"number"
},
accNum:{
    demandOption:true,
    describe:"account",
    type:"number"

},

addbalance:{
    demandOption:true,
    describe:"account",
    type:"number"
},
},
handler:function(argv){
    const customer={
        name: argv.name,
        balance: argv.balance,
        accNum: argv.accNum
    }
    addNewData(customer)
    showAllData()
    account('ereny',50)
}
})
console.log(customers)


yargs.argv
   
 









