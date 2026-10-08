export default function Form() {
  return (
    <section id="contact" className="container px-4 py-5">
      <h2 className="pb-2 border-bottom">Hubungi Kami</h2>
      <div className="row g-5 py-5">
        {/* Informasi Kontak */}
        <div className="col-md-5">
          <h3>Mari Terhubung</h3>
          <p className="text-body-secondary">
            Jika memiliki pertanyaan atau ingin mengetahui informasi lebih
            lanjut mengenai BookSales, silakan hubungi kami melalui informasi
            kontak berikut.
          </p>
          <div className="mt-4">
            <p>
              <i className="fa-solid fa-location-dot me-2"></i>
              <strong>Alamat:</strong> Bogor, Jawa Barat
            </p>
            <p>
              <i className="fa-solid fa-envelope me-2"></i>
              <strong>Email:</strong> booksales@mail.com
            </p>
            <p>
              <i className="fa-solid fa-phone me-2"></i>
              <strong>Telepon:</strong> +62 812-3456-7890
            </p>
          </div>
        </div>
        {/* Form */}
        <div className="col-md-7">
          <h3>Kirim Pesan</h3>
          <form>
            <div className="row g-3">
              <div className="col-12">
                <label htmlFor="name" className="form-label">Nama</label>
                <input type="text" className="form-control" id="name" placeholder="Masukkan nama"/>
              </div>
              <div className="col-12">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="nama@gmail.com"/>
              </div>
              <div className="col-12">
                <label htmlFor="message" className="form-label">Pesan</label>
                <textarea className="form-control" id="message" rows="5" placeholder="Tulis pesan Anda..."></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  <i className="fa-solid fa-paper-plane me-2"></i>
                  Kirim Pesan
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}