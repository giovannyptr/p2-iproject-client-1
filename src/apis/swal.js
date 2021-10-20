import Swal from 'sweetalert2'

function alertSuccess (message) {
  const data = {
    title: 'Yeaay!',
    text: message,
    icon: 'success'
  }

  Swal.fire(data)
}

function alertError (message) {
  const data = {
    title: 'Ooops',
    text: message,
    icon: 'error'
  }

  Swal.fire(data)
}

export { 
  alertSuccess,
  alertError }