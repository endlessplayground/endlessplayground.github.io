---
layout: default
intro: |

---

{% include page_top.html 
   title=site.data.random.page_title 
   intro=page.intro 
%}

<style>
.dice {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90px;
}

#roll {
  cursor: pointer;
  display: inline-block;
}

#roll img {
  width: 50px;
  height: 50px;
  transition: transform 2s ease-out;
  transform: rotate(0deg);
}

#output {
  margin-top: 20px;
  min-height: 50px;
  text-align: center;
}
</style>

<div class="custom-section">
  <div style="text-align:center; margin: 0px 8px 0px 12px">
    <p><em>Gooi</em> met de dobbelsteen voor een <em>random</em> quote, illustratie of artikel.</p>
  </div>
  
  <div class="dice">
    <div id="roll"><img src="/random/images/dice.svg" alt="dice"></div>
  </div>
  
  <!-- Output div for results -->
  <div id="output"></div>
</div>

<style>
.dice {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90px;
}

#roll {
  cursor: pointer;
  outline: none !important;
  display: inline-block;
}

#roll img {
  transition: all 0.3s ease;
}

#roll:hover img {
  transform: scale(1.05);
}

@keyframes wobble {
  0% { transform: rotate(0deg) scale(1.05); }
  10% { transform: rotate(90deg) scale(1.1); }
  20% { transform: rotate(180deg) scale(1.05); }
  30% { transform: rotate(270deg) scale(1.1); }
  40% { transform: rotate(360deg) scale(1.05); }
  50% { transform: rotate(0deg) scale(1); }
  60% { transform: rotate(90deg) scale(1.1); }
  70% { transform: rotate(180deg) scale(1.05); }
  80% { transform: rotate(270deg) scale(1.1); }
  90% { transform: rotate(360deg) scale(1.05); }
  100% { transform: rotate(360deg) scale(1); }
}

.roll-animation img {
  animation: wobble 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

#output {
  margin-top: 20px;
  min-height: 50px;
  text-align: center;
}
</style>

<script>
const randomContent = [
  { type: "quote", text: "Hier komen straks leuke random dingen." },
  { type: "quote", text: "Gooi nóg een keer...." },
  { type: "quote", text: "Hey! <span style=\"font-size:1.5em;\">&#128522;</span>" },

  { type: "quote", text: "Vandaag is de dag. &#128527;" }
];

const dice = document.getElementById('roll');
const output = document.getElementById('output');

dice.addEventListener('click', () => {
  // Reset
  output.textContent = "";
  dice.style.animation = 'none';
  void dice.offsetWidth; // Trigger reflow
  
  // Start animation
  dice.classList.add('roll-animation');
  
  // Show result after animation
  setTimeout(() => {
    const randomItem = randomContent[Math.floor(Math.random() * randomContent.length)];
    if (randomItem.type === "quote") {
      output.innerHTML = `<p class="result">${randomItem.text}</p>`; // Removed "" here
    } else {
      output.innerHTML = `<a href="${randomItem.url}" class="result-link">${randomItem.text}</a>`;
    }
    dice.classList.remove('roll-animation');
  }, 700);
});
</script>

