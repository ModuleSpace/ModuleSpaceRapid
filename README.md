# ModuleSpaceRapid

Welcome to the official ModuleSpacerapid Repository on GitHub!

# What is ModuleSpaceRapid

ModuleSpaceRapid is a Template for creating scalable ExpressJs Backends.

# History

This is a fragment of what was built to be the backend of our website - module-space.de, however, we decided that we'd go another route but didn't want to abandon our backend structure in case we can help someone out with creating a simple backend application, so we removed all our own Code and published it as a Template on GitHub.

# How to add Routes

- To add a Route, simply create a new file in the ```src/routes``` Folder and call it ```{YOUR_ROUTE_NAME}.ts```

- Start editing the file and make sure to create a router object:
```
import { Router } from "express";
import { makeRoute } from "../transform/route";

const router: Router = Router();
const route: string = makeRoute(__filename);
```
- Add the Functionality, for Example:
```
router.get(route, (req, res) => {
    res.status(200).send("OK");
});
```

- Make sure to export the router as default:

```
export default router;
```

- And then import the Route in index.ts, the Main file of the Projekt:

```
import myRouter from './routes/myroute';
```

- Add your new Route:

```
app.use('/', myRouter);

```

# How to Start

Dev:
- Start the Dev-Mode with ```npm run dev```

This will automatically detect Changes in your Code and restart the Server in case of a Change.

Build:
- Build the Project and compile to TypeScript: ```npm run build``` 
- Run the compiled Code: ```npm run start```

# License

The MIT License (MIT)