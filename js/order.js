const mod = document.getElementById('mod');
const message = document.getElementById('message');
const form = document.getElementById('form');

let closeModal = () => {
    mod.style.display = 'none';
}
const a = `<h3 style="color: black;">1/10</h3><br><img class="icons" src="fonts/covid/svg/globe.svg"><br>
<div class="adjust">
    <h3 class="head" style="animation: pop 300ms ease-in-out; color: black;">Did you just return from a flagged country?(Country with known cases of the virus)</h3><br>
    <div style="display: flex; justify-content: center; align-items: center;">
        <div class="btn yes" onclick="nob(1)">Yes</div>
        <div class="btn no" onclick="nob(0)">No</div>
    </div>
</div>`;
const b = `<h3 style="color: black;">2/10</h3><br><img class="icons" src="fonts/covid/svg/travelling.svg"><br>
<div class="adjust">
    <h3 class="head" style="animation: pop 300ms ease-in-out; color: black;">Have you been in contact with anyone with COVID-19 infection?</h3><br>
    <div style="display: flex; justify-content: center; align-items: center;">
        <div class="btn yes" onclick="noc(1)">Yes</div>
        <div class="btn no" onclick="noc(0)">No</div>
    </div>
</div>`;
const c = `<h3 style="color: black;">3/10</h3><br><img class="icons" src="fonts/covid/svg/avoid-crowds.svg"><br>
<div class="adjust">
    <h3 class="head" style="animation: pop 300ms ease-in-out; color: black;">Have you been in any crowded environment in the last 7 days?</h3><br>
    <div style="display: flex; justify-content: center; align-items: center;">
        <div class="btn yes" onclick="no1(1)">Yes</div>
        <div class="btn no" onclick="no1(0)">No</div>
    </div>
</div>`;
const q1 = `<h3 style="color: black;">4/10</h3><br><img class="icons" src="fonts/covid/svg/fever.svg"><br>
<div class="adjust">
    <h3 class="head" style="animation: pop 300ms ease-in-out; color: black;">Do you think you have or have had a fever in the past few days (chills, sweating)?</h3><br>
    <div style="display: flex; justify-content: center; align-items: center;">
        <div class="btn yes" onclick="no2(1)">Yes</div>
        <div class="btn no" onclick="no2(0)">No</div>
    </div>
</div>`;
const q2 = `<h3 style="color: black;">5/10</h3><br><img class="icons" src="fonts/covid/svg/006-cough.svg"><br>
<div class="adjust">
    <h3 class="head" style="animation: pop 300ms ease-in-out; color: black;">In the past few days, do you have a cough or an increase in your usual cough?</h3><br>
    <div style="display: flex; justify-content: center; align-items: center;">
        <div class="btn yes" onclick="no3(1)">Yes</div>
        <div class="btn no" onclick="no3(0)">No</div>
    </div>
</div>`;
const q3 = `<h3 style="color: black;">6/10</h3><br><img class="icons" src="fonts/covid/svg/sore-throat.svg"><br>
<div class="adjust">
    <h3 class="head" style="animation: pop 300ms ease-in-out; color: black;">Do you have a sore throat?</h3><br>
    <div style="display: flex; justify-content: center; align-items: center;">
        <div class="btn yes" onclick="no4(1)">Yes</div>
        <div class="btn no" onclick="no4(0)">No</div>
    </div>
</div>`;
const q4 = `<h3 style="color: black;">7/10</h3><br><img class="icons" src="fonts/covid/svg/diarrhea.svg"><br>
<div class="adjust">
    <h3 class="head" style="animation: pop 300ms ease-in-out; color: black;">In the past 24hrs, have you had diarrhea with at least 3 stools?</h3><br>
    <div style="display: flex; justify-content: center; align-items: center;">
        <div class="btn yes" onclick="no5(1)">Yes</div>
        <div class="btn no" onclick="no5(0)">No</div>
    </div>
</div>`;
const q5 = `<h3 style="color: black;">8/10</h3><br><img class="icons" src="fonts/covid/svg/fatigue.svg"><br>
<div class="adjust">
    <h3 class="head" style="animation: pop 300ms ease-in-out; color: black;">In recent days, have you been unusually tired?</h3><br>
    <div style="display: flex; justify-content: center; align-items: center;">
        <div class="btn yes" onclick="no6(1)">Yes</div>
        <div class="btn no" onclick="no6(0)">No</div>
    </div>
</div>`;
const q6 = `<h3 style="color: black;">9/10</h3><br><img class="icons" src="fonts/covid/svg/restaurant.svg"><br>
<div class="adjust">
    <h3 class="head" style="animation: pop 300ms ease-in-out; color: black;">Have you been unable to eat or drink for 24hrs or more?</h3><br>
    <div style="display: flex; justify-content: center; align-items: center;">
        <div class="btn yes" onclick="no7(1)">Yes</div>
        <div class="btn no" onclick="no7(0)">No</div>
    </div>
</div>`;
const q7 = `<h3 style="color: black;">10/10</h3><br><img class="icons" src="fonts/covid/svg/asthma.svg"><br>
<div class="adjust">
    <h3 class="head" style="animation: pop 300ms ease-in-out; color: black;">In the past 24hrs, have you noticed an unusual shortage of breath when speaking or making a small effort?</h3><br>
    <div style="display: flex; justify-content: center; align-items: center;">
        <div class="btn yes" onclick="final(1)">Yes</div>
        <div class="btn no" onclick="final(0)">No</div>
    </div>
</div>`;
// const q8 = `<h3 style="color: black;">11/24</h3><br><img class="icons" src="fonts/covid/svg/fatigue (1).svg"><br>
// <div class="adjust">
//     <h3 class="head" style="animation: pop 300ms ease-in-out; color: black;">Does this fatigue force you to rest for more than half the day?</h3><br>
//     <div style="display: flex; justify-content: center; align-items: center;">
//         <div class="btn yes" onclick="no9(1)">Yes</div>
//         <div class="btn no" onclick="no9(0)">No</div>
//     </div>
// </div>`;
// const q9 = `<h3 style="color: black;">12/24</h3><br><img class="icons" src="fonts/covid/svg/restaurant.svg"><br>
// <div class="adjust">
//     <h3 class="head" style="animation: pop 300ms ease-in-out; color: black;">Have you been unable to eat or drink for 24hrs or more?</h3><br>
//     <div style="display: flex; justify-content: center; align-items: center;">
//         <div class="btn yes" onclick="no10(1)">Yes</div>
//         <div class="btn no" onclick="no10(0)">No</div>
//     </div>
// </div>`;
// const q10 = `<h3 style="color: black;">13/24</h3><br><img class="icons" src="fonts/covid/svg/asthma.svg"><br>
// <div class="adjust">
//     <h3 class="head" style="animation: pop 300ms ease-in-out; color: black;">In the past 24hrs, have you noticed an unusual shortage of breath when speaking or making a small effort?</h3><br>
//     <div style="display: flex; justify-content: center; align-items: center;">
//         <div class="btn yes" onclick="no11(1)">Yes</div>
//         <div class="btn no" onclick="no11(0)">No</div>
//     </div>
// </div>`;
// const q11 = `<h3 style="color: black;">14/24</h3><br><img class="icons" src="fonts/covid/svg/age-limit.svg"><br>
// <div class="adjust">
//     <h3 class="head" style="animation: pop 300ms ease-in-out; color: black;">What is your age? (This is to calculate a specific risk factor)</h3><br>
//     <input class="input-group" id='age'></input><br>
//     <div style="display: flex; justify-content: center; align-items: center;">
//         <div class="btn yes" onclick="no12(1)">Continue</div>
//     </div>
// </div>`;
// const q12 = `<h3 style="color: black;">15/24</h3><br><img class="icons" src="fonts/covid/svg/kitchen-scale.svg"><br>
// <div class="adjust">
//     <h3 class="head" style="animation: pop 300ms ease-in-out; color: black;">What is your weight(Kg)? (This is to calculate a specific risk factor)</h3><br>
//     <input class="input-group" id='weight'></input><br>
//     <div style="display: flex; justify-content: center; align-items: center;">
//         <div class="btn yes" onclick="no13(1)">Continue</div>
//     </div>
// </div>`;
// const q13 = `<h3 style="color: black;">16/24</h3><br><img class="icons" src="fonts/covid/svg/blood-pressure.svg"><br>
// <div class="adjust">
//     <h3 class="head" style="animation: pop 300ms ease-in-out; color: black;">Do you have unbalanced high blood pressure? or do you have any heart or vascular disease? or are you taking cardiological treatment?</h3><br>
//     <div style="display: flex; justify-content: center; align-items: center;">
//         <div class="btn yes" onclick="no14(1)">Yes</div>
//         <div class="btn no" onclick="no14(0)">No</div>
//         <div class="btn idk" onclick="no14(0)">I don't know</div>
//     </div>
// </div>`;
// const q14 = `<h3 style="color: black;">17/24</h3><br><img class="icons" src="fonts/covid/svg/diabetes.svg"><br>
// <div class="adjust">
//     <h3 class="head" style="animation: pop 300ms ease-in-out; color: black;">Are you diabetic?</h3><br>
//     <div style="display: flex; justify-content: center; align-items: center;">
//         <div class="btn yes" onclick="no15(1)">Yes</div>
//         <div class="btn no" onclick="no15(0)">No</div>
//     </div>
// </div>`;
// const q15 = `<h3 style="color: black;">18/24</h3><br><img class="icons" src="fonts/covid/svg/cancer.svg"><br>
// <div class="adjust">
//     <h3 class="head" style="animation: pop 300ms ease-in-out; color: black;">Do you have or have you had cancer?</h3><br>
//     <div style="display: flex; justify-content: center; align-items: center;">
//         <div class="btn yes" onclick="no16(1)">Yes</div>
//         <div class="btn no" onclick="no16(0)">No</div>
//     </div>
// </div>`;
// const q16 = `<h3 style="color: black;">19/24</h3><br><img class="icons" src="fonts/covid/svg/respiratory-system.svg"><br>
// <div class="adjust">
//     <h3 class="head" style="animation: pop 300ms ease-in-out; color: black;">Do you have respiratory disease? or are you followed by a pulmonologist?</h3><br>
//     <div style="display: flex; justify-content: center; align-items: center;">
//         <div class="btn yes" onclick="no17(1)">Yes</div>
//         <div class="btn no" onclick="no17(0)">No</div>
//     </div>
// </div>`;
// const q17 = `<h3 style="color: black;">20/24</h3><br><img class="icons" src="fonts/covid/svg/kidney.svg"><br>
// <div class="adjust">
//     <h3 class="head" style="animation: pop 300ms ease-in-out; color: black;">Do you have chronic kidney disease on dialysis?</h3><br>
//     <div style="display: flex; justify-content: center; align-items: center;">
//         <div class="btn yes" onclick="no18(1)">Yes</div>
//         <div class="btn no" onclick="no18(0)">No</div>
//     </div>
// </div>`;
// const q18 = `<h3 style="color: black;">21/24</h3><br><img class="icons" src="fonts/covid/svg/hepatitis.svg"><br>
// <div class="adjust">
//     <h3 class="head" style="animation: pop 300ms ease-in-out; color: black;">Do you have chronic liver disease?</h3><br>
//     <div style="display: flex; justify-content: center; align-items: center;">
//         <div class="btn yes" onclick="no19(1)">Yes</div>
//         <div class="btn no" onclick="no19(0)">No</div>
//     </div>
// </div>`;
// const q19 = `<h3 style="color: black;">22/24</h3><br><img class="icons" src="fonts/covid/svg/woman.svg"><br>
// <div class="adjust">
//     <h3 class="head" style="animation: pop 300ms ease-in-out; color: black;">Are you pregnant?</h3><br>
//     <div style="display: flex; justify-content: center; align-items: center;">
//         <div class="btn yes" onclick="no20(1)">Yes</div>
//         <div class="btn no" onclick="no20(0)">No</div>
//     </div>
// </div>`;
// const q20 = `<h3 style="color: black;">23/24</h3><br><img class="icons" src="fonts/covid/svg/immunity.svg"><br>
// <div class="adjust">
//     <h3 class="head" style="animation: pop 300ms ease-in-out; color: black;">Do you have a disease known to lower your immune system?</h3><br>
//     <div style="display: flex; justify-content: center; align-items: center;">
//         <div class="btn yes" onclick="no21(1)">Yes</div>
//         <div class="btn no" onclick="no21(0)">No</div>
//     </div>
// </div>`;
// const q21 = `<h3 style="color: black;">24/24</h3><br><img class="icons" src="fonts/covid/svg/examination.svg"><br>
// <div class="adjust">
//     <h3 class="head" style="animation: pop 300ms ease-in-out; color: black;">Are you taking immunosuppressive therapy?</h3><br>
//     <div style="display: flex; justify-content: center; align-items: center;">
//         <div class="btn yes" onclick="final(1)">Yes</div>
//         <div class="btn no" onclick="final(0)">No</div>
//     </div>
// </div>`;

