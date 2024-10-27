const mongoose = require('mongoose');
const dbURI = "mongodb+srv://alperenakcakaya:<alperen1234>@alperen1234.ke47c.mongodb.net/?retryWrites=true&w=majority&appName=alperen1234";

try {
   
mongoose.connect(
    dbURI,
    { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => {console.log(" Mongoose is connected")},
	err=> {console.log(err)}
	);
}
 catch (e) {
  console.log("could not connect");
}


