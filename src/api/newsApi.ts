import axios from 'axios';
import type { NewsResponse } from '../types/news';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const newsApi = axios.create({
  baseURL: 'https://newsapi.org/v2',
});

export const fetchTopHeadlines = async (category?: string) => {
  const response = await newsApi.get<NewsResponse>('/top-headlines', {
    params: {
      country: 'us',
      category,
      pageSize: 30,
      apiKey: API_KEY,
    },
  });

  return response.data;
};