let yes = 0;

let start = () => {
    document.getElementById('container').innerHTML = a;
}

let nob = (id) => {
    if(id == 0){
        document.getElementById('container').innerHTML = b;
    }else{
        yes += 30;
        document.getElementById('container').innerHTML = b;
    }   
}

let noc = (id) => {
    if(id == 0){
        document.getElementById('container').innerHTML = c;
    }else{
        yes += 55;
        document.getElementById('container').innerHTML = c;
    }   
}

let no1 = (id) => {
    if(id == 0){
        document.getElementById('container').innerHTML = q1;
    }else{
        yes += 5;
        document.getElementById('container').innerHTML = q1;
    }   
}

let no2 = (id) => {
    if(id == 0){
        document.getElementById('container').innerHTML = q2;
    }else{
        yes += 10;
        document.getElementById('container').innerHTML = q2;
    }   
}

let no3 = (id) => {
    if(id == 0){
        document.getElementById('container').innerHTML = q3;
    }else{
        yes += 5;
        document.getElementById('container').innerHTML = q3;
    }  
}

let no4 = (id) => {
    if(id == 0){
        document.getElementById('container').innerHTML = q4;
    }else{
        yes += 5;
        document.getElementById('container').innerHTML = q4;
    }   
}

let no5 = (id) => {
    if(id == 0){
        document.getElementById('container').innerHTML = q5;
    }else{
        yes += 5;
        document.getElementById('container').innerHTML = q5;
    }   
}

