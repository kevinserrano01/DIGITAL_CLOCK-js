let clock = () => {
    let date = new Date()
    let month = date.getMonth()
    let hrs = date.getHours()
    let mins = date.getMinutes()
    let secs = date.getSeconds()
    let year = date.getFullYear()

    if (hrs == 0) hrs = 12;

    if (hrs > 12) {
        hrs-=12
    }

    hrs = hrs < 10 ? "0" + hrs : hrs
    mins = mins < 10 ? "0" + mins : mins
    secs = secs < 10 ? "0" + secs : secs

    // const dayYmonth = `${day} / ${month}`
    // document.querySelector('.day').innerHTML = dayYmonth

    const time = `${hrs} ${mins} ${secs}`
    document.getElementById("clock").innerHTML = time
    setTimeout(clock, 1000)

    const getAnio = `${year}`
    document.querySelector('.year1').innerHTML = getAnio
}

function getDia(){
    let fecha = new Date()
    let dia = fecha.getDay()

    switch (dia) {
        case 0:
            document.querySelector('.day').innerHTML = 'Domingo'
        break;
        case 1:
            document.querySelector('.day').innerHTML = 'Lunes'
        break;
        case 2:
            document.querySelector('.day').innerHTML = 'Martes'
        break;
        case 3:
            document.querySelector('.day').innerHTML = 'Miercoles'
        break;
        case 4:
            document.querySelector('.day').innerHTML = 'Jueves'
        break;
        case 5:
            document.querySelector('.day').innerHTML = 'Viernes'
        break;
        case 6:
            document.querySelector('.day').innerHTML = 'Sabado'
        break;
    
        default:
            break;
    }
}

clock();
getDia()