let jwt = getCookie('jwt');
if(!jwt){
    window.location.replace("http://localhost/Ak_Spag/index.html");
}

let history = document.getElementById('history');

let showHistory = () => {
    let jwt = getCookie('jwt');
    let user = getCookie('user');
    if(!jwt){
        window.location.replace("http://localhost/Ak_Spag/index.html");
    }
    // history.innerHTML = "";
    fetch('http://localhost/Ak_spag/api/controllers/showHistory.php', {
        method: 'POST',
        headers: {
            'Accept':'application/json, text/plain/ */*',
            'Content-type':'application/json'
        },
        body:JSON.stringify({
            userID: user,
            jwt: jwt
        })
    })
    .then(res => res.json())
    .then(data => {
        data.data.forEach(log => {
            history.innerHTML += `
            <div class="col-md-6">
                <div class="pricing-entry d-flex">
                    <div class="img" style="background-image: url(images/image_2.jpg);"></div>
                    <div class="desc pl-3">
                        <div class="d-flex text align-items-center">
                            <h3><span>${log.date}</span></h3>
                            <span class="price">N ${log.amount}</span>
                        </div>
                        <div class="d-block">
                            <p>${log.status} TransactionID: ${log.transactionID}</p>
                        </div>
                    </div>
                </div>
            </div>`
        });
    })
    .catch(err => console.log(err))
}

function getCookie(cname){
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' '){
            c = c.substring(1);
        }
 
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}