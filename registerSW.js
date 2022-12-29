if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/mui-signup/sw.js', { scope: '/mui-signup/' })})}
