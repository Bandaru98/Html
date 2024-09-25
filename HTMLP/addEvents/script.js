
let Youtubelibrary = [
    { All: 'Every Thing', Music: 'Melody', Prayer: 'lord', News: 'Current topic', Telugucinema: 'SS', Newtoyou: 'Recent clicks', Mixes: 'Clumsy', Televisionseries: 'Comedy', Live: 'Running Programme', Gameshows: 'Pubgy', Cartoon: 'Kushi', Worshipmusic: 'Lord I need you', Melodies: 'Sweet', Sendfeedback: 'Either Gud r bad' },
    { All: 'Every Topic', Music: 'fast', Prayer: 'Thanks giving', News: 'Breaking', Telugucinema: 'Comedy', Newtoyou: 'Recent happens', Mixes: 'All', Televisionseries: 'Webseries', Live: 'Cricket', Gameshows: 'Online ludo', Cartoon: 'rhymes', Worshipmusic: 'I surronder', Melodies: 'class', Sendfeedback: 'Either Gud r bad' },
    { All: 'Every notes', Music: 'classic', Prayer: 'Resurrection', News: 'International', Telugucinema: 'Family Entertrainer', Newtoyou: 'Recent topics', Mixes: 'Clumsy', Televisionseries: 'Horror', Live: 'Tv shows', Gameshows: 'Tv shows', Cartoon: 'Play Activities', Worshipmusic: 'Thank you lord', Melodies: 'beat', Sendfeedback: 'Either Gud r bad' }
];

