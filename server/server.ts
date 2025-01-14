import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import salonRoutes from "./src/routes/salonRoutes";
import serviceRoutes from "./src/routes/serviceRoutes";
import galleryRoutes from "./src/routes/galleryRoutes";
import reviewRoutes from "./src/routes/reviewRoutes";
import workingHoursRoutes from "./src/routes/workingHoursRoutes";
import connectDB from "./src/config/db";
import teamMemberRoutes from "./src/routes/teamMemberRoutes";
import socialLinkRoutes from "./src/routes/socialLinkRoutes";
import appointmentRoutes from "./src/routes/appointmentRoutes";


dotenv.config();
const app: Application = express();
const port: number = parseInt(process.env.PORT || "3000", 10);

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (_req: Request, res: Response): void => {
    res.send("<h1>Hello, I'm Marian. I'm a Software Engineer</h1>");
});

app.use("/api/salons", salonRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/working-hours", workingHoursRoutes);
app.use("/api/team-members", teamMemberRoutes);
app.use("/api/social-links", socialLinkRoutes);
app.use("/api/appointments", appointmentRoutes);

app.listen(port, () => {
    console.log(`🚀 Сервер працює за адресою 👉 http://localhost:${port}`);
});