* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    -webkit-tap-highlight-color: transparent;
}

html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

body {
    background: #1a1a1a;
    color: #ffffff;
}

/* Pantalla de carga */
#loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000000;
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

.loading-fallback {
    position: absolute;
    text-align: center;
    color: white;
}

.loading-fallback h2 {
    font-size: 28px;
    margin-bottom: 10px;
}

.loading-fallback p {
    font-size: 16px;
    color: #aaa;
}

/* Contenedor principal */
#app {
    display: none;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
}

#app.show {
    display: flex;
}

/* Header */
.header {
    background: linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%);
    padding: 20px;
    text-align: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
    flex-shrink: 0;
}

.header h1 {
    font-size: 22px;
    font-weight: bold;
    background: linear-gradient(45deg, #4CAF50, #2196F3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 5px;
}

.header .version {
    font-size: 12px;
    color: #888;
}

/* Contenido principal */
.content {
    flex: 1;
    overflow-y: auto;
    padding: 20px;
    padding-bottom: 90px;
}

/* Página TOPS */
.tops-grid {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.pvp-card {
    background: linear-gradient(135deg, #2d2d2d 0%, #232323 100%);
    border-radius: 15px;
    padding: 25px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    border: 2px solid #3a3a3a;
    transition: all 0.3s ease;
    cursor: pointer;
}

.pvp-card:active {
    transform: scale(0.98);
}

.pvp-card h2 {
    font-size: 22px;
    margin-bottom: 8px;
    color: #4CAF50;
    font-weight: bold;
}

.pvp-card p {
    color: #aaaaaa;
    font-size: 14px;
    line-height: 1.5;
}

.trophy-icon {
    font-size: 35px;
    margin-bottom: 10px;
    display: block;
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
    padding: 12px 0;
    box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.6);
    z-index: 1000;
}

.nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    padding: 8px 15px;
    border-radius: 12px;
    transition: all 0.3s ease;
    flex: 1;
    max-width: 100px;
}

.nav-item:active {
    transform: scale(0.95);
}

.nav-item.active {
    background: rgba(76, 175, 80, 0.25);
}

.nav-item.active .nav-icon {
    color: #4CAF50;
    transform: scale(1.1);
}

.nav-icon {
    font-size: 26px;
    margin-bottom: 4px;
    color: #888888;
    transition: all 0.3s ease;
}

.nav-label {
    font-size: 10px;
    color: #888888;
    font-weight: 600;
    text-transform: uppercase;
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
    background: rgba(0, 0, 0, 0.85);
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
    padding: 35px 25px;
    max-width: 85%;
    text-align: center;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8);
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
    font-size: 24px;
    margin-bottom: 15px;
    color: #FFC107;
}

.popup p {
    font-size: 16px;
    color: #cccccc;
    margin-bottom: 25px;
    line-height: 1.5;
}

.popup-btn {
    background: linear-gradient(45deg, #4CAF50, #2196F3);
    color: white;
    border: none;
    padding: 14px 50px;
    border-radius: 25px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
}

.popup-btn:active {
    transform: scale(0.95);
}

/* Scrollbar personalizado */
::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-track {
    background: #1a1a1a;
}

::-webkit-scrollbar-thumb {
    background: #4CAF50;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: #45a049;
}