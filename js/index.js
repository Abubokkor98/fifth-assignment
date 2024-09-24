// function-1:
function getElementById(id){
    return document.getElementById(id);
}

const noakhaliFlood = getElementById('noakhali-flood').innerText;
const feniFlood = getElementById('feni-flood').innerText;
const quotaMovement = getElementById('quata-movement').innerText;

//function-2: History function
function addToHistory(myDonation, noakhaliFlood){
    const historyItem = document.createElement("div");
    historyItem.className =
      "bg-white p-3 rounded-md border-l-2 border-indigo-500 mb-2";
    historyItem.innerHTML = `
    <p class='text-lg text-grey-500'>${myDonation.toFixed(2)} taka is donated for ${noakhaliFlood}</p>
     <p class='text-xs text-grey-500'> ${new Date().toLocaleString()}</p>
    `;
    const historyContainer = document.getElementById("history-list");
    historyContainer.appendChild(historyItem);
  }

// Noakhali Flood Button
const donateBtn = getElementById('donate-btn1').addEventListener('click',function(){

    const myBalance  = getElementById('my-balance');
    const updatedMyBalance = parseFloat(myBalance.innerText);
    const totalDonations = getElementById('total-amount-1');
    const updatedTotalDonations = parseFloat(totalDonations.innerText);
    const myDonation = Number(getElementById('donate-amount1').value);
    
     if(myDonation <= 0 || isNaN(myDonation)){
        alert('invalid amount');
        return;
    }
    if(updatedMyBalance < myDonation){
        alert('You do not have enough balance')
        return;
    }
 
    const newTotalDonations = updatedTotalDonations + myDonation;
    totalDonations.innerText = newTotalDonations.toFixed(2);
    const myNewBalance = updatedMyBalance - myDonation;
    myBalance.innerText = myNewBalance.toFixed(2);

    //   add to history
        addToHistory(myDonation, noakhaliFlood);

     // modal call
     my_modal_1.showModal();
})

// feni flood button
const donateBtn2 = getElementById('donate-btn2').addEventListener('click',function(){

    const myBalance  = getElementById('my-balance');
    const updatedMyBalance = parseFloat(myBalance.innerText);
    const totalDonations = getElementById('total-amount-2');
    const updatedTotalDonations = parseFloat(totalDonations.innerText);
    const myDonation = Number(getElementById('donate-amount2').value);
    
     if(myDonation <= 0 || isNaN(myDonation)){
        alert('invalid amount');
        return;
    }
    if(updatedMyBalance < myDonation){
        alert('You do not have enough balance')
        return;
    }
 
    const newTotalDonations = updatedTotalDonations + myDonation;
    totalDonations.innerText = newTotalDonations.toFixed(2);
    const myNewBalance = updatedMyBalance - myDonation;
    myBalance.innerText = myNewBalance.toFixed(2);

    //   add to history
        addToHistory(myDonation, feniFlood);

     // modal call
     my_modal_1.showModal();
})


// quota movement button
const donateBtn3 = getElementById('donate-btn3').addEventListener('click',function(){

    const myBalance  = getElementById('my-balance');
    const updatedMyBalance = parseFloat(myBalance.innerText);
    const totalDonations = getElementById('total-amount-3');
    const updatedTotalDonations = parseFloat(totalDonations.innerText);
    const myDonation = Number(getElementById('donate-amount3').value);
    
     if(myDonation <= 0 || isNaN(myDonation)){
        alert('invalid amount');
        return;
    }
    if(updatedMyBalance < myDonation){
        alert('You do not have enough balance')
        return;
    }
 
    const newTotalDonations = updatedTotalDonations + myDonation;
    totalDonations.innerText = newTotalDonations.toFixed(2);
    const myNewBalance = updatedMyBalance - myDonation;
    myBalance.innerText = myNewBalance.toFixed(2);

    //   add to history
        addToHistory(myDonation, quotaMovement);

     // modal call
     my_modal_1.showModal();
})


// HISTORY button functionality
const historyButton = document.getElementById('history-button');
const donationButton = document.getElementById('donation-button');

historyButton.addEventListener('click',function (){
    historyButton.classList.add('bg-btn-bg','font-semibold');
    donationButton.classList.remove('bg-btn-bg','font-semibold');
    donationButton.classList.add('border-2','rounded-lg')

    document.getElementById('cards').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
})

// DONATION button functionality
donationButton.addEventListener('click',function (){

    donationButton.classList.add('bg-btn-bg','font-semibold');
    historyButton.classList.remove('bg-btn-bg');

    document.getElementById('cards').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
})

// PAGE SWAP to BLOG Page
const blogPage = document.getElementById('blog');
blogPage.addEventListener('click', function(){
    window.location.href = './blog.html';
});

console.log('index js file connected');

