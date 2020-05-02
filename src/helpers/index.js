import { collatedTasks } from '../constants';

export const getTitle = (projects, projectId) =>
collatedTasks.find(project => project.projectId === projectId);
