document.addEventListener('DOMContentLoaded', () => {
    // La función fetch lee el archivo JSON de la misma carpeta
    fetch('players.json') 
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo cargar players.json. Estado: ' + response.status);
            }
            return response.json();
        })
        .then(players => {
            const playerGrid = document.querySelector('.player-grid');
            let htmlContent = '';

            // Aseguramos que solo se muestre el Top 200
            const topPlayers = players.slice(0, 200); 

            // Recorre cada jugador en la lista (Top 1 al 200)
            topPlayers.forEach(player => {
                // Generamos la lista de fortalezas (Mazo, Crystal, etc.)
                const strengthsHTML = Object.entries(player.strengths)
                    // Formatea la clave (ej: combo_pvp -> Combo PVP)
                    .map(([type, score]) => `
                        <li>
                            <span>${type.toUpperCase().replace('_', ' ')}</span> 
                            <span class="score-value">${score}/5</span>
                        </li>
                    `)
                    .join('');

                // 3. Crea el código HTML para la tarjeta del jugador
                // Usamos el atributo data-rank para el CSS
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

            // 4. Inserta todo el contenido en la cuadrícula (grid)
            playerGrid.innerHTML = htmlContent;
        })
        .catch(error => {
            console.error('Error al cargar la lista de jugadores:', error);
            // Mensaje de error para el usuario
            document.getElementById('leaderboard').innerHTML = '<p class="error">❌ Lo sentimos, no se pudo cargar el Top 200. Revisa el archivo players.json.</p>';
        });
});
