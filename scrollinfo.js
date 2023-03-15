
function scrollinfo(data) {

  const scrollinfo = document.getElementById(data);
  const dots = scrollinfo.querySelector('.scrollinfo__dots');

  // Handle graphics & dots
  const io_scrollinfo = scrollinfo.querySelectorAll(' .-js-io .scrollinfo__txt');
  const observer_scrollinfo = new IntersectionObserver(
    entries =>
      entries.forEach(
        entry => {
          const index = entry.target.parentElement.dataset.step;
          const graphicNext = scrollinfo.querySelector(`._graphic-${index}`);
          const dotPrev = scrollinfo.querySelector('.scrollinfo__dots li.is-active');
          const dotNext = scrollinfo.querySelector(`.scrollinfo__dots .dot--${index}`);
          // console.log(entry.isIntersecting);
          if (entry.intersectionRatio > 0) {
            // console.log('index', index);
            graphicNext.classList.add('is-active');
            dotPrev.classList.remove('is-active');
            dotNext.classList.add('is-active');
            dots.style.opacity = '1'
          } else {
            graphicNext.classList.remove('is-active');
          }
        })
  );
  io_scrollinfo.forEach(el => observer_scrollinfo.observe(el));

  // Show/hide dots group at Start
  const observer_mainInfo = new IntersectionObserver(
    entries => entries
      .map(
        entry =>
          (!entry.isIntersecting || entry.boundingClientRect.top < 0) && (dots.style.opacity = '0')
      )
  );
  observer_mainInfo.observe(scrollinfo);

  const dotsEnd = scrollinfo.querySelectorAll('.-js-io-dots');
  const observer_dots = new IntersectionObserver(
    entries => entries
      .map(
        entry =>
          (entry.isIntersecting || entry.boundingClientRect.top < 0) && (dots.style.opacity = '0')
      )
  )
  dotsEnd.forEach(el => observer_dots.observe(el));


}
