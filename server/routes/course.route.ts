import express from "express";
import {
  addAnwser,
  addQuestion,
  addReplyToReview,
  addReview,
  answerQuestion,
  //createQuestion,
  deleteCourse,
  editCourse,
  generateVideoUrl,
  getAdminAllCourses,
  getAllCourses,
  getCourseByUser,
  getSingleCourse,
  uploadCourse
} from "../controllers/course.controller";
import { authorizeRoles, isAutheticated } from "../middleware/auth";
import { updateAccessToken } from "../controllers/user.controller";
const courseRouter = express.Router();

courseRouter.post("/create-course", isAutheticated, authorizeRoles("admin"), uploadCourse);
courseRouter.put("/edit-course/:id",  isAutheticated, authorizeRoles("admin"), editCourse);
courseRouter.get("/get-course/:id",  isAutheticated, getSingleCourse);
courseRouter.get("/get-courses",  getAllCourses);
courseRouter.get("/get-course-content/:id", isAutheticated, getCourseByUser);
courseRouter.put("/add-question",  isAutheticated, addQuestion);
courseRouter.put("/add-answer",isAutheticated, addAnwser);
//courseRouter.put("/test-question", isAutheticated, createQuestion);
courseRouter.post("/answer-question", isAutheticated, answerQuestion);
courseRouter.put("/add-review/:id", isAutheticated, addReview);
courseRouter.put("/add-reply", isAutheticated,authorizeRoles("admin"), addReplyToReview);
courseRouter.get("/get-admin-all-courses", isAutheticated, authorizeRoles("admin"), getAdminAllCourses);
courseRouter.delete("/delete-course/:id", isAutheticated, authorizeRoles('admin'), deleteCourse);
courseRouter.post("/getVdoCipherOTP",  generateVideoUrl);



export default courseRouter;