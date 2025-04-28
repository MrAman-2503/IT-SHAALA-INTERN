document.addEventListener('DOMContentLoaded', () => {
    const addUserBtn = document.getElementById('addUserBtn');
    const userFormContainer = document.getElementById('userFormContainer');
    const closeButton = document.querySelector('.close-button');
    const addUserForm = document.getElementById('addUserForm');
    const userList = document.getElementById('userList');

    addUserBtn.addEventListener('click', () => {
        userFormContainer.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        userFormContainer.style.display = 'none';
        addUserForm.reset(); // Clear the form
    });

    window.addEventListener('click', (event) => {
        if (event.target === userFormContainer) {
            userFormContainer.style.display = 'none';
            addUserForm.reset(); // Clear the form
        }
    });

    addUserForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const role = document.getElementById('role').value;

        if (username && email && role) {
            addUserToList(username, email, role);
            userFormContainer.style.display = 'none';
            addUserForm.reset();
        } else {
            alert('Please fill in all the fields.');
        }
    });

    function addUserToList(username, email, role) {
        const userItem = document.createElement('div');
        userItem.classList.add('user-item');

        const userDetails = document.createElement('div');
        userDetails.classList.add('user-details');
        userDetails.innerHTML = `
            <strong>${username}</strong><br>
            ${email} (${role})
        `;

        const userActions = document.createElement('div');
        userActions.classList.add('user-actions');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            userList.removeChild(userItem);
        });

        userActions.appendChild(deleteButton);
        userItem.appendChild(userDetails);
        userItem.appendChild(userActions);
        userList.appendChild(userItem);
    }
});