<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD1spFkxrOUht9_IndVbfJQn46F8aSP-uI",
    authDomain: "enchantress-guardian.firebaseapp.com",
    projectId: "enchantress-guardian",
    storageBucket: "enchantress-guardian.firebasestorage.app",
    messagingSenderId: "685057674017",
    appId: "1:685057674017:web:9851462b386dd67f7a8c60",
    measurementId: "G-ZFDC9NTCPR"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>