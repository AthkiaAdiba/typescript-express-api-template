import { Router } from 'express';
import { StudyRoutes } from '../modules/study/study.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/study',
    routes: StudyRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.routes));

export default router;
