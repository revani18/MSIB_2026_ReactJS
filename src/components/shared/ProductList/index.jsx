import { useState } from "react";
import books from "../../../Utils/books";
import styles from "../../../styles/ProductList.module.css";

// tambah buku baru saat klik button tambah buku
const newBookTemplate = {
  title: "Hujan",
  author: "Tere Liye",
  year: 2016,
  description: "Novel tentang sebuah kisah petualangan, refleksi mendalam tentang kehidupan, cinta, kehilangan, dan harapan.",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWyeeGIabPiR5IVZlOKGJWsV-amAp5RAA45dWrzEAXbRfej6aZSovbP_ga&s=10",
  price: "Rp 98.000",
};

export default function ProductList() {
  // Hooks: state data buku.
  const [booksList, setBooksList] = useState([...books]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  // menambahkan data dengan spread operator.
  const handleClick = () => {
    const newBook = {
      ...newBookTemplate,
      id: Math.max(...booksList.map((item) => item.id), 0) + 1,
    };
    setBooksList((prevList) => [...prevList, newBook]);
    alert("Buku baru berhasil ditambahkan!");
  };
  const handleBuy = (book) => {
    setCartCount((prevCount) => prevCount + 1);
    alert(`Buku "${book.title}" ditambahkan ke keranjang!`);
  };
  
  return (
    <>
      <section id="book" className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-8 col-md-10 mx-auto">
            <h1 className="fw-light">Jelajahi Koleksi Buku Kami</h1>
            <p className="lead text-body-secondary">
              Temukan berbagai pilihan buku yang telah kami pilih untuk memenuhi
              kebutuhan setiap pembaca. Mulai dari cerita yang menginspirasi,
              petualangan yang menarik, hingga buku yang menambah pengetahuan dan
              pengembangan diri. BookSales membantu kamu menemukan buku yang
              sesuai dengan minat dan kebutuhanmu.
            </p>
            {/* tombol tambah dan keranjang */}
            <button
              type="button"
              className={`btn btn-primary my-2 ${styles.addButton}`}
              onClick={handleClick}
            >
              <i className="fa-solid fa-plus me-2" aria-hidden="true" />
              Tambah Buku Baru
            </button>
            <span className={`ms-3 ${styles.cartCounter}`} aria-live="polite">
              <i className="fa-solid fa-cart-shopping me-1" aria-hidden="true" />
              Keranjang: {cartCount}
            </span>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {/* menampilkan buku dengan map() */}
            {booksList.map((item) => (
              <div className="col" key={item.id}>
                <article className={`card h-100 ${styles.bookCard}`}>
                  <div className={styles.bookImageWrap}>
                    <img
                      src={item.image}
                      alt={`Sampul buku ${item.title}`}
                      className={styles.bookCover}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.classList.add(styles.bookCoverUnavailable);
                      }}
                    />
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h3 className={`card-title ${styles.bookTitle}`}>{item.title}</h3>
                    <small className="text-body-secondary">Penulis: {item.author}</small>
                    <p className="text-body-secondary small mb-1">
                      Tahun: {item.year}
                    </p>
                    <p className={`card-text mt-2 ${styles.bookDescription}`}>
                      {item.description}
                    </p>
                    <div className="d-flex justify-content-between align-items-center gap-2 mt-auto pt-3">
                      <div className="btn-group" role="group" aria-label={`Aksi untuk ${item.title}`}>
                        {/* tombol lihat dan beli */}
                        <button
                          type="button"
                          className={`btn btn-sm btn-outline-primary ${styles.actionButton}`}
                          onClick={() => setSelectedBook(item)}
                        >
                          <i className="fa-regular fa-eye me-1" aria-hidden="true" />
                          Lihat
                        </button>
                        <button
                          type="button"
                          className={`btn btn-sm btn-primary ${styles.actionButton}`}
                          onClick={() => handleBuy(item)}
                        >
                          <i className="fa-solid fa-cart-plus me-1" aria-hidden="true" />
                          Beli
                        </button>
                      </div>
                      <strong className={styles.bookPrice}>{item.price}</strong>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedBook && (
        <div
          className={styles.modalBackdrop}
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedBook(null);
          }}
        >
          <section
            className={styles.bookModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="book-modal-title"
          >
            <button
              type="button"
              className={styles.modalClose}
              aria-label="Tutup detail buku"
              onClick={() => setSelectedBook(null)}
            >
              &times;
            </button>
            <div className={styles.modalContent}>
              <img src={selectedBook.image} alt={`Sampul ${selectedBook.title}`} />
              <div>
                <p className="text-primary fw-semibold mb-2">DETAIL BUKU</p>
                <h2 id="book-modal-title">{selectedBook.title}</h2>
                <p className="text-body-secondary mb-1">
                  Penulis: {selectedBook.author}
                </p>
                <p className="text-body-secondary">Tahun terbit: {selectedBook.year}</p>
                <p>{selectedBook.description}</p>
                <p className="fs-5 fw-bold">{selectedBook.price}</p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    handleBuy(selectedBook);
                    setSelectedBook(null);
                  }}
                >
                  <i className="fa-solid fa-cart-plus me-2" aria-hidden="true" />
                  Beli Buku
                </button>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}