let no6 = (id) => {
    if(id == 0){
        document.getElementById('container').innerHTML = q6;
    }else{
        yes += 5;
        document.getElementById('container').innerHTML = q6;
    }   
}

let no7 = (id) => {
    if(id == 0){
        document.getElementById('container').innerHTML = q7;
    }else{
        yes += 10;
        document.getElementById('container').innerHTML = q7;
    }   
}

let final = (id) => {
    if(id == 1){
        yes += 10;
        landingpage(yes);
    }
    landingpage(yes);
}

let landingpage = (yes) => {
    if(yes >= 0 && yes <= 27){
        document.getElementById('mainCont').innerHTML = `<br><div class="inner" id="result">
        <h3 style="color: black;">Low Risk !</h3>
        <img class="icons" src="fonts/covid/svg/medal (2).svg"><br>
        <div class="btn stat" onclick="retake()">Retake Test</div><br>
        <div class="btn no" onclick="medicity()">Back to Medicity</div><br>
        <div class="adjust">
            <h3 class="head" style="color: black; font-weight: bolder;">DISCLAIMER!</h3><br>
            <h5 style="color: black;">This displayed recommendation may change according to information from health authorities and researchers. It does not constitute medical advice. If in doubt, ask your doctor or pharmacist for advice.</h5>
        </div>
</div>
`;
    }else if(yes >= 28 && yes <= 54){
        document.getElementById('mainCont').innerHTML = `<br><div class="inner" id="result">
        <h3 style="color: black;">Medium Risk !</h3>
        <img class="icons" src="fonts/covid/svg/medal (3).svg"><br>
        <div class="btn stat" onclick="retake()">Retake Test</div><br>
        <div class="btn no" onclick="medicity()">Back to Medicity</div><br>
        <div class="adjust">
            <h3 class="head" style="color: black; font-weight: bolder;">DISCLAIMER!</h3><br>
            <h5 style="color: black;">This displayed recommendation may change according to information from health authorities and researchers. It does not constitute medical advice. If in doubt, ask your doctor or pharmacist for advice.</h5>
        </div>
</div>
`;
    }else if(yes >= 55){
        document.getElementById('mainCont').innerHTML = `<br><div class="inner" id="result">
        <h3 style="color: black;">High Risk !</h3>
        <img class="icons" src="fonts/covid/svg/medal (1).svg"><br>
        <div class="btn stat" onclick="retake()">Retake Test</div><br>
        <div class="btn no" onclick="medicity()">Back to Medicity</div><br>
        <div class="adjust">
            <h3 class="head" style="color: black; font-weight: bolder;">DISCLAIMER!</h3><br>
            <h5 style="color: black;">This displayed recommendation may change according to information from health authorities and researchers. It does not constitute medical advice. If in doubt, ask your doctor or pharmacist for advice.</h5>
        </div>
</div>
`;
setTimeout(highRiskShow, 500);
    }else{
        document.getElementById('mainCont').innerHTML = `<br><div class="inner" id="result">
        <h3 style="color: black;">Fill the questionnaires!</h3>
        <img class="icons" src="fonts/covid/svg/medal.svg"><br>
        <div class="btn stat" onclick="retake()">Retake Test</div><br>
        <div class="btn no" onclick="medicity()">Back to Medicity</div><br>
        <div class="adjust">
            <h3 class="head" style="color: black; font-weight: bolder;">DISCLAIMER!</h3><br>
            <h5 style="color: black;">This displayed recommendation may change according to information from health authorities and researchers. It does not constitute medical advice. If in doubt, ask your doctor or pharmacist for advice.</h5>
        </div>
</div>`;
    }

}

