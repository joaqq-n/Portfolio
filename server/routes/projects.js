import { Router } from 'express';
import { getAllProjects, getProjectById, createProject } from '../controllers/projectsController.js';

const router = Router();

router.get('/', getAllProjects);
router.get('/:id', getProjectById);
router.post('/', createProject);

export default router;
