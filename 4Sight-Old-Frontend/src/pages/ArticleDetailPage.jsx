import { useParams } from 'react-router-dom';
import { ArticleDetail } from '../components/knowledge';
import { getBlogPostBySlug } from '../data/blogContent1';

const ArticleDetailPage = () => {
  const { slug } = useParams();

  // Get article from centralized blog data
  const article = getBlogPostBySlug(slug);

  return (
    <ArticleDetail
      article={article}
      loading={false}
      error={article ? null : 'Article not found'}
    />
  );
};

export default ArticleDetailPage;
