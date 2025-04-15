document.addEventListener('DOMContentLoaded', () => {
  const accounts = [
    {
      id: 9821,
      name: 'Dialogue',
      link: './dialogue.html',
      image: './assets3/dialogue-logo.jpg',
      category: 'health'
    },
    {
      id: 4378,
      name: 'Ph Talk',
      link: './labo.html',
      image: './assets3/logo labo.png',
      category: 'health'
    },
    {
      id: 1254,
      name: 'Madjlis',
      link: './madjlis.html',
      image: './assets3/madjliss-logo.jpg',
      category: 'health'
    },
    {
      id: 7096,
      name: 'ALG UNV3',
      link: './bilad.html',
      image: './assets3/bilad-logo.jpg',
      category: 'health'
    },
    {
      id: 1372,
      name: 'Cuillizi',
      link: './cuillizi.html',
      image: './assets3/logo fac.jpeg',
      category: 'education'
    },
    {
      id: 8401,
      name: 'Pathos',
      link: './pathos.html',
      image: '../../assets/pathos.png',
      category: 'education'
    },
    {
      id: 5123,
      name: 'Madjlis',
      link: './madjlis.html',
      image: './assets3/madjliss-logo.jpg',
      category: 'education'
    },
    {
      id: 2964,
      name: 'ALG UNV3',
      link: './bilad.html',
      image: './assets3/bilad-logo.jpg',
      category: 'education'
    },
    {
      id: 6047,
      name: 'Cuillizi',
      link: './cuillizi.html',
      image: './assets3/.jpeg',
      category: 'sport'
    },
    {
      id: 3716,
      name: 'Pathos',
      link: './pathos.html',
      image: '../../assets/pathos.png',
      category: 'sport'
    },
    {
      id: 1598,
      name: 'Madjlis',
      link: './madjlis.html',
      image: './assets3/madjliss-logo.jpg',
      category: 'sport'
    },
    {
      id: 7135,
      name: 'ALG UNV3',
      link: './bilad.html',
      image: './assets3/bilad-logo.jpg',
      category: 'sport'
    },
    {
      id: 4820,
      name: 'Gossra mlqalb',
      link: './Gossra.html',
      image: './assets3/Gossa-mlqalb.png',
      category: 'life'
    },
    {
      id: 2287,
      name: 'Wathba',
      link: './wathba.html',
      image: './assets3/wathba.png',
      category: 'life'
    },
    {
      id: 9642,
      name: 'Finjan',
      link: './finjan.html',
      image: './assets3/finjan.png',
      category: 'life'
    },
    {
      id: 1859,
      name: 'Dhaat',
      link: './dhat.html',
      image: './assets3/podcast dat.png',
      category: 'life'
    },
    {
      id: 3174,
      name: 'Abtalks',
      link: './abtalks.html',
      image: './assets3/abtalks-logo.png',
      category: 'life'
    },
    {
      id: 7430,
      name: 'Hikmat wahbi',
      link: './hikmat.html',
      image: './assets3/hikmat wahbi.png',
      category: 'life'
    },
    {
      id: 5982,
      name: 'Atheer',
      link: '../see/see.html',
      image: './assets3/athir.png',
      category: 'Religion&cultures'
    },
    {
      id: 2904,
      name: 'Alamtani-elhyat',
      link: './bilad.html',
      image: './assets3/bilad-logo.jpg',
      category: 'Religion&cultures'
    },
    {
      id: 8425,
      name: 'Liqaa',
      link: './liqaa.html',
      image: './assets3/liqaa.png',
      category: 'Religion&cultures'
    },
    {
      id: 1039,
      name: 'Bast',
      link: './bast.html',
      image: './assets3/.jpg',
      category: 'Religion&cultures'
    },
    {
      id: 4691,
      name: 'BrainerX',
      link: './brainer.html',
      image: './assets3/Brainerx.png',
      category: 'business'
    },
    {
      id: 6043,
      name: 'Maystro',
      link: './maystro.html',
      image: './assets3/maystro-logo.jpg',
      category: 'business'
    },
    {
      id: 1167,
      name: 'Fluently',
      link: './younes.html',
      image: './assets3/fluently.png',
      category: 'business'
    },
    {
      id: 2358,
      name: 'Bast',
      link: './tinou.html',
      image: './assets3/tinou-logo.jpg',
      category: 'business'
    }
  ];
  const lists = accounts.reduce((acc,account)=>({...acc,[account.category]:[...(acc[account.category] || []),account]}),{})
  const fallbackImage = '../../assets/empty-image.png';

  const container = document.querySelector('.sections_container');
  const createSection = (account,container) => {
    const card = document.createElement('div');
    card.className = 'profile_card_container account_container';
    card.innerHTML = `
        <a href="${account.link}">
          <img src="${account.image}" alt="${account.name}" onerror="this.src='${fallbackImage}'">
          <p>${account.name}</p>
        </a>
    `;
    container.appendChild(card);
  }

  Object.keys(lists).forEach((section, index) => {
    const card = document.createElement('div');
    card.className = `section section_${index}`;
    card.innerHTML = `
        <div class="section_title">
          <p>${section}</p>
          <div>
            <a href="../${section}/${section}.html" class="see_more_btn">
            <p>See all</p>
            <i class='bx bx-right-arrow-circle'></i></a>
          </div>
        </div>
        <div class="profiles_card_container section${index}_account"></div>
`
    container.appendChild(card)
    const accountsContainer = card.querySelector(`.section${index}_account`);
    lists[section].forEach((card) => {
      createSection(card,accountsContainer)
    })
  })
})
