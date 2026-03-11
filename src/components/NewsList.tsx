import React, { useState } from 'react';
import type { NewsArticle } from '../types/news';

interface Props {
  articles: NewsArticle[];
}

const NewsList = ({ articles }: Props) => {

  const [visibleCount, setVisibleCount] = useState(4);

  const bigArticles = articles.slice(0, 2)
  const smallArticles = articles.slice(2, 2 + visibleCount);

  return (
    <section className="px-6">
      {/* <h2 className="text-2xl font-bold mb-12">
        Latest News
      </h2> */}
      {/* 큰뉴 */}
      <div className='grid grid-cols-2 md:grid-cols-2 gap-10 mb-16'>
        {bigArticles.map((article, index) => (
          <a
            key={index}
            href={article.url}
            target='_blank'
            rel='noopener noreferrer'
            className='group'
          >
            <img
              src={article.urlToImage || "/no-image.png"}
              alt={article.title}
              loading='lazy'
              className='w-full aspect-[16/9] object-cover rounded-xl'
            />

            <div className='mt-4'>
              <p className='text-sm text-gray-600 mb-2'>
                {article.source.name}
              </p>

              <h3 className='text-xl font-semibold group-hover:underline'>
                {article.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
      {/* 작뉴 */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>

        {smallArticles.map((article, index) => (
          <a
            key={index}
            href={article.url}
            target='_blank'
            rel='noopener noreferrer'
            className='group transition transform hover:-translate-y-1 duration-200'
          >
            <img
              src={article.urlToImage || "/no-image.png"}
              alt={article.title}
              loading='lazy'
              className='w-full aspect-[16/9] object-cover rounded-lg'
            />

            <div className='mt-3'>
              <p className='text-xs text-gray-600 mb-1'>
                {article.source.name}
              </p>

              <h3 className='text-sm font-semibold line-clamp-2 '>
                {article.title}
              </h3>
            </div>
          </a>
        ))}
      </div>

      <div className='flex justify-center mt-12'>
        <button
          onClick={() => setVisibleCount(prev => prev + 4)}
          className='px-6 py-3 border rounded-md hover:bg-gray-100 transition mb-2'
        >
          Show More
        </button>
      </div>

    </section>
  );
};

export default React.memo(NewsList);
