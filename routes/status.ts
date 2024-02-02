import { Router } from "express";
import { makeRoute } from "../transform/route";

const router: Router = Router();
const route: string = makeRoute(__filename);

router.get(route, (req, res) => {
    res.status(200).send("OK");
});

export default router;
