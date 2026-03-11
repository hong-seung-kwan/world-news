import { useMemo, useState } from "react";
import Header from "../components/Header";
import NewsList from "../components/NewsList";
import FeaturedMain from "../featured/FeaturedMain";
import { fetchTopHeadlines } from "../api/newsApi";
import type { NewsArticle } from "../types/news";
import SideNewsCard from "../components/SideNewsCard";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const [category, setCategory] = useState<string | undefined>(undefined);
  const { data, isLoading, isError } = useQuery({
    queryKey: ['news', category],
    queryFn: () => fetchTopHeadlines(category),
    staleTime: 1000 * 60 * 5,
    placeholderData: (previousData) => previousData,
  });
  const articles: NewsArticle[] = data?.articles || [];
  const [featured, ...others] = articles;
  const sideArticles = useMemo(
    () => others.slice(0, 3),
    [others]
  );
  const restArticles = useMemo(
    () => others.slice(3),
    [others]
  );

  return (
    <>
      <Header selectedCategory={category} onSelect={setCategory} />

      {!isLoading && !isError && (

        <main className="w-full px-10 mt-16">

          {/* 상단 featured + side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* 왼쪽 메인 */}
            <div className="h-full">
              <FeaturedMain article={featured} />
            </div>

            {/* 오른쪽사이드 */}
            <div className="flex flex-col gap-8">
              {sideArticles.map((article, index) => (
                <SideNewsCard key={index} article={article} />
              ))}
            </div>

          </div>

          {/* 아래 뉴스 */}
          <div className="mt-20">
            <NewsList articles={restArticles} />
          </div>

        </main>
      )}

      {isLoading && (
        <p className="text-center text-gray-400 py-6">
          Loading...
        </p>
      )}

      {isError && (
        <p className="text-center text-red-500 py-6">
          에러 발생
        </p>
      )}
    </>
  );
};

export default Home;
