import React from "react";
import type { NewsArticle } from "../types/news"

interface Props {
    article?: NewsArticle;
}

const FeaturedMain = ({ article }: Props) => {
    if (!article) return null;
    return (
        <section className="h-full flex flex-col">
            <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
            >
                <div className="overflow-hidden rounded-lg mb-6">
                    {article.urlToImage ? (
                        <img
                            src={article.urlToImage}
                            alt={article.title}
                            fetchPriority="high"
                            loading="eager"
                            width={1200}
                            height={420}
                            className="w-full h-[420px] object-cover rounded-xl"
                        />
                    ) : (
                        <div className="w-full h-[420px] bg-gray-100 rounded-xl flex items-center justify-center text-gray-600">
                            No Image
                        </div>
                    )}
                </div>
                {/* 텍스트 */}
                <h2 className="text-3xl font-bold leading-tight mb-4">
                    {article.title}
                </h2>

                <p className="text-gray-600 text-base mb-3">
                    {article.description}
                </p>

                <p className="text-sm text-gray-600">
                    {article.source.name} ·{' '}
                    {new Date(article.publishedAt).toLocaleDateString()}
                </p>

            </a>
        </section>
    )
}

export default React.memo(FeaturedMain);