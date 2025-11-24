* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
    color: #ffffff;
    overflow: hidden;
}

/* Pantalla de carga */
#loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

#loading-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Contenedor principal */
#app {
    display: none;
    height: 100vh;
    flex-direction: column;
}

/* Header */
.header {
    background: linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%);
    padding: 20px;
    text-align: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
}

.header h1 {
    font-size: 24px;
    background: linear-gradient(45deg, #4CAF50, #2196F3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.header .version {
    font-size: 12px;
    color: #888;
    margin-top: 5px;
}

/* Contenido principal */
.content {
    flex: 1;
    overflow-y: auto;
    padding: 20px;
    padding-bottom: 80px;
}

/* Página TOPS */
.tops-grid {
    display: grid;
    gap: 15px;
}

.pvp-card {
    background: linear-gradient(135deg, #2d2d2d 0%, #232323 100%);
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.4);
    border: 2px solid #3a3a3a;
    transition: all 0.3s ease;
    cursor: pointer;
}

.pvp-card:hover {
    transform: translateY(-5px);
    border-color: #4CAF50;
    box-shadow: 0 8px 25px rgba(76, 175, 80, 0.3);
}

.pvp-card h2 {
    font-size: 20px;
    margin-bottom: 10px;
    color: #4CAF50;
}

.pvp-card p {
    color: #aaa;
    font-size: 14px;
}

.trophy-icon {
    font-size: 30px;
    margin-bottom: 10px;
}

/* Menú inferior */
.bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%);
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
    box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.5);
    z-index: 1000;
}

.nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    padding: 8px 15px;
    border-radius: 10px;
    transition: all 0.3s ease;
}

.nav-item:hover {
    background: rgba(76, 175, 80, 0.1);
}

.nav-item.active {
    background: rgba(76, 175, 80, 0.2);
}

.nav-item.active .nav-icon {
    color: #4CAF50;
}

.nav-icon {
    font-size: 24px;
    margin-bottom: 5px;
    color: #888;
    transition: color 0.3s ease;
}

.nav-label {
    font-size: 11px;
    color: #888;
}

.nav-item.active .nav-label {
    color: #4CAF50;
}

/* Popup/Modal */
.popup-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 9998;
    justify-content: center;
    align-items: center;
}

.popup-overlay.show {
    display: flex;
}

.popup {
    background: linear-gradient(135deg, #2d2d2d 0%, #232323 100%);
    border-radius: 20px;
    padding: 30px;
    max-width: 90%;
    text-align: center;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.7);
    border: 2px solid #4CAF50;
    animation: popupSlide 0.3s ease;
}

@keyframes popupSlide {
    from {
        transform: scale(0.8);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
}

.popup h3 {
    font-size: 22px;
    margin-bottom: 15px;
    color: #FFC107;
}

.popup p {
    font-size: 16px;
    color: #ccc;
    margin-bottom: 20px;
}

.popup-btn {
    background: linear-gradient(45deg, #4CAF50, #2196F3);
    color: white;
    border: none;
    padding: 12px 40px;
    border-radius: 25px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.popup-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 20px rgba(76, 175, 80, 0.4);
}

/* Scrollbar personalizado */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: #1a1a1a;
}

::-webkit-scrollbar-thumb {
    background: #4CAF50;
    border-radius: 10px;
}