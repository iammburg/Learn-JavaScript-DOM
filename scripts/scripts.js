// Tangkap elemen-elemen tombol
const dogElement = document.querySelector('#dogButton')
const rabbitElement = document.querySelector('#rabbitButton')
const coalaElement = document.querySelector('#coalaButton')
const catElement = document.querySelector('#catButton')

// Tangkap elemen untuk menampilkan jawaban yang salah
const wrongAnswer = document.querySelector('#wrongAnswer')

// Tangkap elemen untuk menampilkan jawaban yang benar
const rightAnswer = document.querySelector('.right-answer')

// Variabel untuk menandai apakah jawaban sudah ditampilkan atau belum
let isAnswerDisplayed = false

// Function untuk tombol dogButton
dogElement.addEventListener('click', function () {
  // Jika belum ada jawaban
  if (isAnswerDisplayed == false) {
    // Membuat elemen h2 untuk jawaban yang salah
    const wrongHeader = document.createElement('h2')
    wrongHeader.textContent = 'Salah! 🐶😂'

    // Menampilkan jawaban yang salah
    wrongAnswer.appendChild(wrongHeader)

    // Update variabel isAnswerDisplayed
    isAnswerDisplayed = true

    console.log(`${isAnswerDisplayed}  dog is displayed first`)

    // Jika jawaban sudah ada
  } else {
    // Hapus jawaban sebelumnya jika ada
    wrongAnswer.innerHTML = ''
    // Hapus jawaban sebelumnya jika ada
    rightAnswer.classList.add('hidden')

    // Membuat elemen h2 untuk jawaban yang salah
    const wrongHeader = document.createElement('h2')
    wrongHeader.textContent = 'Salah! 🐶😂'

    // Menampilkan jawaban yang salah
    wrongAnswer.appendChild(wrongHeader)

    // Update variabel isAnswerDisplayed
    isAnswerDisplayed = true

    console.log(
      `${isAnswerDisplayed}  dog is displayed when there's an answer before`
    )
  }
})

// Function untuk tombol rabbitButton
rabbitElement.addEventListener('click', function () {
  // Jika belum ada jawaban
  if (isAnswerDisplayed == false) {
    // Membuat elemen h2 untuk jawaban yang salah
    const wrongHeader = document.createElement('h2')
    wrongHeader.textContent = 'Salah Wlee! 🐰😝😡'

    // Menampilkan jawaban yang salah
    wrongAnswer.appendChild(wrongHeader)

    // Update variabel isAnswerDisplayed
    isAnswerDisplayed = true

    console.log(`${isAnswerDisplayed}  rabbit is displayed first`)

    // Jika jawaban sudah ada
  } else {
    // Hapus jawaban sebelumnya jika ada
    wrongAnswer.innerHTML = ''
    // Hapus jawaban sebelumnya jika ada
    rightAnswer.classList.add('hidden')

    // Membuat elemen h2 untuk jawaban yang salah
    const wrongHeader = document.createElement('h2')
    wrongHeader.textContent = 'Salah Wlee! 🐰😝😡'

    // Menampilkan jawaban yang salah
    wrongAnswer.appendChild(wrongHeader)

    // Update variabel isAnswerDisplayed
    isAnswerDisplayed = true

    console.log(
      `${isAnswerDisplayed}  rabbit is displayed when there's an answer before`
    )
  }
})

// Function untuk tombol coalaButton
coalaElement.addEventListener('click', function () {
  // Jika belum ada jawaban
  if (isAnswerDisplayed == false) {
    // Membuat elemen h2 untuk jawaban yang salah
    const wrongHeader = document.createElement('h2')
    wrongHeader.textContent = 'Salahh! 🐨😣'

    // Menampilkan jawaban yang salah
    wrongAnswer.appendChild(wrongHeader)

    // Update variabel isAnswerDisplayed
    isAnswerDisplayed = true

    console.log(`${isAnswerDisplayed}  coala is displayed first`)

    // Jika jawaban sudah ada
  } else {
    // Hapus jawaban sebelumnya jika ada
    wrongAnswer.innerHTML = ''
    // Hapus jawaban sebelumnya jika ada
    rightAnswer.classList.add('hidden')

    // Membuat elemen h2 untuk jawaban yang salah
    const wrongHeader = document.createElement('h2')
    wrongHeader.textContent = 'Salahh! 🐨😣'

    // Menampilkan jawaban yang salah
    wrongAnswer.appendChild(wrongHeader)

    // Update variabel isAnswerDisplayed
    isAnswerDisplayed = true

    console.log(
      `${isAnswerDisplayed}  coala is displayed when there's an answer before`
    )
  }
})

// Untuk tombol cat
rightAnswer.classList.add('hidden')
catElement.addEventListener('click', function () {
  // Jika belum ada jawaban
  if (isAnswerDisplayed == false) {
    // menampilkan div dengan image jawaban yang benar
    rightAnswer.classList.remove('hidden')

    // Update variabel isAnswerDisplayed
    isAnswerDisplayed = true

    console.log(`${isAnswerDisplayed}  cat is displayed first`)
  } else {
    // Hapus jawaban sebelumnya jika ada
    wrongAnswer.innerHTML = ''

    // menampilkan div dengan image jawaban yang benar
    rightAnswer.classList.remove('hidden')

    // Update variabel isAnswerDisplayed
    isAnswerDisplayed = true
    console.log(
      `${isAnswerDisplayed}  cat is displayed when there's an answer before`
    )
  }
})
