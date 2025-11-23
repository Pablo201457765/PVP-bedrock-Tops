// script.js (TODO en minúsculas)
document.addEventListener('DOMContentLoaded', () => {
    // ⚠️ RUTA CRÍTICA: Intenta leer el archivo llamado 'players.json' en la misma carpeta.
    fetch('players.json') 
        .then(response => {
            if (!response.ok) {
                // Si hay un 404 aquí, el error está en el nombre o ubicación de players.json
                throw new Error('No se pudo cargar players.json. Estado: ' + response.status);
            }
            return response.json();
        })
        .then(players => {
            const playerGrid = document.querySelector('.player-grid');
            let htmlContent = '';

            // Aseguramos que solo se muestre el Top 200
            const topPlayers = players.slice(0, 200); 

            topPlayers.forEach(player => {
                // Generamos la lista de fortalezas
                const strengthsHTML = Object.entries(player.strengths)
                    .map(([type, score]) => `
                        <li>
                            <span>${type.toUpperCase().replace('_', ' ')}</span> 
                            <span class="score-value">${score}/5</span>
                        </li>
                    `)
                    .join('');

                // ⚠️ RUTA CRÍTICA: La imagen se busca en la carpeta 'images/'
                htmlContent += `
                    <div class="player-card">
                        <div class="rank-badge" data-rank="${player.rank}">#${player.rank}</div>
                        <img src="${player.skin_image}" alt="${player.name}'s Skin" class="player-skin">
                        
                        <div class="player-info">
                            <h3>${player.name}</h3>
                            <p>Discord ID: <span style="font-weight: bold;">${player.discord_id || 'N/A'}</span></p>
                            
                            <p class="total-score">Puntuación Total: **${player.total_score}**</p>
                            
                            <div class="strengths">
                                <h4>Fortalezas (Max. 5)</h4>
                                <ul>${strengthsHTML}</ul>
                            </div>
                            
                            ${player.proof_video ? 
                                `<a href="${player.proof_video}" target="_blank" class="proof-link">🎥 Ver Jugada Top</a>` :
                                ''
                            }
                        </div>
                    </div>
                `;
            });

            playerGrid.innerHTML = htmlContent;
        })
        .catch(error => {
            console.error('Error al cargar la lista de jugadores:', error);
            document.getElementById('leaderboard').innerHTML = `
                <p class="error" style="color: red; text-align: center;">
                    ❌ **ERROR:** No se pudo cargar el Top. Verifica que el archivo **players.json** exista y esté bien formado.
                </p>`;
        });
});
