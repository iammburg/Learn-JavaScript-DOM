// Tangkap element id dogButton
const dogElement = document.getElementById('dogButton')

// Tambahkan Event Listener yaitu
dogElement.addEventListener('click', function () {
  // Membuat Element baru dengan method createElement
  const para = document.createElement('p')
  para.innerHTML = 'This is a paragraph.'

  // Gabungkan elemen baru
  document.body.appendChild(para)
})
