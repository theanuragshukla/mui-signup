if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/mui-signup/src-sw.js', { scope: '/mui-signup/' })})}