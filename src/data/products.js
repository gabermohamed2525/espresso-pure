const products = [
  {
    id: 1,
    name: "إسبريسو كلاسيك",
    category: "قهوة ساخنة",
    description: "إسبريسو غني بطعم متوازن ورائحة مميزة.",
    price: 55,
    image:
      "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 2,
    name: "إسبريسو دبل",
    category: "قهوة ساخنة",
    description: "جرعة مزدوجة من الإسبريسو لعشاق القهوة القوية.",
    price: 70,
    image:
      "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 3,
    name: "إسبريسو ماكياتو",
    category: "قهوة ساخنة",
    description: "إسبريسو مركز مع طبقة خفيفة من رغوة الحليب.",
    price: 65,
    image:
      "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 4,
    name: "كابتشينو كلاسيك",
    category: "قهوة ساخنة",
    description: "إسبريسو مع حليب مبخر ورغوة ناعمة.",
    price: 75,
    image:
      "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 5,
    name: "كابتشينو بالقرفة",
    category: "قهوة ساخنة",
    description: "كابتشينو كريمي مع لمسة عطرية من القرفة.",
    price: 82,
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 6,
    name: "لاتيه كلاسيك",
    category: "قهوة ساخنة",
    description: "قهوة ناعمة بالحليب بطعم غني ومتوازن.",
    price: 70,
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 7,
    name: "لاتيه آرت",
    category: "قهوة ساخنة",
    description: "لاتيه كريمي مزين برسمة لاتيه آرت أنيقة.",
    price: 78,
    image:
      "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 8,
    name: "لاتيه فانيليا",
    category: "قهوة ساخنة",
    description: "لاتيه ناعم مع نكهة الفانيليا العطرية.",
    price: 85,
    image:
      "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 9,
    name: "لاتيه كراميل",
    category: "قهوة ساخنة",
    description: "لاتيه غني مع صوص الكراميل الحلو.",
    price: 90,
    image:
      "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 10,
    name: "لاتيه بندق",
    category: "قهوة ساخنة",
    description: "لاتيه كريمي مع نكهة البندق المحمص.",
    price: 92,
    image:
      "https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 11,
    name: "أمريكانو",
    category: "قهوة ساخنة",
    description: "إسبريسو مخفف بالماء الساخن بطعم واضح ومتوازن.",
    price: 60,
    image:
      "https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 12,
    name: "أمريكانو دبل",
    category: "قهوة ساخنة",
    description: "أمريكانو بجرعة إضافية لعشاق القهوة القوية.",
    price: 72,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 13,
    name: "فلات وايت",
    category: "قهوة ساخنة",
    description: "إسبريسو غني مع حليب ناعم وقوام كريمي.",
    price: 80,
    image:
      "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 14,
    name: "موكا كلاسيك",
    category: "قهوة ساخنة",
    description: "مزيج رائع من الإسبريسو والشوكولاتة والحليب.",
    price: 90,
    image:
      "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 15,
    name: "موكا وايت",
    category: "قهوة ساخنة",
    description: "موكا كريمي بالشوكولاتة البيضاء والحليب.",
    price: 95,
    image:
      "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 16,
    name: "موكا بندق",
    category: "قهوة ساخنة",
    description: "قهوة موكا غنية مع نكهة البندق والشوكولاتة.",
    price: 98,
    image:
      "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 17,
    name: "كاراميل ماكياتو",
    category: "قهوة ساخنة",
    description: "إسبريسو وحليب مع طبقة من الكراميل الناعم.",
    price: 95,
    image:
      "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 18,
    name: "سبانيش لاتيه",
    category: "قهوة ساخنة",
    description: "لاتيه غني بالحليب المكثف بطعم كريمي مميز.",
    price: 95,
    image:
      "https://images.unsplash.com/photo-1462917882517-e150004895fa?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 19,
    name: "سبانيش لاتيه بالقرفة",
    category: "قهوة ساخنة",
    description: "سبانيش لاتيه مع لمسة عطرية من القرفة.",
    price: 100,
    image:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 20,
    name: "قهوة بالبندق",
    category: "قهوة ساخنة",
    description: "قهوة ناعمة مع نكهة البندق المحمص.",
    price: 78,
    image:
      "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 21,
    name: "قهوة تركية",
    category: "قهوة ساخنة",
    description: "قهوة تركية أصيلة بطعم غني ورائحة قوية.",
    price: 55,
    image:
      "https://images.unsplash.com/photo-1578374173705-4f7c6b6f2e9a?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 22,
    name: "قهوة تركية بالحليب",
    category: "قهوة ساخنة",
    description: "قهوة تركية ناعمة مع الحليب الساخن.",
    price: 65,
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 23,
    name: "قهوة عربية",
    category: "قهوة ساخنة",
    description: "قهوة عربية عطرية بطابع شرقي أصيل.",
    price: 60,
    image:
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 24,
    name: "قهوة عربية بالهيل",
    category: "قهوة ساخنة",
    description: "قهوة عربية مع الهيل برائحة شرقية مميزة.",
    price: 68,
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 25,
    name: "قهوة بالقرفة",
    category: "قهوة ساخنة",
    description: "قهوة دافئة مع نكهة القرفة العطرية.",
    price: 70,
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 26,
    name: "آيس كوفي كلاسيك",
    category: "مشروبات باردة",
    description: "قهوة باردة منعشة لعشاق القهوة المثلجة.",
    price: 80,
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 27,
    name: "آيس لاتيه",
    category: "مشروبات باردة",
    description: "إسبريسو بارد مع الحليب والثلج.",
    price: 85,
    image:
      "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 28,
    name: "آيس لاتيه فانيليا",
    category: "مشروبات باردة",
    description: "آيس لاتيه ناعم مع نكهة الفانيليا.",
    price: 95,
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 29,
    name: "آيس لاتيه كراميل",
    category: "مشروبات باردة",
    description: "آيس لاتيه منعش مع صوص الكراميل.",
    price: 100,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 30,
    name: "آيس موكا",
    category: "مشروبات باردة",
    description: "قهوة باردة مع الشوكولاتة والحليب.",
    price: 100,
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 31,
    name: "آيس موكا وايت",
    category: "مشروبات باردة",
    description: "موكا باردة بالشوكولاتة البيضاء والحليب.",
    price: 105,
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 32,
    name: "آيس سبانيش لاتيه",
    category: "مشروبات باردة",
    description: "سبانيش لاتيه بارد وغني بالحليب المكثف.",
    price: 105,
    image:
      "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 33,
    name: "كولد برو كلاسيك",
    category: "مشروبات باردة",
    description: "قهوة مستخلصة ببطء بطعم ناعم ومنعش.",
    price: 90,
    image:
      "https://images.unsplash.com/photo-1517959105821-eaf2591984ca?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 34,
    name: "كولد برو فانيليا",
    category: "مشروبات باردة",
    description: "كولد برو ناعم مع نكهة الفانيليا.",
    price: 100,
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 35,
    name: "كولد برو كراميل",
    category: "مشروبات باردة",
    description: "كولد برو بارد مع لمسة من الكراميل.",
    price: 105,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 36,
    name: "فرابيه كراميل",
    category: "فرابيه",
    description: "فرابيه بارد وكريمي مع صوص الكراميل.",
    price: 110,
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 37,
    name: "فرابيه موكا",
    category: "فرابيه",
    description: "فرابيه غني بالشوكولاتة والقهوة.",
    price: 115,
    image:
      "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 38,
    name: "فرابيه فانيليا",
    category: "فرابيه",
    description: "فرابيه كريمي بنكهة الفانيليا.",
    price: 105,
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 39,
    name: "فرابيه شوكولاتة",
    category: "فرابيه",
    description: "مشروب فرابيه غني بالشوكولاتة الكريمية.",
    price: 110,
    image:
      "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 40,
    name: "فرابيه بندق",
    category: "فرابيه",
    description: "فرابيه بالقهوة ونكهة البندق المحمص.",
    price: 115,
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 41,
    name: "ميلك شيك شوكولاتة",
    category: "ميلك شيك",
    description: "ميلك شيك كريمي غني بالشوكولاتة.",
    price: 105,
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 42,
    name: "ميلك شيك فانيليا",
    category: "ميلك شيك",
    description: "ميلك شيك ناعم وكريمي بنكهة الفانيليا.",
    price: 100,
    image:
      "https://images.unsplash.com/photo-1553787499-6f9133860278?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 43,
    name: "ميلك شيك فراولة",
    category: "ميلك شيك",
    description: "ميلك شيك منعش بنكهة الفراولة.",
    price: 105,
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 44,
    name: "ميلك شيك أوريو",
    category: "ميلك شيك",
    description: "ميلك شيك كريمي مع قطع الأوريو.",
    price: 115,
    image:
      "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 45,
    name: "ميلك شيك كراميل",
    category: "ميلك شيك",
    description: "ميلك شيك غني بنكهة الكراميل.",
    price: 110,
    image:
      "https://images.unsplash.com/photo-1553787499-6f9133860278?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 46,
    name: "شوكولاتة ساخنة",
    category: "شوكولاتة",
    description: "شوكولاتة ساخنة ناعمة وغنية بطعم الكاكاو.",
    price: 80,
    image:
      "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 47,
    name: "شوكولاتة ساخنة بالمارتشميلو",
    category: "شوكولاتة",
    description: "شوكولاتة ساخنة مع المارشميلو والكريمة.",
    price: 95,
    image:
      "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 48,
    name: "شوكولاتة بيضاء ساخنة",
    category: "شوكولاتة",
    description: "مشروب شوكولاتة بيضاء كريمي ودافئ.",
    price: 90,
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 49,
    name: "شاي كلاسيك",
    category: "شاي وأعشاب",
    description: "شاي أسود كلاسيكي بطعم غني ومنعش.",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 50,
    name: "شاي بالنعناع",
    category: "شاي وأعشاب",
    description: "شاي أسود مع أوراق النعناع الطازجة.",
    price: 40,
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=85",
  },
];


export default products;