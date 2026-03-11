import React from "react";
import type { NewsArticle } from "../types/news"

interface Props {
    article: NewsArticle;
}

const SideNewsCard = ({ article }: Props) => {
    // console.log("SideNewsCard 렌더됨:", article.title);
    return (
        <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4 items-start"
        >
            <img
                src={article.urlToImage || "/no-image.png"}
                alt={article.title}
                loading='lazy'
                className="w-45 h-36 object-cover rounded-lg"
            />

            <div>
                <h4 className="text-medium font-semibold group-hover:underling line-clamp-2">
                    {article.title}
                </h4>

                <p className="text-gray-600 text-base mb-3">
                    {article.description}
                </p>

                <p className="text-xs text-gray-600 mt-2">
                    {article.source.name} ·{' '}
                    {new Date(article.publishedAt).toLocaleDateString()}
                </p>
            </div>
        </a>
    )
}

export default React.memo(SideNewsCard);