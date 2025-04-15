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

  const podcasts = [
    {
      id: 1,
      title: 'Il se confie avec sincérité sur sa vie, son humour, sa foi et son chemin vers l’équilibre.',
      link: 'https://www.youtube.com/watch?v=XIwI5F3OLRA'
    },
    {
      id: 2,
      title: 'livre pour la première fois en podcast sur son parcours, sa famille, et les valeurs qui le guident.',
      link: 'https://www.youtube.com/watch?v=jfK-d2AOt3Q&t=1s'
    },
    {
      id: 3,
      title: 'The Journey of mike Amiri To Success .',
      link: 'https://www.youtube.com/watch?v=GRgtzuXmlWg'
    },{
      id: 4,
      title: 'Sadia partage son parcours de vie, ses réflexions sur l’amour, la jalousie et les défis des relations modernes.',
      link: 'https://www.youtube.com/watch?v=GhFO4ecic88'
    },{
      id: 5,
      title: 'Mohamed décrypte l’impact profond de l’IA sur l’humanité .',
      link: 'https://www.youtube.com/watch?v=7WvKcFsAj6E'
    },{
      id: 6,
      title: 'son enfance bouleversée par la guerre, le divorce de ses parents,  les réseaux sociaux et de la peur.',
      link: 'https://www.youtube.com/watch?v=wnA3KSHxWxc'
    },{
      id: 7,
      title: 'Huda livre  son engagement pour une beauté authentique et engagée.',
      link: 'https://www.youtube.com/watch?v=04zL0BhGLwM'
    },{
      id: 8,
      title: 'Mel partage son parcours de guérison, ses luttes personnelles et l’importance de reprendre le pouvoir sur la vie.',
      link: 'https://www.youtube.com/watch?v=XXPVeE9NmCQ&t=10s'
    },{
      id: 9,
      title: 'elle confie sur son enfance, la perte de son père, les défis de la maternité seule.',
      link: 'https://www.youtube.com/watch?v=l27COp4BFUE'
    },{
      id: 10,
      title: `Ahmed livre sur ses débuts modestes, son parcours d'acteur et l'importance de sa famille.`,
      link: 'https://www.youtube.com/watch?v=7h0yWtHmFoY'
    },{
      id: 11,
      title: `Raconte son expérience bouleversante en soignant des patients et les histoires poignantes qu'il a vécues.`,
      link: 'https://www.youtube.com/watch?v=REVpmFH9feo'
    },{
      id: 12,
      title: 'Partage un parcours de résilience et de guérison.',
      link: 'https://www.youtube.com/watch?v=ej6-HHCWIps&t=5074s'
    },{
      id: 13,
      title: `se confie sur sa discipline et l'influence de son père dans son chemin vers la boxe..`,
      link: 'https://www.youtube.com/watch?v=B-Y2-upwdoE '
    },{
      id: 14,
      title: 'revient sur son rôle clé entre le hip-hop et le monde des affaires.',
      link: 'https://www.youtube.com/watch?v=lQrjHrYY6G8'
    },{
      id: 15,
      title: `Elle a partagé en profondeur les défis  qui l'ont rendue plus forte .`,
      link: 'https://www.youtube.com/watch?v=nD-5kGaycY8'
    },
    {
      id: 16,
      title: 'Le parcours d’une femme forte, raconté avec émotion .',
      link: 'https://www.youtube.com/watch?v=ro9GkbBEQNM&t=1966s'
    },
    {
      id: 17,
      title: 'À cœur ouvert avec Ryma Beauty',
      link: 'https://www.youtube.com/watch?v=ADUkL9Cy_E4&list=PLwN6wgufFRG1-MNQKtDKS41A4jF-kCkxa&index=5'
    },
    {
      id: 18,
      title: 'Maroua dévoile sa vérité, sans filtres.',
      link: 'https://www.youtube.com/watch?v=MV511qEmfTc&list=PLwN6wgufFRG1-MNQKtDKS41A4jF-kCkxa&index=2'
    },{
      id: 19,
      title: 'Sarah Redjil se livre à cœur ouvert.',
      link: 'https://www.youtube.com/watch?v=RqgTCrGkb38&list=PLwN6wgufFRG1-MNQKtDKS41A4jF-kCkxa&index=1'
    },{
      id: 20,
      title: 'Ines Beauty, au cœur de chaque transformation .',
      link: 'https://www.youtube.com/watch?v=Um-zMc20PJQ'
    },{
      id: 21,
      title: 'Noor&M entre blessures et force .',
      link: 'https://www.youtube.com/watch?v=HN16yco7GsQ&list=PLwN6wgufFRG1-MNQKtDKS41A4jF-kCkxa&index=7'
    },{
      id: 22,
      title: 'الطلاق ليست النهاية تغيرت حياتي.',
      link: 'https://www.youtube.com/watch?v=yWoRZww4IzI&list=PLwN6wgufFRG1-MNQKtDKS41A4jF-kCkxa&index=8'
    },{
      id: 23,
      title: 'تفتح قلبها و تحكي قصتها و صدمات الماضي.',
      link: 'https://www.youtube.com/watch?v=CwgEdkpZgTA&list=PLwN6wgufFRG1-MNQKtDKS41A4jF-kCkxa&index=9'
    },{
      id: 24,
      title: `يحكي على طلاق الاولياء وكيف تجاوز الصدمة  تجربة مع الحب و انكسار قلب`,
      link: 'https://www.youtube.com/watch?v=NuhLtMlLx_U&list=PLwN6wgufFRG1-MNQKtDKS41A4jF-kCkxa&index=11'
    },{
      id: 25,
      title: `il a partagé ses épreuves qui l'ont rendu plus fort et plus sage.`,
      link: 'https://www.youtube.com/watch?v=bI7DfYkRZJY&list=PLwN6wgufFRG1-MNQKtDKS41A4jF-kCkxa&index=12'
    },{
      id: 26,
      title: `Imene Noël a raconté ses défis, qui l'ont forgée et rendue plus sage.`,
      link: 'https://www.youtube.com/watch?v=UM-nZnaFD1I&list=PLwN6wgufFRG1-MNQKtDKS41A4jF-kCkxa&index=13'
    },{
      id: 27,
      title: 'لعامل النفسي مهم و مريت بإكتآب و إحتراق.',
      link: 'https://www.youtube.com/watch?v=d8fkh53Bp8w&list=PLwN6wgufFRG1-MNQKtDKS41A4jF-kCkxa&index=6'
    },{
      id: 28,
      title: `Il a partagé avec sincérité les obstacles qu'il a  renforcé.`,
      link: 'https://www.youtube.com/watch?v=9I44YilAG1U&list=PLwN6wgufFRG1-MNQKtDKS41A4jF-kCkxa&index=10 '
    },{
      id: 29,
      title: 'Son parcours .',
      link: 'https://www.youtube.com/watch?v=-aj0TvZOz3Y'
    },{
      id: 30,
      title: `Elle a partagé en profondeur les défis  qui l'ont rendue plus forte .`,
      link: 'https://www.youtube.com/watch?v=jZNAgU47dZk'
    },
    {
      id: 31,
      title: `Abire, the valedictorian in her specialty year at the École Nationale Polytechnique (ENP).`,
      link: 'https://www.youtube.com/watch?v=-aE0IHUD4Vw&t=1124s'
    },
    {
      id: 32,
      title: 'Meriem shares her journey, her experiences as a top student, and her vision for the future .',
      link: 'https://www.youtube.com/watch?v=lj7V-z2SfKA&t=166s'
    },
    {
      id: 33,
      title: 'Chakib shares, being the top student in both his second and third years.',
      link: 'https://www.youtube.com/watch?v=x6kYn-A5OTY&t=986s'
    },{
      id: 34,
      title: 'Belkis shares her story, the challenges she has faced, and her journey to becoming the top student .',
      link: 'https://www.youtube.com/watch?v=pPrLMbZ8X80&t=2s'
    },{
      id: 35,
      title: 'Ayoub turned setbacks into triumphs and became one of the country’s top engineers! .',
      link: 'https://www.youtube.com/watch?v=O1IDKJrVdSU&t=1s'
    },{
      id: 36,
      title: 'Narimane reflects on the challenges she faced,  and what makes ENSM a remarkable institution for shaping Algeria’s future leaders.',
      link: 'https://www.youtube.com/watch?v=GA2v4QJLAGA&t=11s'
    },{
      id: 37,
      title: 'Selma shares her unique approach to studying, time management, and staying motivated.',
      link: 'https://www.youtube.com/watch?v=rvMoX1KOwhY&t=2s'
    },{
      id: 38,
      title: 'Sarah opens up about the role her family played in her journey .',
      link: ' https://www.youtube.com/watch?v=mSKqxXaSHxY&t=1s'
    },{
      id: 39,
      title: `Mounaïm shares  how veterinary medicine goes far beyond just treating animals.'`,
      link: 'https://www.youtube.com/watch?v=sFlpm1KUkw4'
    },{
      id: 40,
      title: 'Zineb shares how she switched from medicine to mathematics.',
      link: 'https://www.youtube.com/watch?v=4VthxAUGuQ8'
    },{
      id: 41,
      title: 'Raihane shares her story, her journey to becoming the top student.',
      link: 'https://www.youtube.com/watch?v=gpTxbsgAZyE&t=2522s'
    },{
      id: 42,
      title: 'Merzouk shaires his achievements, his leadership role in Algenius.',
      link: 'https://www.youtube.com/watch?v=XOMe_RgbAy8'
    },{
      id: 43,
      title: 'Rofaida opens up about the challenges she faced, the sacrifices made along the way.',
      link: 'https://www.youtube.com/watch?v=uZwr9Fr1u90 '
    },{
      id: 44,
      title: 'Sirtoual shares her  story,  her journey to becoming the top student.',
      link: 'https://www.youtube.com/watch?v=uMCm1vXA41Q&t=1s'
    },{
      id: 45,
      title: 'Amine shares his unique approach to studying,  providing valuable advice for students and professionals alike.',
      link: 'https://www.youtube.com/watch?v=XArKBPizgvw&t=69s'
    }
  ]

  const input = document.getElementById('search-input');
  const container = document.querySelector('.search_suggestion_list');
  const suggestionBox = document.querySelector('.search_suggestion');

  const removeResult = () => {
    suggestionBox.classList.remove('show');
    document.querySelectorAll('.search_suggestion_item').forEach((el) => el.remove());
    const noResultElement = document.querySelector('.search_suggestion_no_result');
    if (noResultElement) noResultElement.remove();
  };

  const handleSearch = (value) => {
    removeResult();

    if (value && /[a-zA-Z]/.test(value)) {
      const filteredList = podcasts.filter(p =>
        p.title.toLowerCase().startsWith(value.toLowerCase())
      );

      suggestionBox.classList.add('show');

      if (filteredList.length === 0) {
        if (!document.querySelector('.search_suggestion_no_result')) {
          const item = document.createElement('li');
          item.className = 'search_suggestion_no_result';
          item.textContent = 'No result found';
          container.appendChild(item);
        }
      } else {
        filteredList.forEach(podcast => {
          const item = document.createElement('li');
          item.className = 'search_suggestion_item';
          item.innerHTML = `<a href="${podcast.link}" target="_blank">${podcast.title}</a>`;
          container.appendChild(item);
        });
      }
    }
  };

  if (input) {
    input.addEventListener('input', (event) => {
      handleSearch(event.currentTarget.value);
    });

    input.addEventListener('focus', (event) => {
      handleSearch(event.currentTarget.value);
      input.className = 'show'
    });

    // CLICK OUTSIDE DETECTION
    document.addEventListener('click', (event) => {
      const isClickInsideInput = input.contains(event.target);
      const isClickInsideSuggestion = suggestionBox.contains(event.target);

      if (!isClickInsideInput && !isClickInsideSuggestion) {
        removeResult();
        input.classList.remove('show');
        input.value = '';
      }
    });
  }

})
