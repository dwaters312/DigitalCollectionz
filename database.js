const collection = client.db('game_collection').collection('games');

const newGame = {
    title: 'Game Title',
    description: 'Game Description',
    releaseDate: '2023-01-01',
};

collection.insertOne(newGame, (err, result) => {
    if (err) {
        console.error('Error inserting document:', err);
    } else {
        console.log('Document inserted:', result.insertedId);
    }
});

// Find all documents in the collection
collection.find({}).toArray((err, games) => {
    if (err) {
        console.error('Error fetching documents:', err);
    } else {
        console.log('All games:', games);
    }
});

// Update the document with a specific _id
const filter = { _id: ObjectId('your-game-id') };
const update = {
    $set: { title: 'Updated Title', description: 'Updated Description' },
};

collection.updateOne(filter, update, (err, result) => {
    if (err) {
        console.error('Error updating document:', err);
    } else {
        console.log('Document updated:', result.modifiedCount);
    }
});

// Delete the document with a specific _id
collection.deleteOne(filter, (err, result) => {
    if (err) {
        console.error('Error deleting document:', err);
    } else {
        console.log('Document deleted:', result.deletedCount);
    }
});

db.createUser(
  {
    user: "myUserAdmin",
    pwd: "abc123",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)

// JavaScript for handling the "+Add" button click

const addGameButton = document.getElementById('add-game-button');
addGameButton.addEventListener('click', () => {
    // You can choose to display a form or a modal for adding a new game
    // For simplicity, we'll create a basic form here

    // Create a form element
    const form = document.createElement('form');
    form.id = 'add-game-form';

    // Input fields for game details
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.placeholder = 'Title';

    const descriptionInput = document.createElement('textarea');
    descriptionInput.placeholder = 'Description';

    const releaseDateInput = document.createElement('input');
    releaseDateInput.type = 'text';
    releaseDateInput.placeholder = 'Release Date';

    // Submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Add Game';

    // Add input fields and submit button to the form
    form.appendChild(titleInput);
    form.appendChild(descriptionInput);
    form.appendChild(releaseDateInput);
    form.appendChild(submitButton);

    // Append the form to the page (you can choose a specific location)
    document.body.appendChild(form);

    // Handle the form submission to send data to the server (implementation not shown here)
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // Send the data to the server to add a new game to the collection
        // You need to implement the server-side logic for adding games
        // After adding the game, you can refresh the game collection or update it on the client side.
    });
});

