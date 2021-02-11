const mongoose = require('mongoose')

// Conexión a la base de datos

mongoose.connect("mongodb+srv://luciobenedettelli:mytinerary2021@cluster0.a8iua.mongodb.net/MyTinerary?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => console.log("Database connected"))
.catch(error => console.log(error))

