const members = [
    {
        name: "Stefany Valentia.",
        role: "Sopran",
        desc: "Membawa kejernihan vokal sejak 2016.",
        img: "img/sopran/stefany_valentia.JPG"
    },
    {
        name: "Belinda Widodo",
        role: "Sopran",
        desc: "Vokalis utama dalam konser tahunan 2023.",
        img: "img/sopran/belinda_widodo.JPG"
    },
    {
        name: "Gitta Nathania",
        role: "Sopran",
        desc: "Penyanyi dengan suara yang lembut dan penuh emosi.",
        img: "img/sopran/gitta_nathania.JPG"
    },
    {
        name: "Michelle Fauziek",
        role: "Sopran",
        desc: "Penyanyi dengan suara yang lembut dan penuh emosi.",
        img: "img/sopran/michelle_fauziek.JPG"
    },
    {
        name: "Bernadine Thendean",
        role: "Alto",
        desc: "Kedalaman suara alto yang hangat.",
        img: "img/alto/Bernadine_Thendean.JPG"
    },
    {
        name: "Brigitta Sthefynna",
        role: "Alto",
        desc: "Kedalaman suara alto yang hangat.",
        img: "img/alto/Brigitta_Sthefynna.JPG"
    },
    {
        name: "Cheryll Veriena",
        role: "Alto",
        desc: "Kedalaman suara alto yang hangat.",
        img: "img/alto/Cheryll_Veriena.JPG"
    },
    {
        name: "Bayu R. BonaventuraLiam T.",
        role: "tenor",
        desc: "Vokalis tenor dengan suara yang kuat dan ekspresif.",
        img: "img/tenor/Bayu_R._Bonaventura.JPG"
    },
    {
        name: "Mario Viegar",
        role: "tenor",
        desc: "Vokalis tenor dengan suara yang kuat dan ekspresif.",
        img: "img/tenor/Mario_Viegar.JPG"
    },
    {
        name: "Septian E. Santoso",
        role: "tenor",
        desc: "Vokalis tenor dengan suara yang kuat dan ekspresif.",
        img: "img/tenor/Septian_E._Santoso.JPG"
    },
    {
        name: "Surya Deo Sindhunata",
        role: "tenor",
        desc: "Vokalis tenor dengan suara yang kuat dan ekspresif.",
        img: "img/tenor/Surya_Deo_Sindhunata.JPG"
    },
    {
        name: "Nikolas Aryaputra",
        role: "bass",
        desc: "Suara bass yang mendalam dan penuh karakter.",
        img: "img/bass/Nikolas_Aryaputra.JPG"
    },
    {
        name: "William Rusaidy",
        role: "bass",
        desc: "Suara bass yang mendalam dan penuh karakter.",
        img: "img/bass/William_Rusaidy.JPG"
    },
    {
        name: "Yudhanto Koerniawan",
        role: "bass",
        desc: "Suara bass yang mendalam dan penuh karakter.",
        img: "img/bass/Yudhanto_Koerniawan.JPG"
    },
    
];

const container = document.getElementById('gallery-container');

// Fungsi untuk merender ke HTML
members.forEach((member, index) => {
    // Gunakan 'eager' untuk 2 foto pertama, sisanya 'lazy'
    const loadingStrategy = index < 4 ? 'eager' : 'lazy';

    container.innerHTML += `
        <div class="member-card ${member.role.toLowerCase()}" data-aos="fade-up">
            <div class="bg-stone-900/40 border border-stone-800 overflow-hidden rounded-sm transition-all duration-500 hover:border-[#C5A059]/50 group">
                <div class="aspect-[3/4] overflow-hidden bg-stone-800">
                    <img src="${member.img}" 
                         loading="${loadingStrategy}" 
                         alt="${member.name}" 
                         class="w-full h-full object-cover transition duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0">
                </div>
                <!--<div class="p-3 md:p-5">
                    <h3 class="text-[#F7E7CE] font-serif text-sm md:text-xl tracking-wide">${member.name}</h3>
                    <p class="text-[#C5A059] text-[8px] md:text-[10px] uppercase tracking-widest mt-0.5 md:mt-1 mb-2">${member.role}</p>
                    <p class="text-stone-400 text-[10px] md:text-sm font-light leading-relaxed line-clamp-2 md:line-clamp-none">${member.desc}</p>
                </div>-->
            </div>
        </div>
    `;
});