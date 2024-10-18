// Initial data and possible values
const possibleNames = ['Alice', 'Bob', 'Carol', 'David', 'Eva', 'Frank', 'Grace', 'Henry'];
const possibleOccupations = ['Writer', 'Teacher', 'Programmer', 'Designer', 'Editor', 'Translator'];

let freelancers = [
    { name: 'Alice', occupation: 'Writer', startingPrice: 30 },
    { name: 'Bob', occupation: 'Teacher', startingPrice: 50 }
];

// Function to render freelancers
function renderFreelancers() {
    const list = document.getElementById('freelancers-list');
    list.innerHTML = freelancers.map(freelancer => `
        <tr>
            <td>${freelancer.name}</td>
            <td>${freelancer.occupation}</td>
            <td>$${freelancer.startingPrice}</td>
        </tr>
    `).join('');
}

// Function to update average price
function updateAveragePrice() {
    const average = freelancers.reduce((sum, freelancer) => 
        sum + freelancer.startingPrice, 0) / freelancers.length;
    document.getElementById('average-price').textContent = 
        `Average Starting Price: $${Math.round(average)}`;
}

// Function to generate a random freelancer
function generateFreelancer() {
    const name = possibleNames[Math.floor(Math.random() * possibleNames.length)];
    const occupation = possibleOccupations[Math.floor(Math.random() * possibleOccupations.length)];
    const startingPrice = Math.floor(Math.random() * 50) + 30; // Random price between 30 and 80
    return { name, occupation, startingPrice };
}

// Initial render
renderFreelancers();
updateAveragePrice();

// Add new freelancer every few seconds
setInterval(() => {
    freelancers.push(generateFreelancer());
    renderFreelancers();
    updateAveragePrice();
}, 3000);