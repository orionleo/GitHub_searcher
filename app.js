//search input
let searchUser = document.getElementById("searchUser");


//initialise github
let github = new GitHub;

//initialise UI
let ui = new UI;


//Search input event
searchUser.addEventListener('keyup', (e) => {
    e.preventDefault();

    //Get input text
    let userText = e.target.value;

    if (userText != '') {
        //make http call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    //show alert through ui.js
                    ui.showAlert('User not found', 'alert alert-dismissible alert-danger');
                }
                else {
                    //show profile through ui.js

                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
                // console.log(data);
                // console.log(data.profile);
                // console.log(data.profile.public_repos);
            })
    }
    else {
        //clear profile using ui.js
        ui.clearProfile();

        let currentAlert = document.querySelector('.alert');
        currentAlert.remove();
    }
})