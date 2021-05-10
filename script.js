function ChemistryElement(a, b, c, d, e, f, g){
        this.name = a;
        this.id = b;
        this.shortname = c;
        this.latinname = d;
        this.period = e;
        this.group = f;
        this.subgroup = g;
};

class Elements{
    Search(ce, text){
        let ret = this.GetElementByID(ce, text);
        if(ret != null) return ret;
        ret = this.GetElementByName(ce, text);
        if(ret != null) return ret;
        ret = this.GetElementByShortname(ce, text);
        if(ret != null) return ret;
        ret = this.GetElementByLatinname(ce, text);
        if(ret != null) return ret;
        return null;
    }
    
    GetElementByID(ce, id){
        for(var i = 0; i < 109; i++){
            if(id == ce[i].id){
                console.log(ce[i]);
                return ce[i];
            } 
        }
        return null;
    }

    GetElementByName(ce, name){
        for(var i = 0; i < 109; i++){
            if(name == ce[i].name){
                return ce[i];
            } 
        }
        return null;
    }

    GetElementByShortname(ce, shortname){
        for(var i = 0; i < 109; i++){
            if(shortname == ce[i].shortname){
                return ce[i];
            } 
        }
        return null;
    }

    GetElementByLatinname(ce, latinname){
        for(var i = 0; i < 109; i++){
            if(latinname == ce[i].latinname){
                return ce[i];
            } 
        }
        return null;
    }
};