function displayEvents() {
    const itemList = document.getElementById('item-list');
    itemList.innerHTML = '';
    Youtubelibrary.forEach((event, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
    <td>${event.All}</td>
    <td>${event.Music}</td>
    <td>${event.Prayer}</td>
    <td>${event.News}</td>
    <td>${event.Telugucinema}</td>
    <td>${event.Newtoyou}</td>
    <td>${event.Mixes}</td>
    <td>${event.Televisionseries}</td>
    <td>${event.Live}</td>
    <td>${event.Gameshows}</td>
    <td>${event.Cartoon}</td>
    <td>${event.Worshipmusic}</td>
    <td>${event.Melodies}</td>
    <td>${event.Sendfeedback}</td>
    <td>
        <button class='btn btn-success' onclick='editEvents(${index})'>Edit</button>
        <button class='btn btn-danger' onclick='deleteEvents(${index})'>Delete</button>
    </td>`;
        itemList.appendChild(row);
    });
}

// Show modal for adding new events
function showAddModal() {
    const modal = document.getElementById('addModal');
    modal.style.display = 'block';

    const form = document.getElementById('addForm');
    form.reset(); // Clear previous inputs

    form.onsubmit = function (event) {
        event.preventDefault(); // Prevent default form submission

        const newYoutube = {
            All: form.elements['All'].value,
            Music: form.elements['Music'].value,
            Prayer: form.elements['Prayer'].value,
            News: form.elements['News'].value,
            Telugucinema: form.elements['Telugucinema'].value,
            Newtoyou: form.elements['Newtoyou'].value,
            Mixes: form.elements['Mixes'].value,
            Televisionseries: form.elements['Televisionseries'].value,
            Live: form.elements['Live'].value,
            Gameshows: form.elements['Gameshows'].value,
            Cartoon: form.elements['Cartoon'].value,
            Worshipmusic: form.elements['Worshipmusic'].value,
            Melodies: form.elements['Melodies'].value,
            Sendfeedback: form.elements['Sendfeedback'].value
        };

        Youtubelibrary.push(newYoutube);
        modal.style.display = 'none'; // Hide modal
        displayEvents(); // Refresh the table
    };

    // Close modal when clicking on close button or outside modal
    document.getElementById('closeAddModal').onclick = function () {
        modal.style.display = 'none';
    };
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
}

document.getElementById('btn-primary').onclick = function () {
    const modal = document.getElementById('addModal');
    modal.style.display = 'block';

    const form = document.getElementById('addForm');
    form.reset(); // Clear previous inputs

    form.onsubmit = function (event) {
        event.preventDefault(); // Prevent default form submission

        const newYoutube = {
            All: form.elements['All'].value,
            Music: form.elements['Music'].value,
            Prayer: form.elements['Prayer'].value,
            News: form.elements['News'].value,
            Telugucinema: form.elements['Telugucinema'].value,
            Newtoyou: form.elements['Newtoyou'].value,
            Mixes: form.elements['Mixes'].value,
            Televisionseries: form.elements['Televisionseries'].value,
            Live: form.elements['Live'].value,
            Gameshows: form.elements['Gameshows'].value,
            Cartoon: form.elements['Cartoon'].value,
            Worshipmusic: form.elements['Worshipmusic'].value,
            Melodies: form.elements['Melodies'].value,
            Sendfeedback: form.elements['Sendfeedback'].value
        };

        Youtubelibrary.push(newYoutube);
        modal.style.display = 'none'; // Hide modal
        displayEvents(); // Refresh the table
    };

    // Close modal when clicking on close button or outside modal
    document.getElementById('closeAddModal').onclick = function () {
        modal.style.display = 'none';
    };
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
}


function editEvents(index) {
    const modal = document.getElementById('editModal');
    const form = document.getElementById('editForm');

    // Populate form fields with current values
    form.elements['All'].value = Youtubelibrary[index].All;
    form.elements['Music'].value = Youtubelibrary[index].Music;
    form.elements['Prayer'].value = Youtubelibrary[index].Prayer;
    form.elements['News'].value = Youtubelibrary[index].News;
    form.elements['Telugucinema'].value = Youtubelibrary[index].Telugucinema;
    form.elements['Newtoyou'].value = Youtubelibrary[index].Newtoyou;
    form.elements['Mixes'].value = Youtubelibrary[index].Mixes;
    form.elements['Televisionseries'].value = Youtubelibrary[index].Televisionseries;
    form.elements['Live'].value = Youtubelibrary[index].Live;
    form.elements['Gameshows'].value = Youtubelibrary[index].Gameshows;
    form.elements['Cartoon'].value = Youtubelibrary[index].Cartoon;
    form.elements['Worshipmusic'].value = Youtubelibrary[index].Worshipmusic;
    form.elements['Melodies'].value = Youtubelibrary[index].Melodies;
    form.elements['Sendfeedback'].value = Youtubelibrary[index].Sendfeedback;

    // Show modal
    modal.style.display = 'block';

    // Handle form submission
    form.onsubmit = function (event) {
        event.preventDefault(); // Prevent default form submission

        Youtubelibrary[index] = {
            All: form.elements['All'].value,
            Music: form.elements['Music'].value,
            Prayer: form.elements['Prayer'].value,
            News: form.elements['News'].value,
            Telugucinema: form.elements['Telugucinema'].value,
            Newtoyou: form.elements['Newtoyou'].value,
            Mixes: form.elements['Mixes'].value,
            Televisionseries: form.elements['Televisionseries'].value,
            Live: form.elements['Live'].value,
            Gameshows: form.elements['Gameshows'].value,
            Cartoon: form.elements['Cartoon'].value,
            Worshipmusic: form.elements['Worshipmusic'].value,
            Melodies: form.elements['Melodies'].value,
            Sendfeedback: form.elements['Sendfeedback'].value
        };

        modal.style.display = 'none'; // Hide modal
        displayEvents(); // Refresh the table
    };

    // Close modal when clicking on close button or outside modal
    document.querySelector('.close').onclick = function () {
        modal.style.display = 'none';
    };
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
}

function deleteEvents(index) {
    const confirmDelete = confirm('Are you sure you want to delete this item?');
    if (confirmDelete) {
        Youtubelibrary.splice(index, 1);
        displayEvents();
    }
}

displayEvents();
