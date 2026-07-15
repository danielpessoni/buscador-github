export function renderProfile(userData, container) {
    const {
        avatar_url,
        name,
        bio,
        followers,
        following
    } = userData;

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
    `;
}

export function setLoading(container) {
    container.innerHTML = `<p class="loading">Carregando...</p>`;
}

export function clearProfile(container) {
    container.innerHTML = '';
}