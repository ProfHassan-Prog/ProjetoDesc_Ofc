import {express} from "espress";
import { pkg } from "body-parse";
import { router } from "./routes/router.js";

const app = express();
const {json, urlencoded} = pkg;

app.use(json());
app.use(urlencoded({extended: true}));

app.listen(3000, function(){
    console.log("Listeing to port 3000");
});