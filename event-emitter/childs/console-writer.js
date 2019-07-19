

process.on("message", function(message){

    console.log("Received from parent "+ message);

    process.send("Successfully printed in consol");
})