function SearchButtonClicked(){
    let ce = [
        //1st group
        new ChemistryElement("Водород", 1, "H", "Hydrogenium", 1, "VII", "A"),
        new ChemistryElement("Гелий", 2, "He", "Helium", 1, "VIII", "A"),
        //2nd group
        new ChemistryElement("Литий", 3, "Li", "Litium", 2, "I", "A"),
        new ChemistryElement("Бериллий", 4, "Be", "Beryllium", 2, "II", "A"),
        new ChemistryElement("Бор", 5, "B", "Borum", 2, "III", "A"),
        new ChemistryElement("Углерод", 6, "C", "Carboneum", 2, "IV", "A"),
        new ChemistryElement("Азот", 7, "N", "Nitrogenium", 2, "V", "A"),
        new ChemistryElement("Кислород", 8, "O", "Oxygenium", 2, "VI", "A"),
        new ChemistryElement("Фтор", 9, "F", "Fluorum", 2, "VII", "A"),
        new ChemistryElement("Неон", 10, "Ne", "Neon", 2, "VIII", "A"),
        //3rd group
        new ChemistryElement("Натрий", 11, "Na", "Natrium", 3, "I", "A"),
        new ChemistryElement("Магний", 12, "Mg", "Magnesium", 3, "II", "A"),
        new ChemistryElement("Алюминий", 13, "Al", "Aluminium", 3, "III", "A"),
        new ChemistryElement("Кремний", 14, "Si", "Silicium", 3, "IV", "A"),
        new ChemistryElement("Фосфор", 15, "N", "Phosphorus", 3, "V", "A"),
        new ChemistryElement("Сера", 16, "S", "Sulfur", 3, "VI", "A"),
        new ChemistryElement("Хлор", 17, "Cl", "Chlorium", 3, "VII", "A"),
        new ChemistryElement("Аргон", 18, "Ar", "Argon", 3, "VIII", "A"),
        //4th group
        new ChemistryElement("Калий", 19, "K", "Kalium", 4, "I", "A"),
        new ChemistryElement("Кальций", 20, "Ca", "Calcium", 4, "II", "A"),
        new ChemistryElement("Скандий", 21, "Sc", "Scandium", 4, "III", "B"),
        new ChemistryElement("Титан", 22, "Ti", "Titanium", 4, "IV", "B"),
        new ChemistryElement("Ванадий", 23, "V", "Vanadium", 4, "V", "B"),
        new ChemistryElement("Хром", 24, "Cr", "Chromium", 4, "VI", "B"),
        new ChemistryElement("Марганец", 25, "Mn", "Manganum", 4, "VII", "B"),
        new ChemistryElement("Железо", 26, "Fe", "Ferrum", 4, "VIII", "B"),
        new ChemistryElement("Кобальт", 27, "Co", "Cobaltum", 4, "VIII", "B"),
        new ChemistryElement("Никель", 28, "Ni", "Niccolum", 4, "VIII", "B"),
        new ChemistryElement("Медь", 29, "Cu", "Cuprum", 4, "I", "B"),
        new ChemistryElement("Цинк", 30, "Zn", "Zincum", 4, "II", "B"),
        new ChemistryElement("Галлий", 31, "Ga", "Gallium", 4, "III", "A"),
        new ChemistryElement("Германий", 32, "Ge", "Germanium", 4, "IV", "A"),
        new ChemistryElement("Мышьяк", 33, "As", "Arsenicum", 4, "V", "A"),
        new ChemistryElement("Селен", 34, "Se", "Selenium", 4, "VI", "A"),
        new ChemistryElement("Бром", 35, "Br", "Bromum", 4, "VII", "A"),
        new ChemistryElement("Криптон", 36, "Kr", "Krypton", 4, "VIII", "A"),
        //5th group
        new ChemistryElement("Рубидий", 37, "K", "Rubidium", 5, "I", "A"),
        new ChemistryElement("Стронций", 38, "Ca", "Strontium", 5, "II", "A"),
        new ChemistryElement("Иттрий", 39, "Sc", "Yttrium", 5, "III", "B"),
        new ChemistryElement("Цирконий", 40, "Ti", "Zirconium", 5, "IV", "B"),
        new ChemistryElement("Ниобий", 41, "V", "Niobium", 5, "V", "B"),
        new ChemistryElement("Молибден", 42, "Cr", "Molybdaenum", 5, "VI", "B"),
        new ChemistryElement("Технеций", 43, "Mn", "Technetium", 5, "VII", "B"),
        new ChemistryElement("Рутений", 44, "Fe", "Ruthhenium", 5, "VIII", "B"),
        new ChemistryElement("Родий", 45, "Co", "Rhodium", 5, "VIII", "B"),
        new ChemistryElement("Палладий", 46, "Ni", "Palladium", 5, "VIII", "B"),
        new ChemistryElement("Серебро", 47, "Cu", "Argentum", 5, "I", "B"),
        new ChemistryElement("Кадмий", 48, "Zn", "Cadmium", 5, "II", "B"),
        new ChemistryElement("Индий", 49, "Ga", "Indium", 5, "III", "A"),
        new ChemistryElement("Олово", 50, "Ge", "Stannum", 5, "IV", "A"),
        new ChemistryElement("Сурьма", 51, "As", "Stibium", 5, "V", "A"),
        new ChemistryElement("Теллур", 52, "Se", "Tellurium", 5, "VI", "A"),
        new ChemistryElement("Йод", 53, "Br", "Iodium", 5, "VII", "A"),
        new ChemistryElement("Ксенон", 54, "Kr", "Xenon", 5, "VIII", "A"),
        //6th group
        new ChemistryElement("Цезий", 55, "Cs", "Cesium", 6, "I", "A"),
        new ChemistryElement("Барий", 56, "Ba", "Barium", 6, "II", "A"),
        new ChemistryElement("Лантан", 57, "La", "Lanthanum", 6, "III", "B"),
        new ChemistryElement("Гафний", 72, "Hf", "Hafnium", 6, "IV", "B"),
        new ChemistryElement("Тантал", 73, "Ta", "Tantalum", 6, "V", "B"),
        new ChemistryElement("Вольфрам", 74, "W", "Wolframium", 6, "VI", "B"),
        new ChemistryElement("Рений", 75, "Re", "Rhenium", 6, "VII", "B"),
        new ChemistryElement("Осмий", 76, "Os", "Osmium", 6, "VIII", "B"),
        new ChemistryElement("Иридий", 77, "Ir", "Iridium", 6, "VIII", "B"),
        new ChemistryElement("Платина", 78, "Pt", "Platinum", 6, "VIII", "B"),
        new ChemistryElement("Золото", 79, "Au", "Aurum", 6, "I", "B"),
        new ChemistryElement("Ртуть", 80, "Hg", "Hydrargyum", 6, "II", "B"),
        new ChemistryElement("Талий", 81, "Tl", "Thallium", 6, "III", "A"),
        new ChemistryElement("Свинец", 82, "Pb", "Plumbum", 6, "IV", "A"),
        new ChemistryElement("Висмут", 83, "Bi", "Bismuthum", 6, "V", "A"),
        new ChemistryElement("Полоний", 84, "Po", "Polonium", 6, "VI", "A"),
        new ChemistryElement("Астат", 85, "At", "Astatium", 6, "VII", "A"),
        new ChemistryElement("Радон", 86, "Rn", "Radon", 6, "VIII", "A"),
        //Lantanoids
        new ChemistryElement("Церий", 58, "Ce", "Cerium", "Лантаноид", "Лантаноид", "Лантаноид"),
        new ChemistryElement("Празеодим", 59, "Pr", "Praseodymium", "Лантаноид", "Лантаноид", "Лантаноид"),
        new ChemistryElement("Неодим", 60, "Nd", "Neodymium", "Лантаноид", "Лантаноид", "Лантаноид"),
        new ChemistryElement("Прометий", 61, "Pm", "Promethium", "Лантаноид", "Лантаноид", "Лантаноид"),
        new ChemistryElement("Самарий", 62, "Sm", "Samarium", "Лантаноид", "Лантаноид", "Лантаноид"),
        new ChemistryElement("Европий", 63, "Eu", "Europium", "Лантаноид", "Лантаноид", "Лантаноид"),
        new ChemistryElement("Гадолиний", 64, "Gd", "Gadolinium", "Лантаноид", "Лантаноид", "Лантаноид"),
        new ChemistryElement("Тербий", 65, "Tb", "Terbium", "Лантаноид", "Лантаноид", "Лантаноид"),
        new ChemistryElement("Диспрозий", 66, "Dy", "Dysprosium", "Лантаноид", "Лантаноид", "Лантаноид"),
        new ChemistryElement("Гольмий", 67, "Ho", "Holmium", "Лантаноид", "Лантаноид", "Лантаноид"),
        new ChemistryElement("Тербий", 68, "Er", "Erbiurn", "Лантаноид", "ЛантаноидI", "Лантаноид"),
        new ChemistryElement("Тулий", 69, "Tm", "Thulium", "Лантаноид", "Лантаноид", "Лантаноид"),
        new ChemistryElement("Иттербий", 70, "Yb", "Ytterbiurn", "Лантаноид", "Лантаноид", "Лантаноид"),
        new ChemistryElement("Лютеций", 71, "Lu", "Lutetium", "Лантаноид", "Лантаноид", "Лантаноид"),
        //7th group
        new ChemistryElement("Франций", 87, "Fr", "Francium", 5, "I", "A"),
        new ChemistryElement("Радий", 88, "Ra", "Radium", 5, "II", "A"),
        new ChemistryElement("Актиний", 89, "Ac", "Actinium", 5, "III", "B"),
        new ChemistryElement("Фезерфордий", 104, "Rf", "Rutherfordium", 5, "IV", "B"),
        new ChemistryElement("Дубний", 105, "Db", "Dubnium", 5, "V", "B"),
        new ChemistryElement("Сиборгий", 106, "Sg", "Seaborgium", 5, "VI", "B"),
        new ChemistryElement("Борий", 107, "Bh", "Bohrium", 5, "VII", "B"),
        new ChemistryElement("Хассий", 108, "Hs", "Hassium", 5, "VIII", "B"),
        new ChemistryElement("Мейтнерий", 109, "Mt", "Meitnerium", 5, "VIII", "B"),
        //Actinoids
        new ChemistryElement("Торий", 90, "Th", "Thorium", "Актиноид", "Актиноид", "Актиноид"),
        new ChemistryElement("Проактиний", 91, "Pa", "Protactinium", "Актиноид", "Актиноид", "Актиноид"),
        new ChemistryElement("Уран", 92, "U", "Uranium", "Актиноид", "Актиноид", "Актиноид"),
        new ChemistryElement("Нептуний", 93, "Np", "Neptunium", "Актиноид", "Актиноид", "Актиноид"),
        new ChemistryElement("Плутоний", 94, "Pu", "Plutonium", "Актиноид", "Актиноид", "Актиноид"),
        new ChemistryElement("Амерций", 95, "Am", "Americium", "Актиноид", "Актиноид", "Актиноид"),
        new ChemistryElement("Кюрий", 96, "Cm", "Curium", "Актиноид", "Актиноид", "Актиноид"),
        new ChemistryElement("Берклий", 97, "Bk", "Bercelium", "Актиноид", "Актиноид", "Актиноид"),
        new ChemistryElement("Калифорний", 98, "Cf", "Californium", "Актиноид", "Актиноид", "Актиноид"),
        new ChemistryElement("Энштейний", 99, "Es", "Einsteinium", "Актиноид", "V", "Актиноид"),
        new ChemistryElement("Фермий", 100, "Fm", "Fermium", "Актиноид", "Актиноид", "Актиноид"),
        new ChemistryElement("Менделевий", 101, "Md", "Mendelevium", "Актиноид", "I", "Актиноид"),
        new ChemistryElement("Нобелий", 102, "No", "Nobelium", "Актиноид", "Актиноид", "Актиноид"),
        new ChemistryElement("Лоуренций", 103, "Lr", "Lawrencium", "Актиноид", "Актиноид", "Актиноид")
    ];
    let es = new Elements();
    let e = es.Search(ce, document.getElementById("input").value);
    let div = document.getElementById("element");
    div.innerHTML = "";
    if(e == null) {
        let warning = document.createElement("p");
        warning.innerHTML = `Элемента ${document.getElementById("input").value} не найдено :(`;
        div.appendChild(warning);
        return;
    }
    let id = document.createElement("p");
    id.innerHTML = `Номер элемента: ${e.id}`;
    div.appendChild(id);
    let name = document.createElement("p");
    name.innerHTML = `Имя элемента: ${e.name}`;
    div.appendChild(name);
    let shortname = document.createElement("p");
    shortname.innerHTML = `Короткое имя элемента: ${e.shortname}`;
    div.appendChild(shortname);
    let latinname = document.createElement("p");
    latinname.innerHTML = `Латинское имя элемента: ${e.latinname}`;
    div.appendChild(latinname);
    let period = document.createElement("p");
    period.innerHTML = `Период элемента: ${e.period}`;
    div.appendChild(period);
    let group = document.createElement("p");
    group.innerHTML = `Группа элемента: ${e.group}`;
    div.appendChild(group);
    let subgroup = document.createElement("p");
    subgroup.innerHTML = `Подгруппа элемента: ${e.subgroup}`;
    div.appendChild(subgroup);
}