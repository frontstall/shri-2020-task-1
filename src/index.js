import './scss/index.scss';

const accordionsButtons = Array.from(
  document.querySelectorAll('.e-accordion__short'),
);

const accordionsHiddenParts = document.querySelectorAll('.e-accordion__more');

accordionsHiddenParts.forEach((button) => {
  button.classList.add('visually-hidden');
});

document.addEventListener('click', (evt) => {
  const { target } = evt;

  const accordionButton = accordionsButtons.find((button) =>
    button.contains(target),
  );

  if (!accordionButton) return;

  const accordionHiddenPart = accordionButton.parentNode.querySelector(
    '.e-accordion__more',
  );

  accordionHiddenPart.classList.toggle('visually-hidden');
});
