document.addEventListener('DOMContentLoaded', () => {
  const array = [
    {
      id: 1,
      video_url: '../../profiles/bnmchich.html',
      title: 'computer science Dr who earned his PhD in Malaysia, sharing his academic journey.',
      rating: 4.5,
      image: '../../assets/Benmchich.jpg',
      category: '',
      role: 'Dr in -cuillizi-',
      programme: 'Innovatech',
      guest: 'Benmchich Abdelrahim',
      logo: '../../assets/logo fac.jpeg',
    },
    {
      id: 2,
      video_url: 'https://www.youtube.com/watch?v=lj7V-z2SfKA&t=166s',
      title: 'Meriem shares her journey, her experiences as a top student, and her vision for the future .',
      rating: 4.5,
      image: '../../assets/meriem ihcen.jpg',
      category: '',
      role: 'valedictorian',
      programme: 'Pathos',
      guest: 'Meriem Ihcen Douifi',
      logo: '../../assets/pathos.png',
    },
    {
      id: 3,
      video_url: '../../profiles/bengerdi.html',
      title: 'Dr. BenGerdi Amine, sharing his academic and professional journey.',
      rating: 4.5,
      image: '../../assets/Mesikh.jpg',
      category: '',
      role: 'Dr in law -cuillizi-',
      programme: 'Innovatech',
      guest: 'Bengerdi Mohamed Amine',
      logo: '../../assets/logo fac.jpeg',
    },
    {
      id: 4,
      video_url: 'https://www.youtube.com/watch?v=pPrLMbZ8X80&t=2s',
      title: 'Touahria shares her story, the challenges she has faced, and her journey to becoming the top student',
      rating: 4.5,
      image: '../../assets/belkis touahria.jpg',
      category: '',
      role: 'Valedictorian',
      programme: 'Pathos',
      guest: 'Touahria Belkisse',
      logo: '../../assets/pathos.png',
    },
    {
      id: 5,
      video_url: '../../profiles/khtir.html',
      title: 'discuss his journey,  He shares insights on innovation,  leadership.',
      rating: 4.5,
      image: '../../assets/khthir.jpg',
      category: '',
      role: 'Dr in economic -cuillizi-',
      programme: 'Innovatech',
      guest: 'Khthir Chin',
      logo: '../../assets/logo fac.jpeg',
    },
    {
      id: 6,
      video_url: '../../profiles/moussa.html',
      title: 'Discussi his academic journey, leadership challenges, and vision for the university.',
      rating: 4.5,
      image: '../../assets/moussa-boubaker.jpg',
      category: '',
      role: 'chancellor of CU Illizi',
      programme: 'Innovattech',
      guest: 'Boubaker Moussa',
      logo: '../../assets/logo fac.jpeg',
    },
    {
      id: 7,
      video_url: 'https://www.youtube.com/watch?v=rvMoX1KOwhY&t=2s',
      title: 'Dr. Messaïkh Chouaib, shares his academic journey and vision for computer science in Illizi.',
      rating: 4.5,
      image: '../../assets/bengerdi.jpg',
      category: '',
      role: 'Dr of cs -cuillizi-',
      programme: 'Innovatech',
      guest: 'Mesikh Chouaib',
      logo: '../../assets/logo fac.jpeg',
    },
    {
      id: 8,
      video_url: 'https://www.youtube.com/watch?v=mSKqxXaSHxY&t=1s',
      title: 'Sarah opens up about the role her family played in her journey.',
      rating: 4.5,
      image: '../../assets/sarah.jpg',
      category: '',
      role: 'Valedictorian ~ University of Mouloud Mammeri Tizi-Ouzou',
      programme: 'Pathos',
      guest: 'Sarah Kkretche',
      logo: '../../assets/pathos.png',
    },
    {
      id: 9,
      video_url: 'https://www.youtube.com/watch?v=sFlpm1KUkw4',
      title: 'Mounaïm shares how veterinary medicine goes far beyond just treating animals.',
      rating: 4.5,
      image: '../../assets/pathoss (1).jpg',
      category: '',
      role: 'Valedictorian ~ Veterinary Medicine',
      programme: 'Pathos',
      guest: 'Monaim Ramdani',
      logo: '../../assets/pathos.png',
    },
    {
      id: 10,
      video_url: 'https://www.youtube.com/watch?v=4VthxAUGuQ8',
      title: 'Zineb shares how she switched from medicine to mathematics.',
      rating: 4.5,
      image: '../../assets/pathoss (2).jpg',
      category: '',
      role: 'Valedictorian ~ Mathematics ~ Algeria & Turkey',
      programme: 'Pathos',
      guest: 'Zineb Zellak',
      logo: '../../assets/pathos.png',
    },
    {
      id: 11,
      video_url: 'https://www.youtube.com/watch?v=gpTxbsgAZyE&t=2522s',
      title: 'Raihane shares her story, her journey to becoming the top student.',
      rating: 4.5,
      image: '../../assets/pathoss (3).jpg',
      category: '',
      role: 'Valedictorian ~ Institute of Translation in Algiers',
      programme: 'Pathos',
      guest: 'Raihane Mounira Bensfia',
      logo: '../../assets/pathos.png',
    },
    {
      id: 12,
      video_url: 'https://www.youtube.com/watch?v=XOMe_RgbAy8',
      title: 'Merzouk shares his achievements, his leadership role in Algenius.',
      rating: 4.5,
      image: '../../assets/pathoss (4).jpg',
      category: '',
      role: 'Valedictorian ~ ENS Technologies Avancées ~ Algeria',
      programme: 'Pathos',
      guest: 'Merzouk Djafar',
      logo: '../../assets/pathos.png',
    },
    {
      id: 13,
      video_url: 'https://www.youtube.com/watch?v=uZwr9Fr1u90',
      title: 'Rofaida opens up about the challenges she faced, the sacrifices made along the way.',
      rating: 4.5,
      image: '../../assets/pathoss (5).jpg',
      category: '',
      role: 'Valedictorian ~ Journalism',
      programme: 'Pathos',
      guest: 'Rofaida Mheni',
      logo: '../../assets/pathos.png',
    },
    {
      id: 14,
      video_url: 'https://www.youtube.com/watch?v=uMCm1vXA41Q&t=1s',
      title: 'Sirtoual shares her story, her journey to becoming the top student.',
      rating: 4.5,
      image: '../../assets/pathoss (6).jpg',
      category: '',
      role: 'Valedictorian ~ Higher National School of Political Science',
      programme: 'Pathos',
      guest: 'Sirtoual Maram',
      logo: '../../assets/pathos.png',
    },
    {
      id: 15,
      video_url: 'https://www.youtube.com/watch?v=XArKBPizgvw&t=69s',
      title: 'Amine shares his unique approach to studying, providing valuable advice for students and professionals alike.',
      rating: 4.5,
      image: '../../assets/pathoss (7).jpg',
      category: '',
      role: 'Valedictorian ~ ENP Alger',
      programme: 'Pathos',
      guest: 'Bennacer Amine Rami',
      logo: '../../assets/pathos.png',
    },
    {
      id: 16,
      video_url: 'https://www.youtube.com/watch?v=O4BuYhGS8-4',
      title: 'Chemseddine has consistently stood out as a top achiever in the field.',
      rating: 4.5,
      image: '../../assets/popular (2).jpg',
      category: '',
      role: 'Valedictorian ~ Archaeology, Shlef, Algeria',
      programme: 'Pathos',
      guest: 'Chemseddine Makdor',
      logo: '../../assets/pathos.png',
    },
  ];
  const universities = [
    {
      name: 'ALG-UNV',
      image: '../../assets/logo-univ (3).jpeg',
      link: '../profiles/alg.html'
    },
    {
      name: 'ENSB',
      image: '../../assets/logo-univ (2).jpeg',
      link: '../profiles/ensb.html'
    },
    {
      name: 'USTHB',
      image: '../../assets/logo-univ (4).jpeg',
      link: '../../profiles/usthb.html'
    },
    {
      name: 'ALG UNV3',
      image: '../../assets/logo-univ.png',
      link: '../../profiles/alg3.html'
    },
    {
      name: 'Pathos',
      image: '../../assets/pathos.png',
      link: '../../profiles/pathos.html'
    },
    {
      name: 'ALG UNV',
      image: '../../assets/logo-univ (3).jpeg',
      link: '../../profiles/alg.html'
    },
    {
      name: 'AlG UNV2',
      image: '../../assets/logo-univ (1).jpeg',
      link: '../../profiles/alg2.html'
    },
    {
      name: 'cu-illizi',
      image: '../../assets/logo fac.jpeg',
      link: '../profiles/cuillizi.html'
    }
  ];

  const fallbackImage = '../../assets/empty-image.png';
  const createSection = (podcast,container, hasSave = false) => {
    const card = document.createElement('div');
    const stars = Array.from({ length: podcast.rating }, () => '<i class="bx bxs-star"></i>').join(
      ''
    );
    const hasGuest = podcast.hasOwnProperty('guest');
    const hasRole = podcast.hasOwnProperty('role');
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
            ${hasGuest || hasRole ?`<div>
               ${hasGuest ? `<h3 class="writer">- ${podcast.guest} -</h3>` : ``}
              ${hasRole ? `<h3 class="role">- ${podcast.role} -</h3>` : ``}
            </div>`:``}
            <div class="title">
              <p title="${podcast.title}">${podcast.title}</p>
            </div>            
            <!--<div class="categories"></div>-->
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
  const container = document.querySelector('.sections_container');

  const universitiesContainer = document.querySelector('.universities_container');
  const createUniversity = (university,container) =>{
    const card = document.createElement('div');
    card.className = 'profile_card_container university_container';
    card.innerHTML = `
          <a href="${university.link}">
            <img src="${university.image}" alt="${university.name}" onerror="this.src='${fallbackImage}'">
            <p>${university.name}</p>
          </a>
    `;
    container.appendChild(card);
  }

  array.forEach((card) => {createSection(card,container, true)})
  universities.forEach((university) => {createUniversity(university,universitiesContainer)})

})
