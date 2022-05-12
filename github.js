class GitHub {
    constructor() {
        this.client_id = '0972b00761cf6e586a91';
        this.client_secret = 'da60236fa66a08ec8028a4be17a96a7f044caf9b';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        let profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);


        let repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_count}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        let profile = await profileResponse.json();
        let repos = await repoResponse.json();

        return {
            profile,repos
        }
    }

}
