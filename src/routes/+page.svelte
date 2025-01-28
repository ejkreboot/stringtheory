<script>
    // Add any functionality you might need here
  </script>
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap');
  
    body {
      font-family: 'Libre Baskerville', serif;
      margin: 0;
      padding: 0;
      background-color: #f8f9fa; /* Light gray background */
      color: #333; /* Dark text for good contrast */
      min-height: 100vh;
    }
  
    header {
      background-color: #333;
      color: #fff;
      padding: 1rem 0;
      text-align: center;
      font-size: 2rem;
      font-weight: 700;
      letter-spacing: 1px;
    }
  
    main {
      max-width: 800px;
      margin: 2rem auto;
      padding: 1rem;
    }
  
    section {
      margin-bottom: 2rem;
    }
  
    h2 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
      border-bottom: 2px solid #ddd;
      padding-bottom: 0.5rem;
    }
  
    p {
      font-size: 1.2rem;
      line-height: 1.6;
    }
  
    .links {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin: 1rem 0;
    }
  
    .link-card {
      flex: 1;
      min-width: 200px;
      padding: 1rem;
      text-align: center;
      border: 1px solid #ddd;
      border-radius: 8px;
      background-color: #fff;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      text-decoration: none;
      color: #333;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
  
    .link-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
  
    footer {
      text-align: center;
      margin-top: 3rem;
      font-size: 0.9rem;
      color: #666;
    }
  </style>
  
  <body>
  <header>
    Guitar Tools
  </header>
  
  <main>
    <!-- Tools Section -->
    <section>
      <h2>Tools</h2>
      <div class="links">
        <a href="/notes" class="link-card">
          🎸 Fretboard Note Trainer
        </a>
      </div>
    </section>
  
    <!-- Theory Section -->
    <section>
      <h2>Theory</h2>
      <div class="links">
        <a href="/theory/modal_interchange" class="link-card">
          🎵 Modal Interchange with Triads
        </a>
      </div>
    </section>
  </main>
  
  <footer>
    &copy; {new Date().getFullYear()} Guitar Tools | Created with care
  </footer>
</body>