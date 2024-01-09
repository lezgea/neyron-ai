import BlogDetail from './blogDetail';

const BlogDetailPage = ({ params }: { params: { id: number } }) => {
  return (
    <section id="blog-detail" className="container">
      <BlogDetail params={params} />
    </section>
  );
};

export default BlogDetailPage;
