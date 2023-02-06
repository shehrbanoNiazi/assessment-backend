const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')

const {getMisFortune} = require('./controller')

const {getFortune} = require('./controller')

const {getLove} = require('./controller')

app.get("/api/compliment", getCompliment);

app.get( "/api/misFortune", getMisFortune);

app.get("/api/fortune", getFortune);

app.get("/api/love", getLove);

app.listen(4000, () => console.log("Server running on 4000"));

