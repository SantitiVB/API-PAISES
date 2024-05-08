const banderas = document.getElementById('banderas')

document.addEventListener("DOMContentLoaded", function(event) {
    
    fetchData()
});

const fetchData = async () => {
    try {
        const res = await fetch('apicountries.json')
        const data = await res.json()
        banderillas(data)
        formulariocliente(data)

        formularioReal(data)  
        filtrarDatos(data)  

    } catch (error) {
        console.log(error)
    }
}

const banderillas = data => {
    let elementos = ''
    data.forEach(item => {
        elementos += `
        <article class="card">
            <img src="${item.flags.png}" alt="" class="img-fluid">
            <div class ="card-content">
                <h3>${item.name.common}</h3>
                <p>
                    <b>Población: 
                        ${item.population}
                    </b>
                </p>
                <p>
                    <b>Capital: 
                    ${item.capital}
                    </b>
                </p>
                <p>
                    <b>Region: 
                    ${item.region}
 
                    </b>
                </p>
            </div>
        </article>
        `
    });
    banderas.innerHTML = elementos
}