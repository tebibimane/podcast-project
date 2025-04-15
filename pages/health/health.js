document.addEventListener('DOMContentLoaded', () => {
    const array = [
        {
            id: 1,
            video_url: 'https://www.youtube.com/watch?v=uoSXJW__l3U&list=PLnORcKsa7KTG0ckpx9rsGsy64DlXl9WwV&index=10',
            title: 'scoop sur les maladies masculines .',
            rating: 4.5,
            image: 'assets/santé (2).jpg',
            role: '',
            programme: 'Ph-Talk',
            guest: 'Yettouch Maria Rania',
            logo: './assets/logo labo.png',
        },
        {
            id: 2,
            video_url: 'https://www.youtube.com/watch?v=PApK1731PiY&list=PLt3Srbt3FGd3eo90CgfjzkCMD98Ri_-AW&index=15',
            title: 'Unraveling the Mystery:The Pap Smear.',
            rating: 4.5,
            image: 'assets/madjliss (13).jpg',
            role:  'Consultant Obstetrics & Gynaecology',
            programme: 'Madjlis',
            guest: 'Siham Bouazza',
            logo: './assets/madjliss-logo.jpg',
        },
        {
            id: 3,
            video_url: 'https://www.youtube.com/watch?v=-6xv-pFe-sY',
            title: 'Glucose : attention mensonge.',
            rating: 4.5,
            image: 'assets/dialogues (7).jpg',
            role: 'Biochimiste',
            programme: 'Dialogue',
            guest: 'Jessie Inchauspé',
            logo: './assets/dialogue-logo.jpg',
        },
        {
            id: 4,
            video_url: 'https://www.youtube.com/watch?v=4cdO95TSnKQ&list=PLnORcKsa7KTG0ckpx9rsGsy64DlXl9WwV&index=8',
            title: 'La digitalisation de la santé .',
            rating: 4.5,
            image: 'assets/santé (3).jpg',
            role: '',
            programme: 'Ph-Talk',
            guest: 'Chabani Rihab',
            logo: './assets/logo labo.png',
        },
        {
            id: 5,
            video_url: 'https://www.youtube.com/watch?v=cetlk9eeXMY&list=PLs75uZeQLVSF_5S6zw4bEu4LWD5imj0jN&index=8',
            title: "L'extraordinaire pouvoir du jeûne .",
            rating: 4.5,
            image: 'assets/dialogues (2).jpg',
            role: 'Cardiologue',
            programme: 'Dialogue',
            guest: 'Frédéric Saldmann',
            logo: './assets/dialogue-logo.jpg',
        },
        {
            id: 6,
            video_url: 'https://www.youtube.com/watch?v=99BaknLHbEc&list=PLt3Srbt3FGd3eo90CgfjzkCMD98Ri_-AW&index=14',
            title: 'A New Era in Digestive Health.',
            rating: 4.5,
            image: 'assets/madjliss (3).jpg',
            role: 'Gastroenterologist',
            programme: 'Madjlis',
            guest: 'Dr. Zakariyya Al Mrayat',
            logo: './assets/madjliss-logo.jpg',
        },
        {
            id: 7,
            video_url: 'https://www.youtube.com/watch?v=f6fK8JuecM0',
            title: 'كشف تفاصيل مثيرة عن تجربته لمدة 30 سنة في تشريح الجثث والطب الشرعي.',
            rating: 4.5,
            image: 'assets/alamtni (1).jpg',
            role: 'Professeur',
            programme: 'Alamtani-el hyat',
            guest: 'Belhadj Rachid',
            logo: './assets/bilad-logo.jpg',
        },
        {
            id: 8,
            video_url: 'https://www.youtube.com/watch?v=sd79OPmJFus&list=PLs75uZeQLVSF_5S6zw4bEu4LWD5imj0jN&index=12',
            title: 'Les 8 piliers pour rester jeune .',
            rating: 4.5,
            image: 'assets/dialogues (3).jpg',
            role: 'kinésithérapeute',
            programme: 'Dialogue',
            guest: 'Grégoire Gilbault',
            logo: './assets/dialogue-logo.jpg',
        },
        {
            id: 9,
            video_url: 'https://www.youtube.com/watch?v=K8eaSZ18WgE&list=PLnORcKsa7KTG0ckpx9rsGsy64DlXl9WwV&index=12',
            title: 'Les troubles du sommeil.',
            rating: 4.5,
            image: 'assets/santé (4).jpg',
            role: '',
            programme: 'Ph-Talk',
            guest: 'Asma Lina Fernan',
            logo: './assets/logo labo.png',
        },
        {
            id: 10,
            video_url: 'https://www.youtube.com/watch?v=ZlciYDjf3Ic&list=PLt3Srbt3FGd3eo90CgfjzkCMD98Ri_-AW&index=28',
            title: 'اكتشف أسرار فقدان الوزن الصحي والتغذية المثالية',
            rating: 4.5,
            image: 'assets/madjliss (5).jpg',
            role: 'أخصائية التغذية العلاجية',
            programme: 'Madjlis',
            guest: 'Rawan Mehna',
            logo: './assets/madjliss-logo.jpg',
        },
        {
            id: 11,
            video_url: 'https://www.youtube.com/watch?v=QIAqyMBSIzs&list=PLs75uZeQLVSF_5S6zw4bEu4LWD5imj0jN&index=20',
            title: 'Le secret pour être en bonne santé .',
            rating: 4.5,
            image: 'assets/dialogues (4).jpg',
            role: 'Chirugien.',
            programme: 'Madjlis',
            guest: 'Michel Cymes',
            logo: './assets/madjliss-logo.jpg',
        },
        {
            id: 12,
            programme: "Alamtani-el hyat",
            guest: "Nedjari Mohamed",
            role: "Professeur en psychiatrie",
            title: "أسرار وخبايا عالم الأمراض العقلية.",
            image: "assets/alamtni (2).jpg",
            logo: "assets/bilad-logo.jpg",
            rating: 4.5,
            video_url: "https://www.youtube.com/watch?v=NYbg7HW5mDo&t=4586s",
        },
        {
            id: 13,
            programme: "Dialogue",
            guest: "Capucine Vercellotti & Isabelle Filliozat",
            title: "Comment enfin aider vos enfants.",
            image: "assets/dialogues (9).jpg",
            logo: "assets/dialogue-logo.jpg",
            role: '',
            rating: 4.5,
            video_url: "https://www.youtube.com/watch?v=QAjIfcuLnvE",
        },
        {
            id: 14,
            video_url: "https://www.youtube.com/watch?v=hO3pk8y9-kY",
            rating: 4.5,
            image: "assets/santé (7).jpg",
            logo: "assets/logo labo.png",
            role: '',
            programme: "Ph-Talk",
            guest: "Bouazza nawal Boutheina",
            title: "Mémoire et concentration.",
        },
        {
            id: 15,
            video_url: 'https://www.youtube.com/watch?v=xOjsfjOQ_1A&t=2428s',
            title: "حقائق مثيرة يكشف عنها الدكتور.",
            rating: 4.5,
            image: "assets/alamtni (3).jpg",
            role: 'Docteur',
            programme: 'Alamtani-el hyat',
            guest: 'Tyaeb abad',
            logo: "assets/bilad-logo.jpg",
        }
    ];
    const accounts = [
        {
            name: "PH-Talk",
            image: "./assets/logo labo.png",
            link: "./labo.html"
        },
        {
            name: "El Majlis",
            image: "./assets/madjliss-logo.jpg",
            link: "./madjlis.html"
        },
        {
            name: "Dialogue",
            image: "./assets/dialogue-logo.jpg",
            link: "./dialogue.html"
        },
        {
            name: "El bilad",
            image: "./assets/bilad-logo.jpg",
            link: "./bilad.html"
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

    const accountsContainer = document.querySelector('.accounts_container');
    const createAccount = (account,container) =>{
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

    array.forEach((card) => {createSection(card,container, true)})
    accounts.forEach((account) => {createAccount(account,accountsContainer)})

})
