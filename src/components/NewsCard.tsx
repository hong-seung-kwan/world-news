// import type { NewsArticle } from '../types/news';

// interface Props {
//   article: NewsArticle;
// }

// const NewsCard = ({ article }: Props) => {
//   return (
//     <a
//       href={article.url}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="block max-w-3xl mx-auto border-b py-6 hover:bg-gray-50 transition"
//     >
//       {article.urlToImage && (
//         <img
//           src={article.urlToImage}
//           alt={article.title}
//           className="w-full h-64 object-cover rounded mb-4"
//           onError={(e) =>
//             (e.currentTarget.src = '/no-image.png')
//           }
//         />
//       )}

//       <h2 className="text-xl font-semibold mb-2">
//         {article.title}
//       </h2>

//       <p className="text-sm text-gray-500">
//         {article.source.name}
//         {article.publishedAt &&
//           ` · ${new Date(article.publishedAt).toLocaleDateString()}`}
//       </p>
//     </a>
//   );
// };

// export default NewsCard;
