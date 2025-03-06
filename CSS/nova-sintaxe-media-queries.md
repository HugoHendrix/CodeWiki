# Nova Sintaxe de Consultas de Mídia

- [Can I Use](https://caniuse.com/?search=media%20queries)
- [Dev.to - Link do artigo](https://dev.to/perisicnikola37/new-css-media-queries-syntax-45og?ref=dailydev)

As consultas de mídia (media queries) são um recurso do CSS que permite aplicar estilos condicionais com base em características do dispositivo ou do ambiente do usuário, como o tipo de dispositivo, largura da tela, resolução, orientação e preferências do usuário. Elas são fundamentais para o design responsivo, garantindo que a apresentação do conteúdo se adapte a diferentes tamanhos e tipos de tela.

**Sintaxe Tradicional das Consultas de Mídia**

Historicamente, as consultas de mídia utilizam as regras `@media` combinadas com operadores como `min-width` e `max-width` para definir pontos de interrupção (breakpoints) específicos. Por exemplo, para aplicar estilos a telas com largura mínima de 600 pixels, a sintaxe seria:


```css
@media (min-width: 600px) {
  /* Estilos para telas com largura mínima de 600px */
}
```


De forma semelhante, para aplicar estilos a telas com largura máxima de 800 pixels:


```css
@media (max-width: 800px) {
  /* Estilos para telas com largura máxima de 800px */
}
```


**Nova Sintaxe de Consultas de Mídia (Media Queries Level 4)**

Com a evolução das especificações do CSS, a sintaxe das consultas de mídia foi aprimorada para se tornar mais intuitiva e menos verbosa. A especificação Media Queries Level 4 introduziu operadores de comparação direta, permitindo uma escrita mais clara e concisa. Por exemplo, a consulta anterior para larguras mínimas de 600 pixels pode ser reescrita da seguinte forma:


```css
@media (width >= 600px) {
  /* Estilos para telas com largura mínima de 600px */
}
```


Para definir estilos entre um intervalo de larguras, como entre 600px e 1200px, a nova sintaxe permite:


```css
@media (600px <= width <= 1200px) {
  /* Estilos para telas com largura entre 600px e 1200px */
}
```


Essa abordagem elimina a necessidade de combinar múltiplas condições com operadores lógicos, tornando o código mais legível e menos propenso a erros. 

**Suporte dos Navegadores**

A adoção da nova sintaxe de consultas de mídia varia entre os navegadores. É essencial verificar a compatibilidade antes de implementá-la em projetos de produção. De acordo com o site "Can I use", que fornece tabelas de suporte para tecnologias web modernas, a sintaxe de intervalo para consultas de mídia possui suporte em navegadores modernos, mas é recomendável confirmar a compatibilidade específica para cada caso. 

**Exemplos Práticos**

- **Aplicando estilos para dispositivos de toque com telas largas:**


```css
@media (pointer: coarse) and (width > 1024px) {
  /* Estilos para dispositivos de toque com largura superior a 1024px */
}
```


- **Estilos específicos para telas em modo paisagem com alta resolução:**


```css
@media (orientation: landscape) and (resolution > 2dppx) {
  /* Estilos para telas em modo paisagem com resolução superior a 2dppx */
}
```


**Considerações Finais**

A evolução das consultas de mídia no CSS reflete a necessidade de ferramentas mais eficientes e intuitivas para o desenvolvimento de designs responsivos. A nova sintaxe oferece uma maneira mais clara de definir condições baseadas em características do dispositivo, simplificando o código e melhorando a legibilidade. No entanto, é crucial estar atento ao suporte dos navegadores para garantir uma experiência consistente aos usuários.

