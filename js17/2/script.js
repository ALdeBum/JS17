document.addEventListener('DOMContentLoaded', () => {
    const userList = document.getElementById('user-list');
    const userDetails = document.getElementById('user-details');
    const userName = document.getElementById('user-name');
    const userEmail = document.getElementById('user-email');
    const userAddress = document.getElementById('user-address');
    const userPhone = document.getElementById('user-phone');
    const userWebsite = document.getElementById('user-website');
    const showPostsButton = document.getElementById('show-posts');
    const postsList = document.getElementById('posts-list');
    
    let selectedUserId = null;

    // Fetch and display users
    function fetchUsers() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                userList.innerHTML = '';
                users.forEach(user => {
                    const userItem = document.createElement('div');
                    userItem.className = 'user-item';
                    userItem.textContent = user.name;
                    userItem.addEventListener('click', () => {
                        displayUserDetails(user);
                    });
                    userList.appendChild(userItem);
                });
            });
    }

    // Display selected user details
    function displayUserDetails(user) {
        selectedUserId = user.id;
        userName.textContent = user.name;
        userEmail.textContent = `Email: ${user.email}`;
        userAddress.textContent = `Address: ${user.address.street}, ${user.address.city}`;
        userPhone.textContent = `Phone: ${user.phone}`;
        userWebsite.textContent = `Website: ${user.website}`;
        userDetails.style.display = 'block';
        postsList.innerHTML = '';
    }

    // Show posts for the selected user
    function showUserPosts() {
        if (selectedUserId) {
            fetch(`https://jsonplaceholder.typicode.com/posts?userId=${selectedUserId}`)
                .then(response => response.json())
                .then(posts => {
                    postsList.innerHTML = '';
                    posts.forEach(post => {
                        const postItem = document.createElement('div');
                        postItem.className = 'post-item';
                        postItem.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
                        postsList.appendChild(postItem);
                    });
                });
        }
    }

    // Event listener for the 'Show posts' button
    showPostsButton.addEventListener('click', showUserPosts);

    // Fetch users when the page loads
    fetchUsers();
});
