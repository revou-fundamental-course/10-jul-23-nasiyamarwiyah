function calculateBMI() {
    let berat = document.getElementById('berat').value
    let tinggi = document.getElementById('tinggi').value
    let usia = document.getElementById('usia').value
  
    let bmi = (berat / (tinggi*tinggi))
  
    console.log(bmi)
  
    document.getElementById('heading').innerHTML = 'berat badan lebih'
    document.getElementById('bmi-output').innerHTML = bmi.toFixed(2)
  
    if (bmi <= 18.5) {
      document.getElementById('massage').innerHTML = "Kamu kekurangan berat badan"
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      document.getElementById('massage').innerHTML = "Normal"
    } else if (bmi >= 25 && bmi <= 29.9) {
      document.getElementById("massage").innerHTML = "Kelebihan berat badan"
    } else {
      document.getElementById("massage").innerHTML = "Obesitas"
    }

    if(berat,tinggi,usia==""){
      alert('Data harus diisi dan menggunakan angka')
  }}


function reload () {
  window.location.reload('reset')
}
