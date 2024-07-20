import express from "express";
import { authorizeRoles, isAutheticated } from "../middleware/auth";
import { getCoursesAnalytics, getOrderAnalytics, getUsersAnalytics } from "../controllers/analytics.controller";
import { updateAccessToken } from "../controllers/user.controller";
const analitycsRouter = express.Router();


analitycsRouter.get("/get-users-analitycs", isAutheticated, authorizeRoles("admin"), getUsersAnalytics);
analitycsRouter.get("/get-courses-analitycs", isAutheticated, authorizeRoles("admin"), getCoursesAnalytics);
analitycsRouter.get("/get-orders-analitycs",  isAutheticated, authorizeRoles("admin"), getOrderAnalytics);



export default analitycsRouter;