const highRiskShow = () => {
    message.innerHTML = 'Loading...';
    mod.style.display = 'block';
    message.innerHTML = 'Please Fill This Form';
    form.innerHTML = `<form class="text-center">
    <div class="form-group" style="color: black; text-align: left;">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name1" style="border: 1px solid black; color: black;" placeholder="Enter Name"><br>
        <label for="address">Address</label>
        <input type="text" class="form-control" id="address1" placeholder="Enter Address"><br>
        <label for="phone">Phone Number</label>
        <input type="number" class="form-control" id="phone1" placeholder="Enter Phone Number"><br>
        <div style="display: flex;">
            <div class="btn btn-success" style="margin-right: 10px;" onclick="submitRisk()">Submit</div>
        </div>
    </div>
    </form>
    `;
    mod.style.display = 'none';
}

const clearall = () => {
    document.getElementById('name').value = '';
    document.getElementById('address').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('complain').value = '';
}

const submitRisk = () => {
    if((document.getElementById('name1').value != '') && (document.getElementById('address1').value != '') && (document.getElementById('phone1').value != '')){
        
        fetch('https://covidinfo.me/test/api/controllers/highRisk.php', {
            method: 'POST',
            headers: {
                'Accept':'application/json, text/plain/ */*',
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                name: document.getElementById('name1').value,
                phone: document.getElementById('phone1').value,
                address: document.getElementById('address1').value
            })
        })
        .then(res => res.json())
        .then(data => {
            message.innerHTML = 'Loading...';
            mod.style.display = 'block';
            message.innerHTML = 'Message';
            form.innerHTML = `<form class="text-center">
            <div class="form-group">
                <label for="exampleInputEmail1" class="text-sm">${data.message}</label>
            </div>
            <div class="btn btn-danger" onclick="closeModal()">Close</div>
            </form>`;
        })
        .catch(err => console.log(err));

        mod.style.display = 'block';
        document.getElementById('name1').value = '';
        document.getElementById('address1').value = '';
        document.getElementById('phone1').value = '';
    }else{
        message.innerHTML = 'Error';
        form.innerHTML = `<form class="text-center">
        <div class="form-group">
            <label for="exampleInputEmail1" class="text-sm">No field should be left empty!!!</label>
        </div>
        <div class="btn btn-danger" onclick="highRiskShow()">Close</div>
        </form>`;

        mod.style.display = 'block';
        document.getElementById('name1').value = '';
        document.getElementById('address1').value = '';
        document.getElementById('phone1').value = '';
    }
}

