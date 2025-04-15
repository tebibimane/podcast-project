document.addEventListener('DOMContentLoaded', () => {
  const podcasts = [
    {
      id: 1,
      video_url: 'https://www.youtube.com/watch?v=Ab2jBAA1FQ8',
      title: 'سرطان الثدي لن يعيقني على عيش حياتي',
      rating: 3,
      image: './assets/new1.png',
      category: '',
      programme: 'Gossra mlqalb',
      guest: 'Maisvault',
      logo: './assets/Gossa-mlqalb.png',
    },
    {
      id: 2,
      video_url: 'https://www.youtube.com/watch?v=UmWU83svG_M',
      title: 'فتح مطاعم في الجزائر',
      rating: 2,
      image: './assets/new5.png',
      category: '',
      programme: 'BrainerX',
      guest: 'Amine la Cantine',
      logo: './assets/Brainerx.png',
    },
    {
      id: 3,
      video_url: 'https://www.youtube.com/watch?v=O1IDKJrVdSU&t=1s',
      title: 'مرتبة الأولى لأربعة سنوات بالمدرسة الوطنية للأشغال العمومية',
      rating: 4,
      image: './assets/new4.png',
      category: '',
      programme: 'Pathos',
      guest: 'أيوب تيبازا',
      logo: './assets/Pathos.png',
    },
    {
      id: 4,
      video_url: 'https://www.youtube.com/watch?v=sWCo9TqFuZA&t=2s',
      title: 'ا-كيف تحافظ المرأة المسلمة على هويتها؟',
      rating: 5,
      image: './assets/new2.png',
      category: '',
      programme: 'Atheer',
      guest: 'الدكتورة هيفاء',
      logo: './assets/athir.png',
    },
    {
      id: 4,
      video_url: 'https://www.youtube.com/watch?v=sWCo9TqFuZA&t=2s',
      title: 'ا-كيف تحافظ المرأة المسلمة على هويتها؟',
      rating: 5,
      image: './assets/new2.png',
      category: '',
      programme: 'Atheer',
      guest: 'الدكتورة هيفاء',
      logo: './assets/athir.png',
    },
    {
      id: 4,
      video_url: 'https://www.youtube.com/watch?v=sWCo9TqFuZA&t=2s',
      title: 'ا-كيف تحافظ المرأة المسلمة على هويتها؟',
      rating: 5,
      image: './assets/new2.png',
      category: '',
      programme: 'Atheer',
      guest: 'الدكتورة هيفاء',
      logo: './assets/athir.png',
    },
    {
      id: 4,
      video_url: 'https://www.youtube.com/watch?v=sWCo9TqFuZA&t=2s',
      title: 'ا-كيف تحافظ المرأة المسلمة على هويتها؟',
      rating: 5,
      image: './assets/new2.png',
      category: '',
      programme: 'Atheer',
      guest: 'الدكتورة هيفاء',
      logo: './assets/athir.png',
    },
  ];
  const popularPodcasts = [
    {
      id: 1,
      video_url: 'https://www.youtube.com/watch?v=K8eaSZ18WgE&t=1s',
      title: '- ASMA LINA FERNAN - اضطرابات النوم',
      rating: 5,
      image: './assets/santé (4).jpg',
      category: '',
      programme: '-PH TALK-',
      logo: './assets/logo labo.png',
    },
    {
      id: 2,
      video_url: 'https://www.youtube.com/watch?v=GIFasEMWC8A&t=67s',
      title: '- شخصيات سامة (كيف نتعامل معها؟) -بودكاست الهنوف',
      rating: 2,
      image: './assets/الكدب هنوف.jpg',
      category: '',
      programme: 'Wathba',
      logo: './assets/wathba.png',
    },
    {
      id: 3,
      video_url: 'https://www.youtube.com/watch?v=pJ0auP7dbcY&t=54s',
      title: '-كيف تنجح العلاقات- ياسر الحزيمي',
      rating: 4,
      image: './assets/yasser hazimi .jpg',
      category: '',
      programme: 'Finjan',
      logo: './assets/finjan.png',
    },
    {
      id: 4,
      video_url: 'https://www.youtube.com/watch?v=8pzPZfoxN6Q&t=1455s',
      title: '- Mezian Dahou - الثقافة المالية',
      rating: 5,
      image: './assets/ثقافة مالية.jpg',
      category: '',
      programme: 'Brainerx',
      logo: './assets/Brainerx.png',
    },
    {
      id: 5,
      video_url: 'https://www.youtube.com/watch?v=Ab2jBAA1FQ8',
      title: '- Chegrouche Abire -Valedictorian ~ École Nationale Polytechnique',
      rating: 5,
      image: './assets/abir.jpg',
      category: '',
      programme: 'Pathos',
      logo: './assets/Gossa-mlqalb.png',
    }
  ];
  const popularAccounts = [
    {
      name: 'LIQAA',
      logo: './assets/liqaa.png',
      link: '../liqaa.html'
    },
    {
      name: 'Brainerx',
      logo: './assets/Brainerx.png',
      link: '../brainerx.html'
    },
    {
      name: 'FINJAN',
      logo: './assets/finjan.png',
      link: '../finjan.html'
    },
    {
      name: 'PATHOS',
      logo: './assets/pathos.png',
      link: '../pathos.html'
    },
    {
      name: 'WATHBA',
      logo: './assets/wathbaa.png',
      link: '../wathbaa.html'
    },
    {
      name: 'EYATALKS',
      logo: './assets/eyatalks.png',
      link: '../eyatalks.html'
    }
  ];


  const podcastContainer = document.querySelector('.new_podcasts_container');
  const popularPodcastContainer = document.querySelector('.popular_podcasts_container');
  const podcastAccountsContainer = document.querySelector('.articles');
  const fallbackImage = '../../assets/empty-image.png';
  const podcastCard = (podcast,container, hasSave = false) => {
    const card = document.createElement('div');
    const stars = Array.from({ length: podcast.rating }, () => '<i class="bx bxs-star"></i>').join(
      ''
    );
    const hasGuest = podcast.hasOwnProperty('guest');
    card.className = 'featured_book_card';
    card.innerHTML = `
        <div class="featured_book_img">
            <a href="${podcast.video_url}" target="_blank">
                <img src="${podcast.image}" alt="${podcast.title}" onerror="this.src='${fallbackImage}'"/>
            </a>
        </div>
        <div class="featured_book_tag">
            <div class="log-pod">
                <img class="podcast_programme_logo" src="${podcast.logo}" alt="${podcast.logo}" onerror="this.src='${fallbackImage}'"/>
                <h5 class="podcast_programme_title">- ${podcast.programme} -</h5>
            </div>
            
            ${hasGuest ? `<h3 class="writer">- ${podcast.guest} -</h3>` : ``}
            
            <div class="title">
              <p title="${podcast.title}">${podcast.title}</p>
            </div>            
<!--            <div class="categories"></div>-->
            <p class="podcast_rating">
              ${stars}
            </p>
            <div class="podcast_card_actions">
                <a href="${podcast.video_url}" target="_blank" class="watch_link" title="Watch podcast">
                  <div class="watch_button"> watch Now</div>
                </a>
              ${hasSave ?
                `<div class="favourite_icon">
                    <a href="#" title="Save podcast">
                      <i class="bx bx-bookmark"></i>
                    </a>
                </div>` : ``
              }
            </div>
        </div>
    `;
    container.appendChild(card);
  }

  podcasts.forEach((podcast) => podcastCard(podcast,podcastContainer));
  popularPodcasts.forEach((podcast) => podcastCard(podcast,popularPodcastContainer,true));
  popularAccounts.forEach((account) => {
    const accountsCard = document.createElement('div');
    accountsCard.className = 'item';
    accountsCard.innerHTML = `
        <a href="${account.link}"><img src="${account.logo}" alt="" onerror="this.src='${fallbackImage}'"/></a>
        <div class="text">
          <p>
            <a href="${account.link}"><b>${account.name}</b></a>
          </p>
        </div>
    `;
    podcastAccountsContainer.appendChild(accountsCard);
  });

});
