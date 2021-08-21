const name = document.getElementById('name')
const email = document.getElementById('email')
const company = document.getElementById('company')
const dipartment = document.getElementById('department')

const submit = document.getElementById('submit')
const showData = document.getElementsByClassName('btnHover1')
const tbody = document.getElementById('tbody')

submit.addEventListener('click', function (e) {
    e.preventDefault()
    if (name.value == '' && email.value == '' && company.value == '' && dipartment.value == '') {
        alert('Please Enter all data')
    } else {

        const TR = document.createElement('tr')

        const tdName = document.createElement('td')
        tdName.innerHTML = name.value
        TR.appendChild(tdName)


        const tdEmail = document.createElement('td')
        tdEmail.innerHTML = email.value
        TR.appendChild(tdEmail)

        const tdCompany = document.createElement('td')
        tdCompany.innerHTML = company.value
        TR.appendChild(tdCompany)

        const tdDepartment = document.createElement('td')
        tdDepartment.innerHTML = department.value
        TR.appendChild(tdDepartment)

        tbody.appendChild(TR)

        name.value=''
        email.value = ''
        company.value= ''
        department.value= ''
    }
})

