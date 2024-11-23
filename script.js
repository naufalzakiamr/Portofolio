// Portfolio Section: Fade in images when in viewport
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card-img-top');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    cards.forEach(card => {
        observer.observe(card);
    });

    // Contact Section: Show SweetAlert after form submission
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission
        
        // Using SweetAlert to show the success message
        Swal.fire({
            icon: 'success',
            title: 'Pesan Terkirim',
            text: 'Terima kasih telah menghubungi saya! Saya akan segera merespons.',
        });

        // Optionally, clear the form fields after submission
        document.querySelector('form').reset();
    });

    // Fungsi untuk scroll ke kiri
    const scrollLeftButton = document.getElementById('scroll-left');
    const scrollRightButton = document.getElementById('scroll-right');
    const listboxWrapper = document.getElementById('listbox-wrapper');
    const itemWidth = 200; // Lebar item yang digulirkan
    const totalItems = 5; // Jumlah total item dalam list
    let scrollPosition = 0; // Posisi scroll awal

    scrollLeftButton.addEventListener('click', () => {
        scrollPosition -= itemWidth;
        listboxWrapper.style.transition = 'transform 0.5s ease';
        listboxWrapper.style.transform = `translateX(-${scrollPosition}px)`;
        
        // Jika mencapai item terakhir yang di-clone, reset ke item asli terakhir
        if (scrollPosition <= 0) {
            setTimeout(() => {
                listboxWrapper.style.transition = 'none';
                scrollPosition = totalItems * itemWidth;
                listboxWrapper.style.transform = `translateX(-${scrollPosition}px)`;
            }, 100); // Penundaan sesuai durasi transisi
        }
    });

    // Fungsi untuk scroll ke kanan
    scrollRightButton.addEventListener('click', () => {
        scrollPosition += itemWidth;
        listboxWrapper.style.transition = 'transform 0.5s ease';
        listboxWrapper.style.transform = `translateX(-${scrollPosition}px)`;
        
        // Jika mencapai item pertama yang di-clone, reset ke item asli pertama
        if (scrollPosition > (totalItems + 1) * itemWidth) {
            setTimeout(() => {
                listboxWrapper.style.transition = 'none';
                scrollPosition = itemWidth;
                listboxWrapper.style.transform = `translateX(-${scrollPosition}px)`;
            }, 100); // Penundaan sesuai durasi transisi
        }
    });
});
