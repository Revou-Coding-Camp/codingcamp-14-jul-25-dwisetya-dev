function submitName() {
  const name = document.getElementById('popup-name').value;
  if (name.trim() !== '') {
    document.getElementById('welcome-user').textContent = name;
    document.getElementById('popup').style.display = 'none';

    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    alert('Nama tidak boleh kosong.');
  }
}

  document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const resultBox = document.getElementById("form-result");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const dob = document.getElementById("dob").value;
    const genderInputs = document.querySelectorAll("input[name='gender']");
    const message = document.getElementById("message").value.trim();

    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
      alert("Nama hanya boleh berisi huruf dan spasi.");
      return;
    }

    if (!dob || new Date(dob) > new Date()) {
      alert("Tanggal lahir tidak valid.");
      return;
    }

    let selectedGender = "";
    for (const input of genderInputs) {
      if (input.checked) {
        selectedGender = input.value;
        break;
      }
    }
    if (!selectedGender) {
      alert("Silakan pilih jenis kelamin.");
      return;
    }

    if (message === "") {
      alert("Pesan tidak boleh kosong.");
      return;
    }

    const currentTime = new Date().toString();

    resultBox.innerHTML = `
      <h3>Pesan Anda</h3>
      <p><strong>Current time:</strong> <br> ${currentTime}</p>
      <p><strong>Nama:</strong><br> ${name}</p>
      <p><strong>Tanggal Lahir:</strong><br> ${dob}</p>
      <p><strong>Jenis Kelamin:</strong><br> ${selectedGender}</p>
      <p><strong>Pesan:</strong><br> ${message}</p>
    `;

    resultBox.style.display = "block";
  });
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const check = document.getElementById('check');
    if (check.checked) {
      check.checked = false;
    }
  });
});
