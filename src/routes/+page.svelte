  
<script>
  const modules = import.meta.glob('/src/routes/theory/**/*.svelte');

  String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  };

  // extract theory sub route names
  const links = Object.keys(modules).map((path) => {
    const route = path
      .replace('/src/routes/theory/', '')  // Remove '/src/routes' prefix
      .replace('/+page.svelte', '');  // Remove file extension

    const title = route.replace(/_/g, ' ').toProperCase(); // Replace underscores with spaces

    return { route, title };
  });
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap');
  
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
      gap: 1rem;
      margin: 1rem 0;
    }
  
    .link-card {
      display: block;
      min-width: 100%;
      margin-top: 10px;
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
  
  </style>
  
  <header>
    String Theory
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
        {#each links as { route, title }}
          <a href="/theory/{route}" class="link-card">
            {title}
          </a><br>
        {/each}
      </div>
    </section>
  </main>
