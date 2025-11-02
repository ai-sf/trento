// funzione che gestiva il flip della card, per rivelarne il retro


// (function ($) {
//   $(document).ready(function() {

//     $(document).on('click.card', '.card', function (e) {
//       if ($(this).find('> .card-reveal').length) {
//         if ($(e.target).is($('.card-reveal .card-title')) || $(e.target).is($('.card-reveal .card-title i'))) {
//           // Make Reveal animate down and display none
//           $(this).find('.card-reveal').velocity(
//             {translateY: 0}, {
//               duration: 225,
//               queue: false,
//               easing: 'easeInOutQuad',
//               complete: function() { $(this).css({ display: 'none'}); }
//             }
//           );
//         }
//         else if ($(e.target).is($('.card .activator')) ||
//                  $(e.target).is($('.card .activator i')) ) {
//           $(e.target).closest('.card').css('overflow', 'hidden');
//           $(this).find('.card-reveal').css({ display: 'block'}).velocity("stop", false).velocity({translateY: '-100%'}, {duration: 300, queue: false, easing: 'easeInOutQuad'});
//         }
//       }

//       $('.card-reveal').closest('.card').css('overflow', 'hidden');

//     });

//   });
// }( jQuery ));

//funzione che gesisce il toggle mostra/nascondi contenuto delle cards
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.toggle-btn');

  buttons.forEach(btn => {
    const text = btn.previousElementSibling;
    const span = btn.querySelector('span');
    const icon = btn.querySelector('i');

    // Imposta altezza iniziale troncata
    const collapsedHeight = 100; // altezza in px del testo “ridotto” (adatta a 3 righe circa)
    text.style.height = collapsedHeight + 'px';

    btn.addEventListener('click', function() {
      if(text.dataset.expanded === 'true') {
        // Contrai
        text.style.height = collapsedHeight + 'px';
        text.dataset.expanded = 'false';
        span.textContent = 'Mostra di più';
        if(icon) icon.textContent = 'expand_more';
      } else {
        // Espandi
        text.style.height = text.scrollHeight + 'px';
        text.dataset.expanded = 'true';
        span.textContent = 'Mostra meno';
        if(icon) icon.textContent = 'expand_less';
      }
    });

    // Flag iniziale
    text.dataset.expanded = 'false';
  });
});
