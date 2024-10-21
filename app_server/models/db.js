const mongoose = require('mongoose');
const dbURI = "mongodb+srv://alperenakcakaya:<25Database12!>@alperen.6nhye.mongodb.net/?retryWrites=true&w=majority&appName=Alperen";

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
}//require('./locations');