const submit = () => {
    if((document.getElementById('name').value != '') && (document.getElementById('address').value != '') && (document.getElementById('phone').value != '') && (document.getElementById('complain').value != '')){
        
        fetch('./api/controllers/getHelp.php', {
            method: 'POST',
            headers: {
                'Accept':'application/json, text/plain/ */*',
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                address: document.getElementById('address').value,
                complain: document.getElementById('complain').value
            })
        })
        .then(res => res.json())
        .then(data => {
            message.innerHTML = 'Message';
            form.innerHTML = `<form class="text-center">
            <div class="form-group">
                <label for="exampleInputEmail1" class="text-sm">${data.message}</label>
            </div>
            <div class="btn btn-danger" onclick="closeModal()">Close</div>
            </form>`;
        })
        .catch(err => console.log(err));

        mod.style.display = 'block';
        document.getElementById('name').value = '';
        document.getElementById('address').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('complain').value = '';
    }else{
        message.innerHTML = 'Error';
        form.innerHTML = `<form class="text-center">
        <div class="form-group">
            <label for="exampleInputEmail1" class="text-sm">No field should be left empty!!!</label>
        </div>
        <div class="btn btn-danger" onclick="closeModal()">Close</div>
        </form>`;

        mod.style.display = 'block';
        document.getElementById('name').value = '';
        document.getElementById('address').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('complain').value = '';
    }
}

