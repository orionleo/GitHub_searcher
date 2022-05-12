class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    //Show profile func
    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row">
            <div class="col-md-3">
                <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
                <a href="${user.html_url}" style="margin:auto; width:100%;" target="_blank" class="btn btn-primary btn-block mb-4 container">View Profile</a>
            </div>
            <div class="col md-9">
                <span class="badge bg-primary">Public Repos: ${user.public_repos}</span>
                <span class="badge bg-secondary">Public Gists: ${user.public_gists}</span>
                <span class="badge bg-success">Followers: ${user.followers}</span> 
                <span class="badge bg-info">Following: ${user.following}</span> 
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item">
                        Company:${user.company}
                    </li>
                    <li class="list-group-item">
                        Website/Blog:${user.blog}
                    </li>
                    <li class="list-group-item">
                        Location: ${user.location}
                    </li>
                    <li class="list-group-item">
                        Member Since :${user.created_at}
                    </li>
                </ul>
            </div>
        </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `;

        document.getElementById('foot').style.position='sticky';
        document.getElementById('foot').style.bottom = 0;
        document.getElementById('foot').style.width = 100;
        document.getElementById('foot').style.color = 'white';
        
    }

    //Show repos
    showRepos(repos){
        let output=``;

        repos.forEach(function(repo){
            output+= `
            <div class = "card card-body mb-2">
            <div class = "row">
            <div class = "col-md-6">
            <a href = "${repo.html_url}" target = "_blank"> ${repo.name}</a>
            </div>
            <div class = "col-md-6">
            <span class="badge bg-primary">Public Repos: ${repo.stargazers_count}</span>
                <span class="badge bg-secondary">Public Gists: ${repo.watchers_count}</span>
                <span class="badge bg-success">Forks: ${repo.forks_count}</span> 
            
            </div>
            </div>
            </div>
            `
        });

        //output repos
        document.getElementById(`repos`).innerHTML = output;
    }
    
    //Clear Profile function
    clearProfile(){
        this.profile.innerHTML=``;
        document.getElementById('foot').style.position='absolute';
        document.getElementById('foot').style.bottom = 0;
        document.getElementById('foot').style.width = 100;
        document.getElementById('foot').style.color = 'white';
    }
    
    //Show alert func
    showAlert(message,className){

        //clear any remaining alerts
        this.clearAlert();
        //Create div
        let div = document.createElement('div');

        //Add classes
        div.className = className;

        //Add text
        div.appendChild(document.createTextNode(message));

        //Get parent
        let container = document.querySelector('.searchContainer');

        //Get search box
        let search = document.querySelector('.search');

        //insert alert
        container.insertBefore(div,search);

        //Timeout after 3 seconds
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    //clear alert message
    clearAlert(){
        this.clearProfile();
        let currentAlert = document.querySelector('.alert');
        
        if(currentAlert){
            
            currentAlert.remove();
        }
    }
}