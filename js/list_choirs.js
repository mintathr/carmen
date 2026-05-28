const members = [
    {
        name: "Stefany Valentia",
        role: "Soprano",
        desc: "Membawa kejernihan vokal sejak 2016.",
        img: "img/sopran/stefany_valentia.JPG",
        posisi: "object-[center_100%]"
    },
    {
        name: "Gitta Nathania",
        role: "Soprano",
        desc: "Penyanyi dengan suara yang lembut dan penuh emosi.",
        img: "img/sopran/gitta_nathania.JPG",
        posisi: "object-[center_20%]"
    },
    {
        name: "Belinda Widodo",
        role: "Soprano",
        desc: "Vokalis utama dalam konser tahunan 2023.",
        img: "img/sopran/belinda_widodo.JPG",
        posisi: "object-[center_50%]"
    },
    {
        name: "Michelle Fauziek",
        role: "Soprano",
        desc: "Penyanyi dengan suara yang lembut dan penuh emosi.",
        img: "img/sopran/michelle_fauziek.JPG",
        posisi: "object-[center_30%]"
    },
    {
        name: "Nadine Thendean",
        role: "Alto",
        desc: "Kedalaman suara alto yang hangat.",
        img: "img/alto/Bernadine_Thendean.JPG",
        posisi: "object-[center_90%]"
    },
    {
        name: "Cheryll Veriena",
        role: "Alto",
        desc: "Kedalaman suara alto yang hangat.",
        img: "img/alto/Cheryll_Veriena.JPG"
    },
    {
        name: "Sthefynna",
        role: "Alto",
        desc: "Kedalaman suara alto yang hangat.",
        img: "img/alto/Brigitta_Sthefynna.JPG",
        posisi: "object-[center_20%]"
    },
    {
        name: "Surya Deo Sindhunata",
        role: "tenor",
        desc: "Vokalis tenor dengan suara yang kuat dan ekspresif.",
        img: "img/tenor/Surya_Deo_Sindhunata.JPG",
        posisi: "object-[center_90%]"
    },
    {
        name: "Mikael Septian",
        role: "tenor",
        desc: "Vokalis tenor dengan suara yang kuat dan ekspresif.",
        img: "img/tenor/Septian_E._Santoso.JPG",
        posisi: "object-[center_70%]"
    },
    {
        name: "Mario Viegar",
        role: "tenor",
        desc: "Vokalis tenor dengan suara yang kuat dan ekspresif.",
        img: "img/tenor/Mario_Viegar.JPG",
        posisi: "object-[center_30%]"
    },
    {
        name: "Bayu R. Bonaventura",
        role: "tenor",
        desc: "Vokalis tenor dengan suara yang kuat dan ekspresif.",
        img: "img/tenor/Bayu_R._Bonaventura.JPG",
        posisi: "object-[center_90%]"
    },
    {
        name: "Yosua Mario",
        role: "tenor",
        desc: "Vokalis tenor dengan suara yang kuat dan ekspresif.",
        img: "img/tenor/Yosua_Mario.JPG"
    },
    {
        name: "Yudhanto Kurniawan P.",
        role: "bass",
        desc: "Suara bass yang mendalam dan penuh karakter.",
        img: "img/bass/Yudhanto_Koerniawan.JPG",
        posisi: "object-[center_105%]"
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
        name: "Pricilia Claudia",
        role: "organist",
        desc: "#",
        img: "img/musician/Pricilia_C._Pattynama.JPG"
    },
    {
        name: "Rex Reinaldo",
        role: "pianis",
        desc: "#",
        img: "img/musician/Reinaldo_C._Santoso.JPG",
        posisi: "object-[center_80%]"
    },
    {
        name: "Herman Indrakusuma",
        role: "pianis",
        desc: "#",
        img: "img/musician/Herman_Indrakusuma.JPG"
    },
    {
        name: "Edwin Djuhadi",
        role: "principal of string departments",
        desc: "#",
        img: "img/musician/Edwin_Djuhadi.JPG",
        posisi: "object-[center_40%]"
    },

];

const container = document.getElementById('gallery-container');

members.forEach((member, index) => {
    const loadingStrategy = index < 4 ? 'eager' : 'lazy';
    
    // Ambil role dasar (pianis / biola)
    const baseRole = member.role.toLowerCase().trim();
    
    // Gabungkan dengan class musician
    let finalClass = baseRole;
    if (['pianis', 'organist', 'biola', 'principal of string departments'].includes(baseRole)) {
        finalClass += ' musician';
    }

    container.innerHTML += `
        <div class="member-card ${finalClass}" data-aos="fade-up">
            <div class="bg-stone-900/40 border border-stone-800 overflow-hidden rounded-sm transition-all duration-500 hover:border-[#C5A059]/50 group">
                <div class="aspect-[3/4] overflow-hidden bg-stone-800">
                    <img src="${member.img}" 
                         loading="${loadingStrategy}" 
                         alt="${member.name}" 
                         class="w-full h-full object-cover ${member.posisi || 'object-center'} transition duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0">
                </div>
                <div class="p-3 md:p-5">
                    <h3 class="text-[#F7E7CE] font-serif text-sm md:text-xl tracking-wide">${member.name}</h3>
                    <p class="text-[#C5A059] text-[8px] md:text-[10px] uppercase tracking-widest mt-0.5 md:mt-1 mb-2">${member.role}</p>
                </div>
            </div>
        </div>
    `;
});

