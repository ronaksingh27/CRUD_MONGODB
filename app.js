const express = require("express");
const blogRouter = require("./routes/BlogRoutes");
const app = express();

 
//middleware
app.use(express.json());
app.use("/api/blogs", blogRouter);
 

const DB  = "mongodb+srv://Ronak27:ronak27@cluster0.lku7gve.mongodb.net/mernstack?retryWrites=true&w=majority"
const mongoose = require("mongoose");
//configure mongoose
mongoose.connect(DB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
 
module.exports = app;