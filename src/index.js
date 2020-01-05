import './scss/index.scss';

const body = document.querySelector('body');

const init = (context) => {
  if (!context) return;

  const accordionsButtons = Array.from(
    document.querySelectorAll('.e-accordion__short'),
  );

  const accordionsHiddenParts = document.querySelectorAll('.e-accordion__more');

  accordionsHiddenParts.forEach((button) => {
    button.classList.add('visually-hidden');
  });

  const themeSwitch = document.querySelector('.onoffswitch');

  document.addEventListener('click', (evt) => {
    const { target } = evt;

    // prettier-ignore
    const accordionButton = accordionsButtons
      .find((button) => button.contains(target));

    if (accordionButton) {
      const accordionHiddenPart = accordionButton.parentNode.querySelector(
        '.e-accordion__more',
      );

      accordionHiddenPart.classList.toggle('visually-hidden');

      return;
    }

    if (themeSwitch.contains(target)) {
      themeSwitch.classList.toggle('onoffswitch_checked');

      const elementsWithThemes = [
        ...document.querySelectorAll('.theme_color_project-default'),
        ...document.querySelectorAll('.theme_color_project-inverse'),
      ];

      elementsWithThemes.forEach((element) => {
        element.classList.toggle('theme_color_project-default');
        element.classList.toggle('theme_color_project-inverse');
      });
    }
  });
};

init(body);
