<script>
    export let question;
    export let answer;
    let showAnswer = false;
  </script>
  
  <div class="question-container">
    <div class="question" on:click={() => showAnswer = !showAnswer}>
      {question}
    </div>
    {#if showAnswer}
      <div class="answer">{answer}</div>
    {/if}
  </div>
  
  <style>
    .question-container {
      margin-bottom: 1rem;
    }
    .question {
      cursor: pointer;
      font-weight: bold;
      color: #757575;
    }
    .answer {
      margin-top: 0.5rem;
      color: #daa168;
    }
  </style>
  