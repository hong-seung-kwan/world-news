import axios from 'axios';
import type { NewsResponse } from '../types/news';



export const fetchTopHeadlines = async (category?: string) => {
  const response = await axios.get<NewsResponse>('/api/news', {
    params: {category},
  })

  return response.data;
};