const home = () => {
    window.location.replace("../index.html");
}
const medicity = ()=>{
    window.location.href="https://master.d278zxaxty7gb4.amplifyapp.com/"
}

const retake = () => {
    window.location.replace("./index.html");
}


let showStat = () => {
    window.location.replace("./precautions.html");
    // message.innerHTML = '9ja Statistics';
    // form.innerHTML = `<form class="text-center">
    //     <div class="form-group">
    //         <label for="exampleInputEmail1" class="text-lg">Loading...</label>
    //     </div>
    //     <div class="btn btn-danger" onclick="closeModal()">Close</div>
    //     </form>`;
    // mod.style.display = 'block';
    // fetch('https://covid-193.p.rapidapi.com/statistics', {
    //     method: 'GET',
    //     headers: {
    //         'Accept':'application/json, text/plain/ */*',
    //         'Content-type':'application/json',
    //         "x-rapidapi-host": "covid-193.p.rapidapi.com",
	//         "x-rapidapi-key": "f7946b5bc6mshb135080380e7feap1a7163jsna98420dadb88"
    //     }
    // })
    // .then(res => res.json())
    // .then(data => {
    //     message.innerHTML = '9ja Statistics';
    //     form.innerHTML = `<form class="text-center">
    //     <div class="form-group">
    //         <label for="exampleInputEmail1" class="text-md">New Cases: ${data.response[111].cases.new}</label>
    //     </div>
    //     <div class="form-group">
    //         <label for="exampleInputEmail1" class="text-md">Active Cases: ${data.response[111].cases.active}</label>
    //     </div>
    //     <div class="form-group">
    //         <label for="exampleInputEmail1" class="text-md">Recovered Cases: ${data.response[111].cases.recovered}</label>
    //     </div>
    //     <div class="form-group">
    //         <label for="exampleInputEmail1" class="text-md">Death Cases: ${data.response[111].deaths.total}</label>
    //     </div>
    //     <div class="form-group">
    //         <label for="exampleInputEmail1" class="text-md">Total Cases: ${data.response[111].cases.total}</label>
    //     </div>
    //     <div class="btn btn-danger" onclick="closeModal()">Close</div>
    //     </form>`;
        
    // }).catch(err => console.log(err))
}

let questions = () => {
    window.location.replace("./main.html");
}
let homePage = () => {
    window.location.replace("../index.html");
}