// const myBalance  = document.getElementById('my-balance');
// const updatedMyBalance = parseFloat(myBalance.innerText);
// console.log(updatedMyBalance);

// const totalDonations = document.getElementById('total-amount-1');
// const updatedTotalDonations = parseFloat(totalDonations.innerText);
// console.log(updatedTotalDonations);
// const myDonation = Number(document.getElementById('donate-amount1').value);
// console.log(myDonation);

// Noakhali Flood
const donateBtn = document.getElementById('donate-btn1').addEventListener('click',function(){

    const myBalance  = document.getElementById('my-balance');
    const updatedMyBalance = parseFloat(myBalance.innerText);
    console.log(updatedMyBalance);

    const totalDonations = document.getElementById('total-amount-1');
    const updatedTotalDonations = parseFloat(totalDonations.innerText);
    console.log(updatedTotalDonations);
    const myDonation = Number(document.getElementById('donate-amount1').value);
    console.log(myDonation);


     // validation
     if(myDonation <= 0 || isNaN(myDonation)){
        alert('invalid amount');
        return;
    }
    if(updatedMyBalance < myDonation){
        alert('You do not have enough balance')
        return;
    }
    // else{
    //     alert('you have successfully donated')
    // }

    // my_modal_1.showModal()

    const newTotalDonations = updatedTotalDonations + myDonation;
    console.log(newTotalDonations);
    totalDonations.innerText = newTotalDonations.toFixed(2);

    const myNewBalance = updatedMyBalance - myDonation;
    console.log(myNewBalance);
    myBalance.innerText = myNewBalance.toFixed(2);



        // calculation history
        const historyContainer = document.getElementById('history-list');

        const historyItem = document.createElement('div');
        historyItem.className = 'bg-white p-3 rounded-md border-l-2 border-indigo-500 mb-2';
    
        historyItem.innerHTML = `
        <p class='text-lg text-grey-500'>${myDonation.toFixed(2)} taka is donated for Flood at Noakhali, Bangladesh.</p>
         <p class='text-xs text-grey-500'> ${new Date().toLocaleString()}</p>
        `;
        historyContainer.appendChild(historyItem);
        // historyContainer.insertBefore(historyItem, historyContainer.firstChild);
        
        // modal call
        my_modal_1.showModal()
})

// feni flood
const donateBtn2 = document.getElementById('donate-btn2').addEventListener('click',function(){

    const myBalance  = document.getElementById('my-balance');
    const updatedMyBalance = parseFloat(myBalance.innerText);
    console.log(updatedMyBalance);

    const totalDonations = document.getElementById('total-amount-2');
    const updatedTotalDonations = parseFloat(totalDonations.innerText);
    console.log(updatedTotalDonations);
    const myDonation = Number(document.getElementById('donate-amount2').value);
    console.log(myDonation);


     // validation
     if(myDonation <= 0 || isNaN(myDonation)){
        alert('invalid amount');
        return;
    }
    if(updatedMyBalance < myDonation){
        alert('You do not have enough balance')
        return;
    }
    // else{
    //     alert('you have successfully donated')
    // }

    // my_modal_1.showModal()

    const newTotalDonations = updatedTotalDonations + myDonation;
    console.log(newTotalDonations);
    totalDonations.innerText = newTotalDonations.toFixed(2);

    const myNewBalance = updatedMyBalance - myDonation;
    console.log(myNewBalance);
    myBalance.innerText = myNewBalance.toFixed(2);



        // calculation history
        const historyContainer = document.getElementById('history-list');

        const historyItem = document.createElement('div');
        historyItem.className = 'bg-white p-3 rounded-md border-l-2 border-indigo-500 mb-2';
    
        historyItem.innerHTML = `
        <p class='text-lg text-grey-500'>${myDonation.toFixed(2)} taka is donated for Flood Relief in Feni,Bangladesh</p>
         <p class='text-xs text-grey-500'> ${new Date().toLocaleString()}</p>
        `;
        historyContainer.appendChild(historyItem);
        // historyContainer.insertBefore(historyItem, historyContainer.firstChild);  

            // modal call
            my_modal_1.showModal()
})

// quota movement
const donateBtn3 = document.getElementById('donate-btn3').addEventListener('click',function(){

    const myBalance  = document.getElementById('my-balance');
    const updatedMyBalance = parseFloat(myBalance.innerText);
    console.log(updatedMyBalance);

    const totalDonations = document.getElementById('total-amount-3');
    const updatedTotalDonations = parseFloat(totalDonations.innerText);
    console.log(updatedTotalDonations);
    const myDonation = Number(document.getElementById('donate-amount3').value);
    console.log(myDonation);


     // validation
     if(myDonation <= 0 || isNaN(myDonation)){
        alert('invalid amount');
        return;
    }
    if(updatedMyBalance < myDonation){
        alert('You do not have enough balance')
        return;
    }
    // else{
    //     alert('you have successfully donated')
    // }

    // my_modal_1.showModal()

    const newTotalDonations = updatedTotalDonations + myDonation;
    console.log(newTotalDonations);
    totalDonations.innerText = newTotalDonations.toFixed(2);

    const myNewBalance = updatedMyBalance - myDonation;
    console.log(myNewBalance);
    myBalance.innerText = myNewBalance.toFixed(2);



        // calculation history
        const historyContainer = document.getElementById('history-list');

        const historyItem = document.createElement('div');
        historyItem.className = 'bg-white p-3 rounded-md border-l-2 border-indigo-500 mb-2';
    
        historyItem.innerHTML = `
        <p class='text-lg text-grey-500'>${myDonation.toFixed(2)} taka is donated for Aid for Injured in the Quota Movement</p>
         <p class='text-xs text-grey-500'> ${new Date().toLocaleString()}</p>
        `;
        historyContainer.appendChild(historyItem);
        // historyContainer.insertBefore(historyItem, historyContainer.firstChild);
        
            // modal call
            my_modal_1.showModal()
})


// history button functionality
const historyButton = document.getElementById('history-button');
const donationButton = document.getElementById('donation-button');

historyButton.addEventListener('click',function (){
    historyButton.classList.add('bg-btn-bg','font-semibold');
    // historyButton.classList.remove('border-2','rounded-lg');
    donationButton.classList.remove('bg-btn-bg','font-semibold');
    donationButton.classList.add('border-2','rounded-lg')

    document.getElementById('cards').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
})

// donation button functionality
donationButton.addEventListener('click',function (){

    donationButton.classList.add('bg-btn-bg','font-semibold');
    historyButton.classList.remove('bg-btn-bg');

    document.getElementById('cards').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
})

// page swap
const blogPage = document.getElementById('blog');
blogPage.addEventListener('click', function(){
    window.location.href = './blog.html';
});
const homePage = document.getElementById('home');
homePage.addEventListener('click',function(){
    console.log('home btn clicked');
    window.location.href = './test.html';
})

