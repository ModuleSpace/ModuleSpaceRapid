# ModuleSpaceRapid

Welcome to the official ModuleSpacerapid repository on GitHub!

# What is ModuleSpaceRapid

ModuleSpaceRapid is a template for creating scalable ExpressJs backends.

# History

This is a fragment of what was built to be the backend of our website - module-space.de, however, we decided that we'd go another route but didn't want to abandon our backend structure in case we can help someone out with creating a simple backend application, so we removed all our own code and published it as a template on GitHub.

# How to add Routes

- To add a Route, simply create a new file in the ```src/routes``` folder and call it ```{YOUR_ROUTE_NAME}.ts```

- Start editing the file and make sure to create a router object:
```
import { Router } from "express";
import { makeRoute } from "../transform/route";

const router: Router = Router();
const route: string = makeRoute(__filename);
```
- Add functionality:
```
router.get(route, (req, res) => {
    res.status(200).send("OK");
});
```

- Make sure to export the router as default:

```
export default router;
```

- Then import the route in index.ts, the main file of the project:

```
import myRouter from './routes/myroute';
```

- add your new route:

```
app.use('/', myRouter);

```

# Usage

Dev:
- Start dev with ```npm run dev```

This will automatically detect Changes in your Code and restart the Server in case of a Change.

Build:
- Build the project: ```npm run build``` 
- Run compiled code: ```npm run start```

# License

The MIT License (MIT)