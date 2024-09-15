import api from './api';

export const fetchProjects = async () => {
  const response = await api.get('/projects/');
  return response.data;
};

export const fetchBlogPosts = async () => {
  const response = await api.get('/blogposts/');
  return response.data;
};
