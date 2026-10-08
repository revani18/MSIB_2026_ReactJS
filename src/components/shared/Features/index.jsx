export default function Features() {
  return (
    <section id="team" className="container px-4 py-5">
      <h2 className="pb-2 border-bottom">Tim Kami</h2>
      <p className="lead text-body-secondary mt-4">
        BookSales dikembangkan oleh tim dengan peran yang berbeda dan saling
        bekerja sama untuk menciptakan website yang menarik, mudah digunakan,
        dan nyaman bagi para pembaca.
      </p>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        {/* Team 1 */}
        <div className="feature col text-center">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3 p-3 rounded">
            <i className="fa-solid fa-user"></i>
          </div>
          <h3 className="fs-2 text-body-emphasis">Revani</h3>
          <p>
            Frontend Developer yang bertanggung jawab dalam membuat dan
            mengembangkan tampilan website BookSales.
          </p>
        </div>
        {/* Team 2 */}
        <div className="feature col text-center">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3 p-3 rounded">
            <i className="fa-solid fa-user"></i>
          </div>
          <h3 className="fs-2 text-body-emphasis">Revani</h3>
          <p>
            UI/UX Designer yang bertanggung jawab dalam merancang tampilan dan
            pengalaman pengguna pada website.
          </p>
        </div>
        {/* Team 3 */}
        <div className="feature col text-center">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3 p-3 rounded">
            <i className="fa-solid fa-user"></i>
          </div>
          <h3 className="fs-2 text-body-emphasis">Revani</h3>
          <p>
            Backend Developer yang bertanggung jawab dalam mengelola data dan
            sistem pada website BookSales.
          </p>
        </div>
      </div>
      <div className="text-center mt-4 mb-3">
        <p className="text-body-secondary">
          Dengan kolaborasi dan kreativitas setiap anggota, kami berusaha
          menghadirkan BookSales yang dapat memberikan pengalaman berbelanja
          buku yang menyenangkan bagi pengguna. Setiap anggota berkontribusi
          sesuai dengan keahlian masing-masing untuk menciptakan website yang
          menarik, informatif, dan mudah digunakan. Kami juga terus berusaha
          memberikan pengalaman yang lebih baik bagi setiap pengunjung
          BookSales.
        </p>
      </div>
    </section>
  );
}