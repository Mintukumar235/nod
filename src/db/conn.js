const mongoose = require("mongoose")
const db = 'mongodb+srv://myChatapp:NtxksWb5Eken1FIi@cluster0.1nbnl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
// mongoose.connect('mongodb+srv://myChatapp:NtxksWb5Eken1FIi@cluster0.1nbnl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
//    useNewUrlParser:true,
//    useUnifiedTopology:true,
//    useCreateIndex:true
// }).then(() => {
//    console.log('connection sucessful')
// }).catch((e) => {
//     console.log('not connected')
// })
mongoose.connect(db , {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    //useCreateIndex:true
})
.then(() => {
   console.log('connection sucessful')
}).catch((e) => {
    console.log('not connected')
})