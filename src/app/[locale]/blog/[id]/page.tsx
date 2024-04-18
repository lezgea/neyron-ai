import BlogDetail from './blogDetail';

const BlogDetailPage = ({ params }: { params: { id: number } }) => {
  return (
    <main className="ai-main ai-main--blog">
      <section className="ai-section ai-section--blog">
        <div className="container">
          <div className="ai-section__content">
            <div className="ai-section__body">
              <BlogDetail params={params} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogDetailPage;
