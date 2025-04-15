document.addEventListener('DOMContentLoaded', () => {
  const collapsed = localStorage.getItem('collapse');
  const collapseSidebar = () => {
    document.querySelector('.sidebar').classList.toggle('collapse');
    document.querySelector('.sidebar-header').classList.toggle('collapse');
    return document.querySelector('.center').classList.toggle('collapse');
  }

  if (collapsed === 'true') {
    collapseSidebar()
  }

  document.querySelector('.sidebar-toggle').addEventListener('click', () => {
    const a = collapseSidebar()
    localStorage.setItem('collapse', String(a));
  });

  // let pop_podcast_left = document.getElementById('pop_podcast_left');
  // let pop_podcast_right = document.getElementById('pop_podcast_right');
  // let podcast_bx = document.getElementsByClassName('item')[0];
  //
  // pop_podcast_left.addEventListener('click', () => {
  //   podcast_bx.scrollLeft += 330;
  // });
  // pop_podcast_right.addEventListener('click', () => {
  //   podcast_bx.scrollLeft -= 330;
  // });

  let input = document.getElementById('search-input');
  if (input) {
    input.addEventListener('input', (event) => {
      const value = event.currentTarget.value;

      if (value && /[a-zA-Z]/.test(value)) {
        document.querySelector('.search_suggestion').classList.add('show');
      } else {
        document.querySelector('.search_suggestion').classList.remove('show');
      }

    });
    input.addEventListener('focus', (event) => {
      const value = event.currentTarget.value;
      if (value && /[a-zA-Z]/.test(value)) {
        document.querySelector('.search_suggestion').classList.add('show');
      } else {
        document.querySelector('.search_suggestion').classList.remove('show');
      }
    })
    input.addEventListener('focusout', (_) => {
      document.querySelector('.search_suggestion').classList.remove('show');
    })
  }
})
