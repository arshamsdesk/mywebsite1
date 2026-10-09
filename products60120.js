// ============================================================
// TACHAR CERAMIC - PRODUCTS DATABASE
// products.js
// ============================================================

const PRODUCTS = [

    // ========================================================
    // 01
    // ========================================================
    {
        id: 1,

        code: "analia white",

        slug: "analia-white-60x120-tc-001",

        image: "./60120img/analia-white-nano-polish-60x120-f1-1.jpg",

        fa: {
            name: "analia white",
            size: "60 × 120",
            type: "پرسلان",
            body: "خاک سفید",
            grade: "درجه ۱",
            factory: "میلان",
            surface: " نانو پالیش",

            description:
                "سرامیک analia white با طراحی لوکس و سطح پولیش براق، انتخابی مناسب برای فضاهای مدرن و لوکس است.",

            applications: [
                "مناسب کف",
                "مناسب دیوار",
                "مناسب فضاهای لوکس"
            ],

            features: [
                "جذب آب پایین",
                "مقاومت بالا در برابر سایش",
                "سطح براق و لوکس"
            ]
        },

        en: {
            name: "analia white",
            size: "60 × 120",
            type: "Porcelain",
            body: "White Body",
            grade: "Grade 1",
            factory: "Milan",
            surface: "nano Polished",

            description:
                "analia white porcelain with a luxurious polished surface, suitable for modern and premium spaces.",

            applications: [
                "Floor suitable",
                "Wall suitable",
                "Luxury spaces"
            ],

            features: [
                "Low water absorption",
                "High abrasion resistance",
                "Luxury polished surface"
            ]
        }
    },


    // ========================================================
    // 02
    // ========================================================
    {
        id: 2,

        code: "astora black",

        slug: "astora-4match-60x120-tc-002",

        image: "./60120img/astora-black-4-match-nano-polish-60x120-cover-1.jpg",

        fa: {
            name: "astora black 4match",
            size: "60 × 120",
            type: "پرسلان",
            body: "خاک سفید",
            grade: "درجه ۱",
            factory: "میلان",
            surface: "نانو پالیش",

            description:
                "سرامیک  astora 4 match با رگه‌های طبیعی و طراحی مدرن، مناسب برای طراحی داخلی فضاهای مسکونی و تجاری.",

            applications: [
                "مناسب کف",
                "مناسب دیوار",
                "مناسب پروژه‌های تجاری"
            ],

            features: [
                "جذب آب پایین",
                "مقاومت بالا",
                "طراحی رگه‌دار طبیعی"
            ]
        },

        en: {
            name: "astora 4match",
            size: "60 × 120",
            type: "Porcelain",
            body: "White Body",
            grade: "Grade 1",
            factory: "Milan",
            surface: "nano Polished",

            description:
                "astora 4match porcelain with natural veining and a modern design, suitable for residential and commercial interiors.",

            applications: [
                "Floor suitable",
                "Wall suitable",
                "Commercial projects"
            ],

            features: [
                "Low water absorption",
                "High resistance",
                "Natural veined design"
            ]
        }
    },


    // ========================================================
    // 03
    // ========================================================
    {
        id: 3,

        code: "brandon brown",

        slug: "brandon-brown-60x120-tc-003",

        image: "./60120img/brandon-brown-nano-polish-60x120-cover-1.jpg",

        fa: {
            name: "brandon brown",
            size: "60 × 120",
            type: "پرسلان",
            body: "خاک سفید",
            grade: "درجه ۱",
            factory: "میلان",
            surface: "نانو پالیش",

            description:
                "سرامیک brandon brown با ظاهر یکدست و مینیمال برای ایجاد فضایی روشن و مدرن.",

            applications: [
                "مناسب کف",
                "مناسب دیوار",
                "مناسب فضای داخلی"
            ],

            features: [
                "سطح یکدست",
                "جذب آب پایین",
                "طراحی مینیمال"
            ]
        },

        en: {
            name: "brandon brown",
            size: "60 × 120",
            type: "Porcelain",
            body: "White Body",
            grade: "Grade 1",
            factory: "Milan",
            surface: "nano polish",

            description:
                "brandon brown porcelain with a clean minimalist appearance for bright and modern interiors.",

            applications: [
                "Floor suitable",
                "Wall suitable",
                "Interior spaces"
            ],

            features: [
                "Uniform surface",
                "Low water absorption",
                "Minimalist design"
            ]
        }
    },


    // ========================================================
    // 04
    // ========================================================
    {
        id: 4,

        code: "antonella dark",

        slug: "antonella-dark-60x120-tc-004",

        image: "./60120img/antonella-dark-cream-silky-matt-60x120-cover-1.jpg",

        fa: {
            name: " antonella dark ",
            size: "60 × 120",
            type: "پرسلان",
            body: "تمام‌بدنه",
            grade: "درجه ۱",
            factory: "میلان",
            surface: "مات",

            description:
                "سرامیک antonella dark با رگه‌های ظریف سفید، مناسب فضاهایی با طراحی لوکس و خاص.",

            applications: [
                "مناسب کف",
                "مناسب دیوار",
                "مناسب فضاهای لوکس"
            ],

            features: [
                "پولیش براق",
                "مقاومت بالا",
                "ظاهر لوکس"
            ]
        },

        en: {
            name: "antonella dark",
            size: "60 × 120",
            type: "Porcelain",
            body: "Full Body",
            grade: "Grade 1",
            factory: "Milan",
            surface: "matt",

            description:
                "antonella dark porcelain with elegant white veining, designed for premium luxury interiors.",

            applications: [
                "Floor suitable",
                "Wall suitable",
                "Luxury spaces"
            ],

            features: [
                "Polished surface",
                "High resistance",
                "Luxury appearance"
            ]
        }
    },


    // ========================================================
    // 05
    // ========================================================
    {
        id: 5,

        code: "brandon cream",

        slug: "brandon-cream-60x120-tc-005",

        image: "./60120img/brandon-cream-nano-polish-60x120-f2-1.jpg",

        fa: {
            name: "brandon cream",
            size: "60 × 120",
            type: "پرسلان",
            body: "خاک سفید",
            grade: "درجه ۱",
            factory: "میلان",
            surface: "نانوپالیش",

            description:
                "سرامیک brandon cream با سطح مات و ظاهر طبیعی سنگ، مناسب طراحی‌های مدرن.",

            applications: [
                "مناسب کف",
                "مناسب دیوار",
                "مناسب فضای تجاری"
            ],

            features: [
                "نانو پالیش ",
                "ظاهر طبیعی",
                "مقاومت بالا"
            ]
        },

        en: {
            name: "brandon cream",
            size: "60 × 120",
            type: "Porcelain",
            body: "White Body",
            grade: "Grade 1",
            factory: "Milan",
            surface: "nano polish",

            description:
                "brandon cream porcelain with a natural matte finish, suitable for modern interiors.",

            applications: [
                "Floor suitable",
                "Wall suitable",
                "Commercial spaces"
            ],

            features: [
                "nanopolish finish",
                "Natural appearance",
                "High resistance"
            ]
        }
    },


    // ========================================================
    // 06
    // ========================================================
    {
        id: 6,
        code: "TC-006",

        slug: "cream-marble-ceramic-60x120-tc-006",
        image: "./img/IMG-20250904-WA0007.jpg",

        fa: {
            name: "سرامیک کرم مرمر",
            collection: "کالکشن مرمر",
            size: "60 × 120",
            type: "پرسلان",
            body: "خاک سفید",
            grade: "درجه ۱",
            factory: "میلان",
            surface: "پولیش",

            description: "سرامیک کرم مرمر با رنگ گرم و طراحی ظریف برای فضاهای کلاسیک و مدرن.",
            applications: ["مناسب کف", "مناسب دیوار", "مناسب سالن"],
            features: ["جذب آب پایین", "سطح پولیش", "مقاومت بالا"]
        },

        en: {
            name: "Cream Marble Ceramic",
            collection: "Marble Collection",
            size: "60 × 120",
            type: "Porcelain",
            body: "White Body",
            grade: "Grade 1",
            factory: "Milan",
            surface: "Polished",

            description: "Cream marble porcelain with a warm tone and elegant design for classic and modern spaces.",
            applications: ["Floor suitable", "Wall suitable", "Living spaces"],
            features: ["Low water absorption", "Polished surface", "High resistance"]
        }
    },


    // ========================================================
    // 07
    // ========================================================
    {
        id: 7,
        code: "TC-007",

        slug: "light-marble-ceramic-60x120-tc-007",
        image: "./img/IMG-20250904-WA0008.jpg",

        fa: {
            name: "سرامیک مرمر روشن",
            collection: "کالکشن مرمر",
            size: "60 × 120",
            type: "پرسلان",
            body: "خاک سفید",
            grade: "درجه ۱",
            factory: "میلان",
            surface: "براق",
            description: "سرامیک مرمر روشن با ظاهر لوکس و روشن.",
            applications: ["مناسب کف", "مناسب دیوار"],
            features: ["جذب آب پایین", "مقاومت بالا", "سطح براق"]
        },

        en: {
            name: "Light Marble Ceramic",
            collection: "Marble Collection",
            size: "60 × 120",
            type: "Porcelain",
            body: "White Body",
            grade: "Grade 1",
            factory: "Milan",
            surface: "Glossy",
            description: "Light marble porcelain with a bright and luxurious appearance.",
            applications: ["Floor suitable", "Wall suitable"],
            features: ["Low water absorption", "High resistance", "Glossy surface"]
        }
    },


    // ========================================================
    // 08
    // ========================================================
    {
        id: 8,
        code: "TC-008",

        slug: "white-stone-ceramic-60x120-tc-008",
        image: "./img/Janik-White-Black-60-120-polish.jpg",

        fa: {
            name: "سرامیک سنگ سفید",
            collection: "کالکشن استون",
            size: "60 × 120",
            type: "پرسلان",
            body: "تمام‌بدنه",
            grade: "درجه ۱",
            factory: "میلان",
            surface: "مات",
            description: "سرامیک سنگ سفید با ظاهر طبیعی و سطح مات.",
            applications: ["مناسب کف", "مناسب دیوار"],
            features: ["تمام‌بدنه", "مقاومت بالا", "سطح مات"]
        },

        en: {
            name: "White Stone Ceramic",
            collection: "Stone Collection",
            size: "60 × 120",
            type: "Porcelain",
            body: "Full Body",
            grade: "Grade 1",
            factory: "Milan",
            surface: "Matt",
            description: "White stone-look porcelain with a natural matte surface.",
            applications: ["Floor suitable", "Wall suitable"],
            features: ["Full body", "High resistance", "Matte surface"]
        }
    },


    // ========================================================
    // 09
    // ========================================================
    {
        id: 9,
        code: "TC-009",

        slug: "light-grey-ceramic-60x120-tc-009",
        image: "./img/CASPIAN-LIGHT-GRAY-120-POL.jpg",

        fa: {
            name: "سرامیک طوسی روشن",
            collection: "کالکشن پریمیوم",
            size: "60 × 120",
            type: "پرسلان",
            body: "خاک سفید",
            grade: "درجه ۱",
            factory: "میلان",
            surface: "مات",
            description: "سرامیک طوسی روشن با طراحی مینیمال و سطح مات.",
            applications: ["مناسب کف", "مناسب دیوار"],
            features: ["سطح مات", "جذب آب پایین", "مقاومت بالا"]
        },

        en: {
            name: "Light Grey Ceramic",
            collection: "Premium Collection",
            size: "60 × 120",
            type: "Porcelain",
            body: "White Body",
            grade: "Grade 1",
            factory: "Milan",
            surface: "Matt",
            description: "Light grey porcelain with a minimalist design and matte surface.",
            applications: ["Floor suitable", "Wall suitable"],
            features: ["Matte surface", "Low water absorption", "High resistance"]
        }
    },


    // ========================================================
    // 10
    // ========================================================
    {
        id: 10,
        code: "TC-010",

        slug: "golden-marble-ceramic-60x120-tc-010",
        image: "./img/Magma-Silver-CaspianLightGray-zoom.jpg",

        fa: {
            name: "سرامیک مرمر طلایی",
            collection: "کالکشن لاکچری",
            size: "60 × 120",
            type: "پرسلان",
            body: "خاک سفید",
            grade: "درجه ۱",
            factory: "میلان",
            surface: "پولیش",
            description: "سرامیک مرمر طلایی با رگه‌های گرم و ظاهر لوکس.",
            applications: ["مناسب کف", "مناسب دیوار", "مناسب لابی"],
            features: ["پولیش براق", "طراحی لوکس", "جذب آب پایین"]
        },

        en: {
            name: "Golden Marble Ceramic",
            collection: "Luxury Collection",
            size: "60 × 120",
            type: "Porcelain",
            body: "White Body",
            grade: "Grade 1",
            factory: "Milan",
            surface: "Polished",
            description: "Golden marble porcelain with warm veining and a luxurious appearance.",
            applications: ["Floor suitable", "Wall suitable", "Lobby suitable"],
            features: ["Polished surface", "Luxury design", "Low water absorption"]
        }
    },


    // ========================================================
    // 11 - 50
    // ========================================================

    {
        id: 11,
        code: "TC-011",

        slug: "beige-marble-ceramic-60x120-tc-011",
        image: "./img/Astora-4Match-super-Black-WALL-1-2-1-scaled.jpg",
        fa: {
            name: "سرامیک مرمر بژ",
            collection: "کالکشن مرمر",
            size: "60 × 120",
            type: "پرسلان",
            body: "خاک سفید",
            grade: "درجه ۱",
            factory: "میلان",
            surface: "پولیش",
            description: "سرامیک مرمر بژ با طراحی گرم و لوکس.",
            applications: ["مناسب کف", "مناسب دیوار"],
            features: ["پولیش", "جذب آب پایین", "مقاومت بالا"]
        },
        en: {
            name: "Beige Marble Ceramic",
            collection: "Marble Collection",
            size: "60 × 120",
            type: "Porcelain",
            body: "White Body",
            grade: "Grade 1",
            factory: "Milan",
            surface: "Polished",
            description: "Warm and luxurious beige marble porcelain.",
            applications: ["Floor suitable", "Wall suitable"],
            features: ["Polished", "Low water absorption", "High resistance"]
        }
    },

    {
        id: 12,
        code: "TC-012",

        slug: "dark-grey-ceramic-60x120-tc-012",
        image: "./img/Lilium-Cream-Crystal-768x432.jpg",
        fa: {
            name: "سرامیک طوسی تیره",
            collection: "کالکشن استون",
            size: "60 × 120",
            type: "پرسلان",
            body: "تمام‌بدنه",
            grade: "درجه ۱",
            factory: "میلان",
            surface: "مات",
            description: "سرامیک طوسی تیره با ظاهر سنگ طبیعی.",
            applications: ["مناسب کف", "مناسب دیوار"],
            features: ["تمام‌بدنه", "سطح مات", "مقاومت بالا"]
        },
        en: {
            name: "Dark Grey Ceramic",
            collection: "Stone Collection",
            size: "60 × 120",
            type: "Porcelain",
            body: "Full Body",
            grade: "Grade 1",
            factory: "Milan",
            surface: "Matt",
            description: "Dark grey porcelain with a natural stone appearance.",
            applications: ["Floor suitable", "Wall suitable"],
            features: ["Full body", "Matte surface", "High resistance"]
        }
    },

    {
        id: 13,
        code: "TC-013",

        slug: "white-marble-ceramic-60x120-tc-013",
        image: "./img/3D-AntinoBlack-CarlottaGold60120-7mm-wc-2048x2048.jpg",
        fa: {
            name: "سرامیک سفید مرمر",
            collection: "کالکشن مرمر",
            size: "60 × 120",
            type: "پرسلان",
            body: "خاک سفید",
            grade: "درجه ۱",
            factory: "میلان",
            surface: "براق",
            description: "سرامیک سفید مرمر با رگه‌های طبیعی.",
            applications: ["مناسب کف", "مناسب دیوار"],
            features: ["سطح براق", "جذب آب پایین", "مقاومت بالا"]
        },
        en: {
            name: "White Marble Ceramic",
            collection: "Marble Collection",
            size: "60 × 120",
            type: "Porcelain",
            body: "White Body",
            grade: "Grade 1",
            factory: "Milan",
            surface: "Glossy",
            description: "White marble porcelain with natural veining.",
            applications: ["Floor suitable", "Wall suitable"],
            features: ["Glossy surface", "Low water absorption", "High resistance"]
        }
    },

    {
        id: 14,
        code: "TC-014",

        slug: "light-cream-ceramic-60x120-tc-014",
        image: "./img/SUNRISE-WHITE-120x120-1-2048x2048.jpg",
        fa: {
            name: "سرامیک کرم روشن",
            collection: "کالکشن پریمیوم",
            size: "60 × 120",
            type: "پرسلان",
            body: "خاک سفید",
            grade: "درجه ۱",
            factory: "میلان",
            surface: "مات",
            description: "سرامیک کرم روشن مناسب فضاهای آرام و روشن.",
            applications: ["مناسب کف", "مناسب دیوار"],
            features: ["سطح مات", "طراحی مینیمال", "مقاومت بالا"]
        },
        en: {
            name: "Light Cream Ceramic",
            collection: "Premium Collection",
            size: "60 × 120",
            type: "Porcelain",
            body: "White Body",
            grade: "Grade 1",
            factory: "Milan",
            surface: "Matt",
            description: "Light cream porcelain for calm and bright spaces.",
            applications: ["Floor suitable", "Wall suitable"],
            features: ["Matte surface", "Minimal design", "High resistance"]
        }
    },

    {
        id: 15,
        code: "TC-015",

        slug: "luxury-black-ceramic-60x120-tc-015",
        image: "./img/electra-light-cream.jpg",
        fa: {
            name: "سرامیک مشکی لوکس",
            collection: "کالکشن لاکچری",
            size: "60 × 120",
            type: "پرسلان",
            body: "تمام‌بدنه",
            grade: "درجه ۱",
            factory: "میلان",
            surface: "پولیش",
            description: "سرامیک مشکی لوکس برای فضاهای خاص.",
            applications: ["مناسب کف", "مناسب دیوار", "مناسب لابی"],
            features: ["پولیش", "تمام‌بدنه", "مقاومت بالا"]
        },
        en: {
            name: "Luxury Black Ceramic",
            collection: "Luxury Collection",
            size: "60 × 120",
            type: "Porcelain",
            body: "Full Body",
            grade: "Grade 1",
            factory: "Milan",
            surface: "Polished",
            description: "Luxury black porcelain for sophisticated spaces.",
            applications: ["Floor suitable", "Wall suitable", "Lobby suitable"],
            features: ["Polished", "Full body", "High resistance"]
        }
    },

    {
        id: 16,
        code: "TC-016",

        slug: "white-stone-ceramic-60x120-tc-016",
        image: "./img/Tomas-4match-60120-1-1-768x768.jpg",
        fa: {
            name: "سرامیک سنگی سفید",
            collection: "کالکشن استون",
            size: "60 × 120",
            type: "پرسلان",
            body: "تمام‌بدنه",
            grade: "درجه ۱",
            factory: "میلان",
            surface: "مات",
            description: "سرامیک سنگی سفید با بافت طبیعی.",
            applications: ["مناسب کف", "مناسب دیوار"],
            features: ["تمام‌بدنه", "سطح مات", "مقاومت بالا"]
        },
        en: {
            name: "White Stone Ceramic",
            collection: "Stone Collection",
            size: "60 × 120",
            type: "Porcelain",
            body: "Full Body",
            grade: "Grade 1",
            factory: "Milan",
            surface: "Matt",
            description: "White stone-look porcelain with a natural texture.",
            applications: ["Floor suitable", "Wall suitable"],
            features: ["Full body", "Matte surface", "High resistance"]
        }
    },

    {
        id: 17,
        code: "TC-017",

        slug: "grey-marble-ceramic-60x120-tc-017",
        image: "./img/IMG-20250904-WA0003.jpg",
        fa: {
            name: "سرامیک طوسی مرمر",
            collection: "کالکشن مرمر",
            size: "60 × 120",
            type: "پرسلان",
            body: "خاک سفید",
            grade: "درجه ۱",
            factory: "میلان",
            surface: "پولیش",
            description: "سرامیک طوسی مرمر با رگه‌های ظریف.",
            applications: ["مناسب کف", "مناسب دیوار"],
            features: ["پولیش", "رگه طبیعی", "جذب آب پایین"]
        },
        en: {
            name: "Grey Marble Ceramic",
            collection: "Marble Collection",
            size: "60 × 120",
            type: "Porcelain",
            body: "White Body",
            grade: "Grade 1",
            factory: "Milan",
            surface: "Polished",
            description: "Grey marble porcelain with elegant veining.",
            applications: ["Floor suitable", "Wall suitable"],
            features: ["Polished", "Natural veining", "Low water absorption"]
        }
    },

    {
        id: 18,
        code: "TC-018",

        slug: "beige-stone-ceramic-60x120-tc-018",
        image: "./img/IMG-20250904-WA0007.jpg",
        fa: {
            name: "سرامیک بژ سنگی",
            collection: "کالکشن استون",
            size: "60 × 120",
            type: "پرسلان",
            body: "خاک سفید",
            grade: "درجه ۱",
            factory: "میلان",
            surface: "مات",
            description: "سرامیک بژ سنگی با رنگ گرم.",
            applications: ["مناسب کف", "مناسب دیوار"],
            features: ["مات", "رنگ گرم", "مقاومت بالا"]
        },
        en: {
            name: "Beige Stone Ceramic",
            collection: "Stone Collection",
            size: "60 × 120",
            type: "Porcelain",
            body: "White Body",
            grade: "Grade 1",
            factory: "Milan",
            surface: "Matt",
            description: "Warm beige stone-look porcelain.",
            applications: ["Floor suitable", "Wall suitable"],
            features: ["Matte", "Warm tone", "High resistance"]
        }
    },

    {
        id: 19,
        code: "TC-019",

        slug: "glossy-white-ceramic-60x120-tc-019",
        image: "./img/IMG-20250904-WA0008.jpg",
        fa: {
            name: "سرامیک سفید براق",
            collection: "کالکشن پریمیوم",
            size: "60 × 120",
            type: "پرسلان",
            body: "خاک سفید",
            grade: "درجه ۱",
            factory: "میلان",
            surface: "براق",
            description: "سرامیک سفید براق برای فضاهای روشن و مدرن.",
            applications: ["مناسب کف", "مناسب دیوار"],
            features: ["براق", "سطح یکدست", "جذب آب پایین"]
        },
        en: {
            name: "Glossy White Ceramic",
            collection: "Premium Collection",
            size: "60 × 120",
            type: "Porcelain",
            body: "White Body",
            grade: "Grade 1",
            factory: "Milan",
            surface: "Glossy",
            description: "Glossy white porcelain for bright modern interiors.",
            applications: ["Floor suitable", "Wall suitable"],
            features: ["Glossy", "Uniform surface", "Low water absorption"]
        }
    },

    {
        id: 20,
        code: "TC-020",

        slug: "cream-marble-ceramic-60x120-tc-020",
        image: "./img/Janik-White-Black-60-120-polish.jpg",
        fa: {
            name: "سرامیک مرمر کرم",
            collection: "کالکشن مرمر",
            size: "60 × 120",
            type: "پرسلان",
            body: "خاک سفید",
            grade: "درجه ۱",
            factory: "میلان",
            surface: "پولیش",
            description: "سرامیک مرمر کرم با طراحی لوکس.",
            applications: ["مناسب کف", "مناسب دیوار"],
            features: ["پولیش", "طراحی لوکس", "مقاومت بالا"]
        },
        en: {
            name: "Cream Marble Ceramic",
            collection: "Marble Collection",
            size: "60 × 120",
            type: "Porcelain",
            body: "White Body",
            grade: "Grade 1",
            factory: "Milan",
            surface: "Polished",
            description: "Luxury cream marble porcelain.",
            applications: ["Floor suitable", "Wall suitable"],
            features: ["Polished", "Luxury design", "High resistance"]
        }
    },

    // --------------------------------------------------------
    // 21 - 50
    // --------------------------------------------------------

    ...Array.from({ length: 30 }, (_, index) => {

        const id = index + 21;

        const namesFa = [
            "سرامیک مرمر سفید",
            "سرامیک مرمر طوسی",
            "سرامیک سنگی کرم",
            "سرامیک سنگی طوسی",
            "سرامیک سفید پریمیوم",
            "سرامیک مشکی لاکچری",
            "سرامیک کرم روشن",
            "سرامیک طوسی روشن",
            "سرامیک مرمر بژ",
            "سرامیک مرمر مشکی"
        ];

        const namesEn = [
            "White Marble Ceramic",
            "Grey Marble Ceramic",
            "Cream Stone Ceramic",
            "Grey Stone Ceramic",
            "Premium White Ceramic",
            "Luxury Black Ceramic",
            "Light Cream Ceramic",
            "Light Grey Ceramic",
            "Beige Marble Ceramic",
            "Black Marble Ceramic"
        ];

        const collectionsFa = [
            "کالکشن مرمر",
            "کالکشن مرمر",
            "کالکشن استون",
            "کالکشن استون",
            "کالکشن پریمیوم",
            "کالکشن لاکچری"
        ];

        const collectionsEn = [
            "Marble Collection",
            "Marble Collection",
            "Stone Collection",
            "Stone Collection",
            "Premium Collection",
            "Luxury Collection"
        ];

        const images = [
            "./img/3D-AntinoBlack-CarlottaGold60120-7mm-wc-2048x2048.jpg",
            "./img/SUNRISE-WHITE-120x120-1-2048x2048.jpg",
            "./img/electra-light-cream.jpg",
            "./img/Tomas-4match-60120-1-1-768x768.jpg",
            "./img/IMG-20250904-WA0003.jpg",
            "./img/IMG-20250904-WA0007.jpg",
            "./img/IMG-20250904-WA0008.jpg",
            "./img/Janik-White-Black-60-120-polish.jpg",
            "./img/CASPIAN-LIGHT-GRAY-120-POL.jpg",
            "./img/Magma-Silver-CaspianLightGray-zoom.jpg",
            "./img/Astora-4Match-super-Black-WALL-1-2-1-scaled.jpg",
            "./img/Lilium-Cream-Crystal-768x432.jpg"
        ];

        const surfacesFa = [
            "پولیش براق",
            "براق",
            "مات"
        ];

        const surfacesEn = [
            "Polished",
            "Glossy",
            "Matt"
        ];

        const imageIndex = index % images.length;
        const nameIndex = index % namesFa.length;
        const collectionIndex = index % collectionsFa.length;
        const surfaceIndex = index % surfacesFa.length;

        return {

            id: id,

            code: `TC-${String(id).padStart(3, "0")}`,

            image: images[imageIndex],

            fa: {
                name: namesFa[nameIndex],
                collection: collectionsFa[collectionIndex],

                size: "60 × 120",

                type: "پرسلان",

                body:
                    index % 3 === 0
                        ? "تمام‌بدنه"
                        : "خاک سفید",

                grade: "درجه ۱",

                factory: "میلان",

                surface: surfacesFa[surfaceIndex],

                description:
                    `${namesFa[nameIndex]} با طراحی مدرن و کیفیت بالا، انتخابی مناسب برای پروژه‌های مسکونی و تجاری است.`,

                applications: [
                    "مناسب کف",
                    "مناسب دیوار",
                    "مناسب پروژه‌های مدرن"
                ],

                features: [
                    "جذب آب پایین",
                    "مقاومت بالا در برابر سایش",
                    "طراحی مدرن"
                ]
            },

            en: {
                name: namesEn[nameIndex],
                collection: collectionsEn[collectionIndex],

                size: "60 × 120",

                type: "Porcelain",

                body:
                    index % 3 === 0
                        ? "Full Body"
                        : "White Body",

                grade: "Grade 1",

                factory: "Milan",

                surface: surfacesEn[surfaceIndex],

                description:
                    `${namesEn[nameIndex]} with a modern design and high quality, suitable for residential and commercial projects.`,

                applications: [
                    "Floor suitable",
                    "Wall suitable",
                    "Modern projects"
                ],

                features: [
                    "Low water absorption",
                    "High abrasion resistance",
                    "Modern design"
                ]
            }
        };
    })

];


// ============================================================
// HELPER FUNCTIONS
// ============================================================

/**
 * دریافت محصول بر اساس ID
 *
 * مثال:
 * getProductById(15)
 */
function getProductById(id) {

    const productId = Number(id);

    return PRODUCTS.find(product => product.id === productId) || null;
}


/**
 * دریافت محصول بر اساس کد
 *
 * مثال:
 * getProductByCode("TC-015")
 */
function getProductByCode(code) {

    return PRODUCTS.find(product => product.code === code) || null;
}


/**
 * دریافت اطلاعات محصول بر اساس زبان
 *
 * مثال:
 * getProductData(15, "fa")
 */
function getProductData(id, language = "fa") {

    const product = getProductById(id);

    if (!product) return null;

    return product[language] || product.fa;
}


/**
 * دریافت ID محصول از URL
 *
 * مثال:
 * product.html?id=15
 */
function getProductIdFromURL() {

    const params = new URLSearchParams(window.location.search);

    return Number(params.get("id")) || 1;
}


/**
 * دریافت محصول فعلی صفحه
 */
function getCurrentProduct() {

    const id = getProductIdFromURL();

    return getProductById(id) || PRODUCTS[0];
}