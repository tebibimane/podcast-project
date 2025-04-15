document.addEventListener('DOMContentLoaded', () => {
  const podcastsHealths = [
    {
      id: 1,
      video_url: "https://www.youtube.com/watch?v=uoSXJW__l3U&list=PLnORcKsa7KTG0ckpx9rsGsy64DlXl9WwV&index=10",
      title: "Novembre bleu, scoop sur les maladies masculines.",
      rating: 5,
      image: "../assets/santé (2).jpg",
      category: "",
      programme: "PH-TALK",
      guest: "Yettouch Maria Rania",
      logo: "../assets/logo labo.png",
    },
    {
      id: 2,
      video_url: "https://www.youtube.com/watch?v=ZlciYDjf3Ic&list=PLt3Srbt3FGd3eo90CgfjzkCMD98Ri_-AW&index=28",
      title: "اكتشف أسرار فقدان الوزن الصحي والتغذية المثالية مع اخصائية التغذية العلاجية",
      rating: 5,
      image: "../assets/madjliss (5).jpg",
      category: "",
      programme: "El Madjliss",
      guest: "Mehna Rawan",
      logo: "../assets/madjliss-logo.jpg",
    },
    {
      id: 3,
      video_url: "https://www.youtube.com/watch?v=HJy9uWn8uWE&list=PLs75uZeQLVSFTiOmFMoBlal1B2EowpCIR&index=2",
      title: "Les secrets de la médecine chinoise pour être soi-même",
      rating: 5,
      image: "./assets/dialogues (1).jpg",
      category: "",
      programme: "Dialogues",
      guest: "Nadia Volf",
      logo: "./assets/dialogue-logo.jpg",
    },
    {
      id: 4,
      video_url: "https://www.youtube.com/watch?v=SEm9jcQWSD8&list=PLnORcKsa7KTG0ckpx9rsGsy64DlXl9WwV&index=1",
      title: "Qu'est-ce qu'une intoxication alimentaire?",
      rating: 5,
      image: "./assets/santé (12).jpg",
      category: "",
      programme: "PH-Talk",
      guest: "Denbri Amira",
      logo: "./assets/logo labo.png",
    },
    {
      id: 5,
      video_url: "https://www.youtube.com/watch?v=YS3r-_1z7bw",
      title: "كمية معلومات رهيبة حول التغذية وجسم الإنسان  مع عالم التغذية",
      rating: 5,
      image: "./assets/elbilad.jpg",
      category: "",
      programme: "Allamtni el hayat",
      guest: "Hadj Ahmed kssir",
      logo: "./assets/bilad-logo.jpg",
    }
  ];
  const educationPodcasts = [
    {
      id: 1,
      video_url: 'https://www.youtube.com/watch?v=rvMoX1KOwhY&t=2s',
      title: 'Selma Chellali ~ Major de promo ENP Alger',
      rating: 5,
      image: './assets/selma.jpg',
      category: '',
      programme: 'PATHOS',
      guest: 'Noor Stars',
      logo: './assets/pathos.png',
    },
    {
      id: 2,
      video_url: './moussa.html',
      title: 'Biographie du Professeur Moussa Boubekeur, directeur du Centre Universitaire d’Illizi',
      rating: 5,
      image: '../assets/moussa-boubaker.jpg',
      category: '',
      programme: 'Innovatech',
      guest: 'Boubaker moussa',
      logo: '../assets/logo fac.jpeg',
    },
    {
      id: 3,
      video_url: './mesikh.html',
      title: 'Dr.Messaïkh Chouaib,présente son parcours académique, sa vision du domaine de l’informatique à Illizi.',
      rating: 5,
      image: './assets/bengerdi.jpg',
      category: '',
      programme: 'Innovatech',
      guest: 'Mesikh Chouaib',
      logo: './assets/logo fac.jpeg',
    },
    {
      id: 4,
      video_url: 'https://www.youtube.com/watch?v=XArKBPizgvw',
      title: '~ Bennacer Amine Rami ~ Major de promo ENP Alger',
      rating: 5,
      image: './assets/amine ramy.jpg',
      category: '',
      programme: 'PATHOS',
      guest: 'Noor Stars',
      logo: './assets/pathos.png',
    },
    {
      id: 5,
      video_url: 'https://www.youtube.com/watch?v=GA2v4QJLAGA&t=11s',
      title: 'Dr. BenGerdi Amine, son parcours académique et professionnel.',
      rating: 5,
      image: './assets/Mesikh.jpg',
      category: '',
      programme: 'Innovatech',
      guest: 'Bengerd Amine',
      logo: './assets/logo fac.jpeg',
    },
  ];
  const sportPodcasts = [
    {
      id: 1,
      video_url: 'https://www.youtube.com/watch?v=rvMoX1KOwhY&t=2s',
      title: 'Selma Chellali ~ Major de promo ENP Alger',
      rating: 5,
      image: '../assets/selma.jpg',
      category: '',
      programme: 'PATHOS',
      guest: 'Noor Stars',
      logo: '../assets/pathos.png',
    },
    {
      id: 2,
      video_url: 'https://www.youtube.com/watch?v=O1IDKJrVdSU',
      title: 'أيوب تيبازا ~ مرتبة الأولى لأربعة سنوات بالمدرسة الوطنية العليا للأشغال العمومية',
      rating: 5,
      image: '../assets/ayoub.jpg',
      category: '',
      programme: 'PATHOS',
      guest: 'Noor Stars',
      logo: '../assets/pathos.png',
    },
    {
      id: 3,
      video_url: 'https://www.youtube.com/watch?v=-aE0IHUD4Vw&t=571s',
      title: '~ CHEGROUCHE Abire ~ Valedictorian ~ École Nationale Polytechnique (ENP)',
      rating: 5,
      image: './assets/abir.jpg',
      category: '',
      programme: 'PATHOS',
      guest: 'Noor Stars',
      logo: './assets/pathos.png',
    },
    {
      id: 4,
      video_url: 'https://www.youtube.com/watch?v=XArKBPizgvw',
      title: '~ Bennacer Amine Rami ~ Major de promo ENP Alger',
      rating: 5,
      image: './assets/amine ramy.jpg',
      category: '',
      programme: 'PATHOS',
      guest: 'Noor Stars',
      logo: './assets/pathos.png',
    },
    {
      id: 5,
      video_url: 'https://www.youtube.com/watch?v=GA2v4QJLAGA&t=11s',
      title: '~ Narimane Shadi ~ Msila ~ Valedictorian ~ ENSM ~ Algeria.',
      rating: 5,
      image: './assets/narimane.jpg',
      category: '',
      programme: 'PATHOS',
      guest: 'Noor Stars',
      logo: './assets/pathos.png',
    },
  ];
  const lifePodcasts = [
    {
      id: 1,
      video_url: 'https://www.youtube.com/watch?v=HN16yco7GsQ&list=PLwN6wgufFRG1-MNQKtDKS41A4jF-kCkxa&index=7',
      title: 'Noor&M entre blessures et force',
      rating: 5,
      image: './assets/Gossra (3).jpg',
      category: '',
      programme: 'Gosra mlqalb',
      guest: 'Noor&M',
      logo: './assets/Gossra-logo.png',
    },
    {
      id: 2,
      video_url: 'https://www.youtube.com/watch?v=l27COp4BFUE&t=1s',
      title: 'confie sur son enfance,  les défis de la maternité seule.',
      rating: 5,
      image: './assets/abtalks (9).jpg',
      category: '',
      programme: 'Ab Talks',
      guest: 'Zeina Reda',
      logo: './assets/abtalks-logo.png',
    },
    {
      id: 3,
      video_url: 'https://www.youtube.com/watch?v=pJ0auP7dbcY&t=54s',
      title: 'كيف أنجح في العلاقات',
      rating: 5,
      image: './assets/yasser hazimi .jpg',
      category: '',
      programme: 'Finjan',
      guest: 'Yasser Hazimi',
      logo: './assets/finjan.png',
    },
    {
      id: 4,
      video_url: 'https://www.youtube.com/watch?v=vRCagZokmvQ',
      title: 'Kharman blends Arabic and Western music to bridge cultures.',
      rating: 5,
      image: './assets/hikmat (5).jpg',
      category: '',
      programme: 'W-studio',
      guest: 'Noel Kharman',
      logo: './assets/hikmat wahbi.png',
    },
    {
      id: 5,
      video_url: 'https://www.youtube.com/watch?v=GIFasEMWC8A&t=67s',
      title: 'شخصيات سامة (كيف نتعامل معها؟)',
      rating: 5,
      image: './assets/الكدب هنوف.jpg',
      category: '',
      programme: 'Wathba',
      guest: 'د.الهنوف',
      logo: './assets/wathba.png',
    },
  ];
  const religionCulturePodcasts  = [
    {
      id: 6,
      video_url: 'https://www.youtube.com/watch?v=rvMoX1KOwhY&t=2s',
      title: 'Selma Chellali ~ Major de promo ENP Alger',
      rating: 5,
      image: '../assets/selma.jpg',
      category: '',
      programme: 'PATHOS',
      guest: 'Noor Stars',
      logo: '../assets/pathos.png',
    },
    {
      id: 7,
      video_url: 'https://www.youtube.com/watch?v=O1IDKJrVdSU',
      title: 'أيوب تيبازا ~ مرتبة الأولى لأربعة سنوات بالمدرسة الوطنية العليا للأشغال العمومية',
      rating: 5,
      image: './assets/ayoub.jpg',
      category: '',
      programme: 'PATHOS',
      guest: 'Noor Stars',
      logo: './assets/pathos.png',
    },
    {
      id: 8,
      video_url: 'https://www.youtube.com/watch?v=-aE0IHUD4Vw&t=571s',
      title: '~ CHEGROUCHE Abire ~ Valedictorian ~ École Nationale Polytechnique (ENP)',
      rating: 5,
      image: './assets/abir.jpg',
      category: '',
      programme: 'PATHOS',
      guest: 'Noor Stars',
      logo: './assets/pathos.png',
    },
    {
      id: 9,
      video_url: 'https://www.youtube.com/watch?v=XArKBPizgvw',
      title: '~ Bennacer Amine Rami ~ Major de promo ENP Alger',
      rating: 5,
      image: './assets/amine ramy.jpg',
      category: '',
      programme: 'PATHOS',
      guest: 'Noor Stars',
      logo: './assets/pathos.png',
    },
    {
      id: 10,
      video_url: 'https://www.youtube.com/watch?v=GA2v4QJLAGA&t=11s',
      title: '~ Narimane Shadi ~ Msila ~ Valedictorian ~ ENSM ~ Algeria.',
      rating: 5,
      image: './assets/narimane.jpg',
      category: '',
      programme: 'PATHOS',
      guest: 'Noor Stars',
      logo: './assets/pathos.png',
    }
  ];
  const businessPodcasts = [
    {
      id: 11,
      video_url: 'https://www.youtube.com/watch?v=1kR1V4wcN6A&list=PLxb4UuOqlRSylTahyEDk0byn-HSuACIvR&index=25',
      title: '.الذكاء الإصطناعي في التجارة الإلكترونية في الجزائر',
      rating: 5,
      image: './assets/maystro (2).jpg',
      category: '',
      programme: 'Maysstro',
      guest: 'Ali el moqrani',
      logo: './assets/maystro-logo.jpg',
    },
    {
      id: 12,
      video_url: 'https://www.youtube.com/watch?v=8pzPZfoxN6Q&t=1455s',
      title: 'الثقافة المالية',
      rating: 5,
      image: './assets/ثقافة مالية.jpg',
      category: '',
      programme: 'BrainerX',
      guest: 'Mezian Dahou',
      logo: './assets/Brainerx.png',
    },
    {
      id: 13,
      video_url: 'https://www.youtube.com/watch?v=gOILeLIEjw0&list=PLxb4UuOqlRSylTahyEDk0byn-HSuACIvR&index=26',
      title: '.أسرار سوق العقارات وخفياه في الجزائر',
      rating: 5,
      image: './assets/maystro (1).jpg',
      category: '',
      programme: 'Maystro',
      guest: 'Mehdi Ouled Babouhoune',
      logo: './assets/maystro-logo.jpg',
    },
    {
      id: 14,
      video_url: 'https://www.youtube.com/watch?v=1T68O4Jzfv4',
      title: 'حبست القراية من أجل العمل في قطر',
      rating: 5,
      image: './assets/youness (1).jpg',
      category: '',
      programme: 'Fluently',
      guest: 'Idris Smati',
      logo: './assets/fluently.png',
    },
    {
      id: 15,
      video_url: 'https://www.youtube.com/watch?v=UmWU83svG_M&t=1s',
      title: '.فتح مطاعم في الجزائر',
      rating: 5,
      image: './assets/brainer (2).jpg',
      category: '',
      programme: 'BrainerX',
      guest: 'Amine la cantine',
      logo: './assets/Brainerx.png',
    }
  ];
  const categories = {
    health:podcastsHealths,
    education:educationPodcasts,
    sport:sportPodcasts,
    life:lifePodcasts,
    religionCulture:religionCulturePodcasts,
    business:businessPodcasts,
  }
  const fallbackImage = '../../assets/empty-image.png';
  const createSection = (podcast,container, hasSave = false) => {
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
  const container = document.querySelector('.sections_container');
  Object.keys(categories).forEach((section, index) => {
    const card = document.createElement('div');
    card.className = `section section_${index}`;
    card.innerHTML = `
    <div class="section_title">
      <p>${section}</p>
      <div >
        <a href="../${section}/${section}.html" class="see_more_btn">
        <p>See all</p>
        <i class='bx bx-right-arrow-circle'></i></a>
      </div>
    </div>
    <div class="podcasts_container section${index}_podcasts">
</div>`
    container.appendChild(card)
    const podcastsContainer = card.querySelector(`.section${index}_podcasts`);
    categories[section].forEach((card) => {
      createSection(card,podcastsContainer)
    })
  })
})
