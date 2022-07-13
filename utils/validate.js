const validate = (username, email, password, cpassword) => {
  if (!username || !email || !password)
    return 'Ada Yang Belum Diisi'

  if (!validateEmail(email))
    return 'Email Salah'

  if (password.length < 8)
    return 'Password Kurang Dari 8 Karakter'

  if (password !== cpassword)
    return "Password Tidak Sama"
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(email);
}

export default validate