

const app = require("./app");
require("dotenv").config();

const PORT = app.get('port');


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

