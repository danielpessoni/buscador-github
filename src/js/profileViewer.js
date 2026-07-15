export function renderProfile(userData, userRepos, container) {
    const {
        avatar_url,
        name,
        bio,
        followers,
        following
    } = userData;

    const repositoriesHTML = userRepos.length > 0 ? userRepos.map(repo => {
            const {
                html_url,
                name,
                description,
                stargazers_count,
                forks_count,
                watchers_count,
                language
            } = repo;

            return `
                <a class="repository-link" href="${html_url}" target="_blank" rel="noreferrer">
                    <div class="repository-card">
                        <h3>${name}</h3>
                        <p>${description || "Sem descrição"}</p>
                        <div class="repository-stats">
                            <span class="repository-stat">⭐ ${stargazers_count}</span>
                            <span class="repository-stat">🍴 ${forks_count}</span>
                            <span class="repository-stat">👀 ${watchers_count}</span>
                            <span class="repository-stat">📝 ${language || "N/A"}</span>
                        </div>
                    </div>
                </a>
            `;
        }).join('')
        : `<p>Este usuário não possui repositórios públicos</p>`;

    container.innerHTML = `
        <div class="profile-card">
            <img src="${avatar_url}" alt="Avatar de ${name}" class="profile-avatar">
            <div class="profile-info">
                <h2>${name}</h2>
                <p>${bio || 'Não possui bio cadastrada 😢.'}</p>
            </div>
        </div>

        <div class="profile-counters">
            <div class="followers">
                <h4>👥 Seguidores</h4>
                <span>${followers}</span>
            </div>
            <div class="following">
                <h4>👥 Seguindo</h4>
                <span>${following}</span>
            </div>
        </div>

        <div class="profile-repositories">
            <h2>Repositórios</h2>
            <div class="repositories">
                ${repositoriesHTML}
            </div>
        </div>
    `;
}

export function setLoading(container) {
    container.innerHTML = `<p class="loading">Carregando...</p>`;
}

export function clearProfile(container) {
    container.innerHTML = '';
}