 # container queries 

 *Container Queries* no CSS. Essas consultas são uma evolução significativa no design responsivo, permitindo que os estilos sejam aplicados com base no tamanho de um contêiner específico, em vez do tamanho da janela de visualização (viewport). Vamos explorar esse conceito de forma detalhada e simplificada.

**O que são Container Queries?**

Tradicionalmente, utilizamos *media queries* para aplicar estilos CSS condicionais, baseados em características globais do dispositivo, como a largura ou altura da janela de visualização. Por exemplo, podemos alterar o layout de uma página quando a largura da tela atinge determinado valor.

No entanto, essa abordagem nem sempre é ideal, especialmente em layouts complexos onde componentes individuais precisam se adaptar ao espaço disponível dentro de seus contêineres específicos, independentemente do tamanho total da janela. É aqui que as *container queries* se tornam úteis: elas permitem que estilos sejam aplicados a elementos com base no tamanho de seu contêiner ancestral, proporcionando um design mais modular e adaptável.

**Como utilizar Container Queries?**

Para implementar *container queries*, siga os seguintes passos:

1. **Defina um contêiner**: Primeiro, é necessário especificar qual elemento atuará como contêiner para as consultas. Isso é feito utilizando a propriedade `container-type`.

   ```css
   .container {
     container-type: inline-size;
   }
   ```


   Neste exemplo, `.container` é definido como um contêiner, e a propriedade `inline-size` indica que as consultas serão baseadas na largura do contêiner.

2. **Aplique estilos condicionais**: Após definir o contêiner, utilize a regra `@container` para aplicar estilos aos elementos internos, conforme o tamanho do contêiner.

   ```css
   @container (min-width: 600px) {
     .item {
       font-size: 1.5rem;
     }
   }
   ```


   Neste caso, se a largura do contêiner for de pelo menos 600 pixels, o tamanho da fonte dos elementos com a classe `.item` será ajustado para 1.5rem.

**Vantagens das Container Queries**

- **Modularidade**: Permitem que componentes individuais sejam responsivos ao espaço disponível em seus contêineres, facilitando a reutilização de componentes em diferentes contextos.

- **Manutenção Simplificada**: Reduzem a necessidade de múltiplas *media queries* globais, centralizando a lógica de responsividade nos próprios componentes.

- **Flexibilidade**: Adaptam-se dinamicamente a mudanças no layout, garantindo que os componentes se ajustem adequadamente ao espaço disponível.

**Considerações Finais**

As *container queries* representam um avanço significativo no CSS, permitindo designs mais flexíveis e modulares. Ao focar no tamanho dos contêineres individuais, os desenvolvedores podem criar interfaces de usuário que se adaptam de maneira mais precisa e eficiente às diversas configurações de layout.
