// حماية بيانات الترجمة من التعديل الخارجي (Object.freeze)
const translations = Object.freeze({
    fr: {
        storyTitle: "L'HISTOIRE D'ALYSSE",
        breakfastTitle: "Petits Déjeuners",
        brunchTitle: "Brunches",
        eggsTitle: "Oeufs / Omelettes",
        gaufreSaleeTitle: "Gaufre / Toast - Salée",
        croisandwichesTitle: "Croissandwiches",
        patisserieTitle: "Patisserie",
        tartesTitle: "Les tartes",
        macaronsTitle: "Macarons",
        hotDrinksClassicTitle: "Boissons Chaudes Classic",
        hotDrinksSpecialTitle: "Boissons Chaudes Spéciales",
        waterTitle: "Eau",
        tchabaTitle: "Sélections De Tchaba",
        iceTeaTitle: "Ice Tea",
        iceCreamTitle: "Ice Cream",
        iceCoffeeTitle: "Ice Coffee",
        wonderlandTitle: "Alysse Au Pays Des Merveilles",
        cafeGourmandTitle: "Café Gourmand",
        teaTimeTitle: "Tea Time",
        chocoTimeTitle: "Choco Time",
        tableAlysseTitle: "La table d'Alysse",
        pauseSucreeTitle: "Pause Sucrée",
        painPerduTitle: "Pain Perdu",
        saintSebastianTitle: "Saint Sebastian",
        gaufresTitle: "Nos Gaufres",
        pancakesTitle: "Nos Pancakes",
        crepesTitle: "Nos Crêpes",
        cocktailTitle: "Cocktail",
        jusTitle: "Jus",
        frappuccinoTitle: "Frappuccino",
        smoothiesTitle: "Smoothies",
        detoxTitle: "Detox",
        milkshakesTitle: "Milkshakes Orangeshakes",
        thanksTitle: "REMERCIEMENT"
    },
    en: {
        storyTitle: "THE STORY OF ALYSSE",
        breakfastTitle: "Breakfasts",
        brunchTitle: "Brunches",
        eggsTitle: "Eggs / Omelettes",
        gaufreSaleeTitle: "Waffles / Savory Toast",
        croisandwichesTitle: "Croissandwiches",
        patisserieTitle: "Pastry",
        tartesTitle: "Tarts",
        macaronsTitle: "Macarons",
        hotDrinksClassicTitle: "Classic Hot Drinks",
        hotDrinksSpecialTitle: "Special Hot Drinks",
        waterTitle: "Water",
        tchabaTitle: "Tchaba Selections",
        iceTeaTitle: "Ice Tea",
        iceCreamTitle: "Ice Cream",
        iceCoffeeTitle: "Ice Coffee",
        wonderlandTitle: "Alysse in Wonderland",
        cafeGourmandTitle: "Gourmet Coffee",
        teaTimeTitle: "Tea Time",
        chocoTimeTitle: "Choco Time",
        tableAlysseTitle: "Alysse's Table",
        pauseSucreeTitle: "Sweet Break",
        painPerduTitle: "French Toast",
        saintSebastianTitle: "Saint Sebastian",
        gaufresTitle: "Our Waffles",
        pancakesTitle: "Our Pancakes",
        crepesTitle: "Our Crepes",
        cocktailTitle: "Cocktails",
        jusTitle: "Juices",
        frappuccinoTitle: "Frappuccino",
        smoothiesTitle: "Smoothies",
        detoxTitle: "Detox",
        milkshakesTitle: "Milkshakes Orangeshakes",
        thanksTitle: "ACKNOWLEDGEMENTS"
    },
    ar: {
        storyTitle: "قصة أليس",
        breakfastTitle: "الفطور الصباحي",
        brunchTitle: "البرنش",
        eggsTitle: "البيض والأومليت",
        gaufreSaleeTitle: "الوافل والتواست المالح",
        croisandwichesTitle: "سندويتشات الكرواسون",
        patisserieTitle: "الحلويات الفاخرة",
        tartesTitle: "التارت",
        macaronsTitle: "الماكرون",
        hotDrinksClassicTitle: "المشروبات الساخنة الكلاسيكية",
        hotDrinksSpecialTitle: "المشروبات الساخنة الخاصة",
        waterTitle: "المياه",
        tchabaTitle: "تشكيلة الشاي الفاخرة",
        iceTeaTitle: "الشاي المثلج",
        iceCreamTitle: "الآيس كريم",
        iceCoffeeTitle: "القهوة المثلجة",
        wonderlandTitle: "أليس في بلاد العجائب",
        cafeGourmandTitle: "القهوة الذواقة",
        teaTimeTitle: "وقت الشاي",
        chocoTimeTitle: "شوكو تايم",
        tableAlysseTitle: "طاولة أليس",
        pauseSucreeTitle: "الاستراحة السكرية",
        painPerduTitle: "بان بيردو",
        saintSebastianTitle: "سان سباستيان",
        gaufresTitle: "الوافل الفاخر",
        pancakesTitle: "البان كيك",
        crepesTitle: "الكريب",
        cocktailTitle: "الكوكتيلات",
        jusTitle: "العصائر الطازجة",
        frappuccinoTitle: "فرابتشينو",
        smoothiesTitle: "السموثيز",
        detoxTitle: "المشروبات الصحية",
        milkshakesTitle: "الميلك شيك",
        thanksTitle: "شكر وتقدير"
    },
    it: {
        storyTitle: "LA STORIA DI ALYSSE",
        breakfastTitle: "Prima Colazione",
        brunchTitle: "Brunch",
        eggsTitle: "Uova / Omelette",
        thanksTitle: "RINGRAZIAMENTI"
    },
    de: {
        storyTitle: "DIE GESCHICHTE VON ALYSSE",
        breakfastTitle: "Frühstück",
        brunchTitle: "Brunch",
        eggsTitle: "Eier / Omeletts",
        thanksTitle: "DANKSAGUNG"
    }
});

// دالة تغيير اللغة الآمنة
function changeLanguage(lang, buttonElement) {
    if (!translations[lang]) return; // حماية ضد اللغات الوهمية

    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    if (buttonElement) {
        buttonElement.classList.add('active');
    }

    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', lang);
    }

    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            // استخدام textContent بدلاً من innerText لأسباب أمنية وأداء أفضل
            el.textContent = translations[lang][key];
        }
    });

    try {
        localStorage.setItem('selectedLang', lang);
    } catch (e) {
        console.error("LocalStorage is restricted");
    }
}

// التشغيل التلقائي عند تحميل الصفحة
window.addEventListener('DOMContentLoaded', () => {
    let savedLang = 'fr';
    try {
        savedLang = localStorage.getItem('selectedLang') || 'fr';
    } catch (e) {
        savedLang = 'fr';
    }
    const targetBtn = document.querySelector(`.lang-btn[onclick*="${savedLang}"]`) || document.querySelector('.lang-btn');
    changeLanguage(savedLang, targetBtn);
});
