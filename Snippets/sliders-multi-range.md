### **Criando um Sistema de Sliders Multi-Range com Atualização Dinâmica de Total**

[Exemplo](https://codepen.io/themolitor/pen/mdoxjKq/5ccf57f05485491c76304ea4af86d519/)


- Este exemplo demonstra como criar um sistema de **sliders multi-range** que atualiza dinamicamente um valor total com base nos ajustes feitos em cada slider.
- O sistema é ideal para cenários onde você precisa de feedback em tempo real com base em múltiplas entradas, como cálculos de preços ou quantidades.
- O design dos sliders é personalizado com CSS, e a lógica de atualização do total é implementada com JavaScript.

---

#### **Estrutura HTML**
O HTML consiste em três sliders, cada um representando um produto com um preço específico. O valor total é exibido em um campo de saída (`<output>`).

```html
<div id="page-wrapper">
  <!-- Slider 1: Apple Vision Pro -->
  <div class="slider-wrapper" id="slider_1">
    <img src="https://png.pngtree.com/png-clipart/20230624/original/pngtree-apple-vision-png-image_9212583.png">
    <label for="apple-range"> Vision Pro <small>$3499 ea.</small></label>
    <output id="appleOutput" class="qtyOutput" for="apple-range"></output>
    <input type="range" id="apple-range" name="apple_range" min="0" max="100" step="1" value="50" data-price="3499.00">
  </div>

  <!-- Slider 2: Meta Quest 3 -->
  <div class="slider-wrapper" id="slider_2">
    <img src="https://s7d1.scene7.com/is/image/dmqualcommprod/meta-quest-3-1?$QC_Responsive$&fmt=png-alpha">
    <label for="meta-range">Meta Quest 3 <small>$649 ea.</small></label>
    <output id="metaOutput" class="rangeOutput" for="meta-range"></output>
    <input type="range" id="meta-range" name="meta_range" min="0" max="100" step="1" value="50" data-price="649.00">
  </div>

  <!-- Slider 3: HTC VIVE XR Elite -->
  <div class="slider-wrapper" id="slider_3">
    <img src="https://vr-expert.com/wp-content/uploads/2023/02/vive-xr-elite-removebg-preview.png">
    <label for="html-range">HTC VIVE XR Elite<small>$1099 ea.</small></label>
    <output id="htcOutput" class="rangeOutput" for="htc-range"></output>
    <input type="range" id="htc-range" name="htc_range" min="0" max="100" step="1" value="50" data-price="1099.00">
  </div>

  <!-- Total e Botão de Compra -->
  <div id="slider-totals-wrapper">
    <output id="total" for="apple-range meta-range htc-range">5</output>
    <button id="buy-now">Buy Now</button>
  </div>

  <!-- Texto de Rodapé -->
  <div id="footer-text">
    <strong>Published July 2024</strong>. This code example is provided for demonstration and educational purposes only...
  </div>
</div>
```

---

#### **Estilização com CSS**
O CSS personaliza a aparência dos sliders, dos rótulos e do layout geral.

```css
/* Estilo dos Sliders */
input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
  height: 3px;
  background: #e8e8e8;
  border-radius: 25px;
  box-shadow: inset 0 0 1px rgba(0,0,0,.15);
  cursor: pointer;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 17.5px;
  height: 17.5px;
  background-color: #fff;
  border-radius: 50%;
  outline: 3px solid #000;
}

input[type="range"]::-moz-range-thumb {
  width: 17.5px;
  height: 17.5px;
  background-color: #fff;
  border-radius: 50%;
  outline: 3px solid #000;
}

/* Layout Geral */
body {
  background: #f8f8f8;
  padding: 5vw;
  font-family: sans-serif;
}

#page-wrapper {
  display: inline-block;
  text-align: left;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 5px 5px rgba(0,0,0,.1);
}

.slider-wrapper {
  margin: 0 20px;
  padding: 10px 30px 45px;
  width: 200px;
  display: inline-block;
  vertical-align: top;
}

#slider-totals-wrapper {
  margin: 40px 15px 0;
  padding: 30px;
  background: #222;
  color: #fff;
  border-radius: 12px;
}

#total {
  font-size: 30px;
  font-weight: 500;
}

#buy-now {
  background: rgba(255,255,255,.0);
  color: #fff;
  border: 2px solid #fff;
  border-radius: 25px;
  padding: 0 40px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color .25s, color .25s;
}

#buy-now:hover {
  background: #fff;
  color: #000;
}
```

---

#### **Lógica com JavaScript**
O JavaScript atualiza o valor total sempre que um slider é ajustado.

```javascript
// Atualiza o valor total
function updateTotal() {
  const sliders = document.querySelectorAll('input[type="range"]');
  let total = 0;

  sliders.forEach(slider => {
    const pricePerUnit = parseFloat(slider.dataset.price);
    const quantity = parseFloat(slider.value);
    total += pricePerUnit * quantity;
  });

  const formattedTotal = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total);
  document.getElementById('total').textContent = formattedTotal;
}

// Configura cada slider
function setupSlider(slider) {
  slider.addEventListener('input', function() {
    const output = slider.closest('.slider-wrapper').querySelector('output');
    output.innerHTML = slider.value;

    const percent = (slider.value - slider.min) / (slider.max - slider.min) * 100;
    slider.style.background = `linear-gradient(to right, #000 ${percent}%, #e8e8e8 ${percent}%)`;

    updateTotal();
  });

  slider.dispatchEvent(new Event('input'));
}

// Inicializa todos os sliders
document.querySelectorAll('input[type="range"]').forEach(setupSlider);

// Efeito de confetti ao clicar em "Buy Now"
document.getElementById('buy-now').addEventListener('click', function() {
  confetti({
    particleCount: 100,
    spread: 100,
    origin: { x: 0.5, y: 0.5 }
  });
});
```

---

#### **Funcionalidades Principais**
1. **Sliders Personalizados**:
   - Cada slider tem um design único, com um "thumb" (alça) redondo e uma trilha estilizada.

2. **Atualização Dinâmica do Total**:
   - O valor total é recalculado em tempo real conforme os sliders são ajustados.

3. **Efeito de Confetti**:
   - Um efeito visual divertido é acionado ao clicar no botão "Buy Now".

---

#### **Conclusão**
- Este exemplo combina **HTML**, **CSS** e **JavaScript** para criar uma interface interativa e visualmente atraente.
- É uma solução prática para cenários que exigem feedback em tempo real com base em múltiplas entradas.
- Personalize e adapte conforme necessário para seus projetos!

---

