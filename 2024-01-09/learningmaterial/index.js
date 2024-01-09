const log = require("./logging").log;
const logNoDate = require("./logging").logNoDate;

function krepimasisIServeri()
{
    console.log("Siunciamas atsakymas atgal");
    log("Ivyko vartotojo kreipimasis i serveri")
    logNoDate("Ivyko kreipimasis")
}

krepimasisIServeri();