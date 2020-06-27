export const getReposByUserID = (repos, id) => {
    return repos.filter(repo => repo.owner.id === id);
}

export const sortByDate = (a, b) => {
    return new Date(b.updated_at) - new Date(a.updated_at);
} 