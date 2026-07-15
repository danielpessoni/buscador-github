import { fetchGitHubUser } from './githubApi.js';
import { renderProfile } from './profileViewer.js';

const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.getElementById('profile-results');

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value;
    if (!userName) {
        alert('Por favor, digite um nome de usuário do GitHub.');
        profileResults.innerHTML = "";
        return;
    }
    profileResults.innerHTML = `<p class="loading">Carregando...</p>`;
    try {
        const userData = await fetchGitHubUser(userName);
        renderProfile(userData, profileResults);
    } catch (error) {
        console.error('Erro ao buscar o perfil do usuário:', error);
        alert('Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.');
        profileResults.innerHTML = "";
    }
});