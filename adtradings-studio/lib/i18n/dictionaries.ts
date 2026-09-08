export type Locale = 'en' | 'zh' | 'tc' | 'ja' | 'th'

export const locales: Locale[] = ['en', 'zh', 'tc', 'ja', 'th']

export const localeLabels: Record<Locale, string> = {
  en: 'EN',
  zh: '简中',
  tc: '繁中',
  ja: '日本語',
  th: 'ไทย',
}

type Dictionary = {
  nav: {
    home: string
    services: string
    products: string
    delivery: string
    about: string
    contact: string
    getInTouch: string
  }
  home: {
    hero: {
      kicker: string
      title: string
      titleAccent: string
      subtitle: string
      ctaPrimary: string
      ctaSecondary: string
    }
    network: {
      kicker: string
      title: string
    }
    whyUs: {
      kicker: string
      title: string
      items: { n: string; title: string; body: string }[]
    }
    whatWeDo: {
      kicker: string
      title: string
      body: string
    }
    servicesPreview: {
      kicker: string
      title: string
      cta: string
    }
    cta: {
      title: string
      body: string
      ctaPrimary: string
      ctaSecondary: string
    }
  }
  services: {
    hero: { kicker: string; title: string; subtitle: string }
    learnMore: string
    items?: { title: string; short?: string; long: string }[]
  }
  products: {
    hero: { kicker: string; title: string; subtitle: string }
    categories: { title: string; body: string }[]
    cta: { title: string; body: string; button: string }
    comingSoon: { kicker: string; title: string; body: string; button: string }
  }
  delivery: {
    hero: { kicker: string; title: string; subtitle: string }
    whatWeMove: {
      title: string
      subtitle: string
      items: { title: string; body: string }[]
    }
    whyChoose: { kicker: string; title: string; body: string }
    cta: { title: string; body: string; button: string }
  }
  about: {
    hero: { kicker: string; title: string; subtitle: string }
    story: { kicker: string; title: string; body: string[] }
    process: {
      kicker: string
      title: string
      steps: { n: string; title: string; body: string }[]
    }
  }
  contact: {
    hero: { kicker: string; title: string; subtitle: string }
    infoTitle: string
    formTitle: string
    details: { office: string; phone: string; email: string; response: string; responseValue: string; welcome: string }
    form: { phone: string; inquiryType: string; selectService: string; serviceValues: string[]; name: string; email: string; company: string; message: string; submit: string; submitting: string; success: string; error: string }
  }
  footer: {
    tagline: string
    explore: string
    contact: string
    rights: string
    strapline: string
  }
}

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      products: 'Products',
      delivery: 'Delivery',
      about: 'About',
      contact: 'Contact',
      getInTouch: 'Get in touch',
    },
    home: {
      hero: {
        kicker: 'Vancouver — Asia trade house',
        title: 'Premium Asian sourcing,',
        titleAccent: 'end to end.',
        subtitle:
          'Wholesale supply, sourcing, market entry, reverse export and Vancouver local delivery — handled by agents stationed across Asia.',
        ctaPrimary: 'Get in touch',
        ctaSecondary: 'View services',
      },
      network: {
        kicker: 'Our network',
        title: 'Agents stationed across Asia, delivering into North America.',
      },
      whyUs: {
        kicker: 'Why Asia Direct',
        title: 'A single desk, from factory floor to your door.',
        items: [
          {
            n: '01',
            title: 'Boots on the ground',
            body: 'Our own agents inspect suppliers in person across Asia — not a broker relaying secondhand claims.',
          },
          {
            n: '02',
            title: 'Compliance handled',
            body: 'Customs, CFIA and FDA labelling standards are managed before goods ever reach your warehouse.',
          },
          {
            n: '03',
            title: 'One desk, two directions',
            body: 'The same team manages inbound sourcing and reverse export to Asia, so nothing falls between two vendors.',
          },
        ],
      },
      whatWeDo: {
        kicker: 'What we do',
        title: 'Trade infrastructure for Asian goods moving into North America.',
        body: 'We operate as the connective layer between Asian suppliers and North American buyers — sourcing, compliance, freight, warehousing and last-mile delivery, coordinated from a single desk.',
      },
      servicesPreview: {
        kicker: 'Services',
        title: 'Five ways we move goods, and the trade that follows.',
        cta: 'View all services',
      },
      cta: {
        title: 'Ready to move product?',
        body: 'Tell us what you need sourced, sold or shipped — our desk will scope it within one business day.',
        ctaPrimary: 'Get in touch',
        ctaSecondary: 'See what we sell',
      },
    },
    services: {
      hero: {
        kicker: 'Services',
        title: 'Five ways we move goods',
        subtitle:
          'From wholesale supply to reverse export, every service runs through one desk — with agents stationed across Asia and a local team in Vancouver.',
      },
      learnMore: 'Learn more',
      items: [
        { title: 'B2B wholesale supply', short: 'Premium, import-ready Asian dried goods — selected by category specialists.', long: 'A curated catalogue of premium Asian dried goods and specialty foods, landed import-ready and priced for wholesale. Every line is selected by category specialists, cleared through customs and labelled to CFIA and FDA standards before it reaches your buyers.' },
        { title: 'Sourcing service', short: 'Tell us what you want to sell; our agents find it, vet it and land it.', long: 'Name the product and the market. Our agents across Asia identify candidate suppliers, inspect them in person, negotiate terms and manage freight, customs and compliance — so you receive exactly what you approved, without the guesswork.' },
        { title: 'Market expansion for Asian brands', short: 'A Canadian arm for brands too small to open their own office.', long: 'For Asian brands ready to enter North America but too small to open their own office, we act as your Canadian arm — handling import, compliance labelling, warehousing, distribution and buyer relationships under one roof.' },
        { title: 'Reverse export to Asia', short: 'Canadian goods, exported to buyers across Asia.', long: 'The route runs both ways. We export Canadian goods to vetted buyers across Asia, managing documentation, freight and destination compliance through the same single desk that handles inbound trade.' },
        { title: 'Vancouver local delivery', short: 'Local commercial delivery across Metro Vancouver — from frozen food to oversized freight.', long: 'Local commercial delivery across Metro Vancouver — from temperature-controlled frozen food to oversized freight. The final mile is handled by our own desk, so your shipment stays with one team from port to door.' },
      ],
    },
    products: {
      hero: {
        kicker: 'Products',
        title: 'What we sell',
        subtitle:
          'A curated catalogue of premium Asian dried goods and specialty foods, landed import-ready and priced for wholesale.',
      },
      categories: [
        {
          title: 'Dried seafood',
          body: 'Premium dried seafood selected by category specialists, cleared through customs and labelled to CFIA and FDA standards.',
        },
        {
          title: 'Specialty snacks',
          body: 'Regional snack brands with proven demand, imported and priced for wholesale distribution across North America.',
        },
        {
          title: 'Pantry staples',
          body: 'Sauces, dried goods and pantry staples sourced directly from vetted manufacturers across Asia.',
        },
        {
          title: 'Seasonal & specialty goods',
          body: 'Limited-run and seasonal goods sourced on request through our agents stationed across Asia.',
        },
      ],
      cta: {
        title: 'Looking for a specific product?',
        body: 'If it is not in the catalogue yet, our sourcing desk can likely find it.',
        button: 'Talk to our sourcing desk',
      },
      comingSoon: {
        kicker: 'Product list',
        title: 'Coming Soon',
        body: 'Our product catalogue is currently being curated. In the meantime, reach out to our team to discuss your sourcing needs and discover what we can bring in for you.',
        button: 'Get in touch',
      },
    },
    delivery: {
      hero: {
        kicker: 'Delivery',
        title: 'Vancouver local delivery, built for business.',
        subtitle:
          'Beyond sourcing and trade, Asia Direct Tradings LTD. offers local commercial delivery across Metro Vancouver. From frozen food to large and oversized items, we move your goods reliably — with a specialization in commercial delivery for businesses.',
      },
      whatWeMove: {
        title: 'What we move',
        subtitle:
          'Whether it is a pallet of frozen product, a chilled delivery to a restaurant, or a bulky oversized shipment across town, our team handles it with the right equipment and the same care we bring to every shipment.',
        items: [
          {
            title: 'Frozen & chilled goods',
            body: 'Temperature-controlled transport for frozen food, chilled product and perishables — handled so the cold chain never breaks.',
          },
          {
            title: 'Large & oversized items',
            body: 'Bulky, heavy or awkward freight moved carefully across Metro Vancouver with the right vehicle for the job.',
          },
          {
            title: 'Commercial delivery',
            body: 'Our specialty — scheduled B2B routes, warehouse-to-door drop-offs and recurring deliveries built around your business hours.',
          },
        ],
      },
      whyChoose: {
        kicker: 'Delivery',
        title: 'Why businesses choose our delivery',
        body: 'We are already moving goods through Vancouver every day. Local delivery is a natural extension of the same team — one partner for sourcing, importing and the last mile to your door.',
      },
      cta: {
        title: 'Need local delivery in Vancouver?',
        body: 'Tell us what you are moving, where, and how often. We will come back with a delivery plan and quote.',
        button: 'Contact us for more information',
      },
    },
    about: {
      hero: {
        kicker: 'About',
        title: 'A trade house built on presence, not paperwork.',
        subtitle:
          'Asia Direct Tradings LTD. is a Vancouver-based trade house connecting Asian suppliers with North American buyers.',
      },
      story: {
        kicker: 'Our story',
        title: 'Built by people who wanted trade done properly.',
        body: [
          'Asia Direct Tradings LTD. was founded to close the gap between what North American buyers were promised and what actually arrived — in condition, in compliance, and in timing.',
          'Rather than broker deals from a distance, we placed our own agents across Asia to inspect suppliers directly, negotiate terms and manage freight from origin to destination.',
          'Today that same desk handles wholesale supply, sourcing, market entry for Asian brands, reverse export to Asia and last-mile delivery across Metro Vancouver.',
        ],
      },
      process: {
        kicker: 'How we work',
        title: 'Three steps, one accountable desk.',
        steps: [
          {
            n: '01',
            title: 'Scope',
            body: 'We confirm the product, market and compliance requirements before anything moves.',
          },
          {
            n: '02',
            title: 'Source & verify',
            body: 'Agents on the ground inspect suppliers, negotiate terms and confirm quality in person.',
          },
          {
            n: '03',
            title: 'Deliver & support',
            body: 'Freight, customs and last-mile delivery are managed end to end, with one team accountable throughout.',
          },
        ],
      },
    },
    contact: {
      hero: {
        kicker: 'Contact',
        title: "Let's talk trade.",
        subtitle:
          'Tell us what you need sourced, sold or shipped — our desk will scope it within one business day.',
      },
      infoTitle: 'Reach us directly',
      formTitle: 'Send a message',
      details: { office: 'Office', phone: 'Phone', email: 'Email', response: 'Response', responseValue: 'Within one business day', welcome: 'Wholesale & consumer retail — everyone welcome.' },
      form: {
        phone: 'Phone', inquiryType: 'Inquiry type', selectService: 'Select a service', serviceValues: ['B2B wholesale supply', 'Sourcing service', 'Market expansion for Asian brands', 'Reverse export to Asia', 'Vancouver local delivery'],
        name: 'Name',
        email: 'Email',
        company: 'Company',
        message: 'Message',
        submit: 'Send message',
        submitting: 'Sending…',
        success: "Thanks — we've received your message and will be in touch shortly.",
        error: 'Something went wrong. Please try again or email us directly.',
      },
    },
    footer: {
      tagline:
        'Premium Asian sourcing, handled end to end. Wholesale supply, sourcing, market entry, reverse export and Vancouver local delivery — with sourcing agents stationed across Asia.',
      explore: 'Explore',
      contact: 'Contact',
      rights: '© 2026 Asia Direct Tradings LTD.',
      strapline: 'Premium Asian sourcing — snacks, food & goods.',
    },
  },
  zh: {
    nav: {
      home: '首页',
      services: '服务',
      products: '产品',
      delivery: '配送',
      about: '关于我们',
      contact: '联系我们',
      getInTouch: '联系我们',
    },
    home: {
      hero: {
        kicker: '温哥华 — 亚洲贸易商行',
        title: '高端亚洲货源，',
        titleAccent: '一站式服务。',
        subtitle:
          '批发供应、货源采购、市场拓展、反向出口与温哥华本地配送——由驻扎亚洲各地的代理团队全程负责。',
        ctaPrimary: '联系我们',
        ctaSecondary: '查看服务',
      },
      network: {
        kicker: '我们的网络',
        title: '代理团队驻扎亚洲，货源直达北美。',
      },
      whyUs: {
        kicker: '为何选择 Asia Direct',
        title: '一个团队，从工厂到您的门口。',
        items: [
          {
            n: '01',
            title: '实地把关',
            body: '我们的代理亲赴亚洲各地实地考察供应商——不是转达二手信息的中间商。',
          },
          {
            n: '02',
            title: '合规先行',
            body: '海关、CFIA 与 FDA 标签合规工作，在货物抵达您的仓库之前已全部处理妥当。',
          },
          {
            n: '03',
            title: '一个团队，双向贸易',
            body: '同一团队同时负责进口货源与对亚洲的反向出口，避免在两个供应商之间出现脱节。',
          },
        ],
      },
      whatWeDo: {
        kicker: '我们的业务',
        title: '连接亚洲货源与北美市场的贸易基础设施。',
        body: '我们是亚洲供应商与北美买家之间的连接层——货源采购、合规、运输、仓储与最后一公里配送，均由同一团队统筹协调。',
      },
      servicesPreview: {
        kicker: '服务',
        title: '五种货物流通方式，及随之而来的贸易机会。',
        cta: '查看全部服务',
      },
      cta: {
        title: '准备好开始贸易了吗？',
        body: '告诉我们您需要采购、销售或运输的���品——我们的团队将在一个工作日内给出方案。',
        ctaPrimary: '联系我们',
        ctaSecondary: '查看我们的产品',
      },
    },
    services: {
      hero: {
        kicker: '服务',
        title: '五种货物流通方式',
        subtitle:
          '从批发供应到反向出口，每一项服务都由同一团队负责——代理驻扎亚洲各地，温哥华本地�����队随时支持。',
      },
      learnMore: '了解更多',
      items: [
        { title: 'B2B 批发供应', short: '精选高端亚洲干货，进口即售。', long: '精选高端亚洲干货与特色食品，进口即可上架，价格适合批发。每项产品均由品类专家挑选，完成清关并符合 CFIA 与 FDA 标签标准。' },
        { title: '货源采购服务', short: '告诉我们产品需求，我们负责寻找、核实并运达。', long: '告诉我们产品与市场需求。我�����在亚洲各地的代理会寻找合适供应商、亲自考察、协商条款，并管理运输、清关与合规。' },
        { title: '协助亚洲品牌拓展市场', short: '为进入北美的品牌提供加拿大本地团队。', long: '对准备进入北美、但尚未需要自设办公室的亚洲品牌，我们可作为您的加拿大团队，负责进口、合规标签、仓储、分销与买家关系。' },
        { title: '反向出口至亚洲', short: '将加拿大商品出口给亚洲买家。', long: '贸易路线双向运行。我们将加拿大产品出口给亚洲各地经过审核的买家，并由同一团队管理文件、运输与目的地合规。' },
        { title: '温哥华本地配送', short: '覆盖大温地区，从冷冻食品到大型货物。', long: '提供大温哥华地区的商业配送，从冷冻食品到大型货运皆可处理。最后一公里由我们的团队负责，让货物从港口到门口始终由同一���队跟进。' },
      ],
    },
    products: {
      hero: {
        kicker: '产品',
        title: '我们的产品',
        subtitle: '由品类专家精选的高端亚洲干货与特色食品，进口即可上架，价格适合批发。',
      },
      categories: [
        {
          title: '干海产品',
          body: '由品类专家精选的高端干海产品，经海关清关并符合 CFIA 与 FDA 标签标准。',
        },
        {
          title: '特色零食',
          body: '经市场验证的地区零食品牌，进口并以批发价格提供北美分销。',
        },
        {
          title: '日常食材',
          body: '酱料、干货与日常食材，直接采购自亚洲经过审核的制造商。',
        },
        {
          title: '季节及特色商品',
          body: '限量及季节性商品，可通过我们驻扎亚洲各地的代理按需采购。',
        },
      ],
      cta: {
        title: '正在寻找特定产品？',
        body: '即使目录中暂未列出，我们的采购团队大多也能找到。',
        button: '联系我们的采购团队',
      },
      comingSoon: { kicker: '产品目录', title: '即将推出', body: '我们的产品目录正在整理中。在此期间，欢迎联系我们，讨论您的采购需求，了解我们可以为您带来的产品。', button: '联系我们' },
    },
    delivery: {
      hero: {
        kicker: '配送',
        title: '温哥华本地配送，专为企业打造。',
        subtitle:
          '除了货源采购与贸易，Asia Direct Tradings LTD. 还提供大温哥华地区的本地商业配送服务。从冷冻食品到大型及超尺寸货物，我们都能可靠运送——尤其专精于企业商业配送。',
      },
      whatWeMove: {
        title: '我们运送什么',
        subtitle:
          '无论是一整托盘的冷冻产品、送往餐厅的冷藏货物，还是跨城的大型超尺寸货物，我们的团队都会以合适的设备与同样的用心妥善处理每一件货物。',
        items: [
          {
            title: '冷冻及冷藏货品',
            body: '为冷冻食品、冷藏产品及易腐货品提供温控运输——确保冷链全程不中断。',
          },
          {
            title: '大型及超尺寸货物',
            body: '以合适的车辆，在大温哥华地区妥善运送笨重、超重或形状不规则的货物。',
          },
          {
            title: '商业配送',
            body: '我们的专长——排定的 B2B 路线、仓库直送到店，以及围绕您营业时间安排的定期配送。',
          },
        ],
      },
      whyChoose: {
        kicker: '配送',
        title: '企业为何选择我们的配送服务',
        body: '我们每天都在温哥华运送货物。本地配送是同一团队服务的自然延伸——一个合作伙伴，涵盖采购、进口与最后一公里配送。',
      },
      cta: {
        title: '需要在温哥华本地配送吗？',
        body: '告诉我们您要运送的货物、地点与频率，我们会提供配送方案与报价。',
        button: '联系我们了解更多',
      },
    },
    about: {
      hero: {
        kicker: '关于我们',
        title: '以实地存在，而非纸面承诺，建立的贸易商行。',
        subtitle: 'Asia Direct Tradings LTD. 是一家总部位于温哥华的贸易商行，连接亚洲供应商与北美买家。',
      },
      story: {
        kicker: '我们的故事',
        title: '由希望把贸易做得踏实的人创办。',
        body: [
          'Asia Direct Tradings LTD. 的成立，正是为了弥合北美买家所被承诺的与实际到货之间的差距——无论是货物状态、合规性还是时效。',
          '我们没有选择远程中介，而是将自己的代理派驻亚洲各地，直接考察供应商、协商条款，并全程管理从原产地到目的地的运输。',
          '如今，同一团队负责批发供应、货源采购、协助亚洲品牌进入市场、对亚洲的反向出口，以及大温哥华地区的最后一公里配送。',
        ],
      },
      process: {
        kicker: '合作方式',
        title: '三个步骤，一个团队全程负责。',
        steps: [
          {
            n: '01',
            title: '需求确认',
            body: '在任何货物启动之前，我们先确认产品、目标市场与合规要求。',
          },
          {
            n: '02',
            title: '采购与核实',
            body: '实地代理考察供应商、协商条款，并亲自确认产品质量。',
          },
          {
            n: '03',
            title: '交付与支持',
            body: '运输、清关与最后一公里配送全程管理，全程由同一团队负责。',
          },
        ],
      },
    },
    contact: {
      hero: {
        kicker: '联系我们',
        title: '让我们谈谈贸易。',
        subtitle: '告诉我们您需要采购、销售或运输的产品——我们的团队将在一个工作日内给出方案。',
      },
infoTitle: '直接联系我们',
  formTitle: '发送消息',
  details: { office: '办公室', phone: '电话', email: '邮箱', response: '回复时间', responseValue: '一个工作日内', welcome: '批发与零售客户均欢迎。' },
  form: {
  phone: '电话', inquiryType: '咨询类型', selectService: '请选择服务', serviceValues: ['B2B 批发供应', '货源采购服务', '协助亚洲品牌拓展市场', '反向出口至亚洲', '温哥华本地配送'],
  name: '姓名',
        email: '邮箱',
        company: '公司',
        message: '留言',
        submit: '发送消息',
        submitting: '发送中…',
        success: '感谢您的留言，我们已收到并将尽快与您联系。',
        error: '出现问题，请重试或直接给我们发邮件。',
      },
    },
    footer: {
      tagline:
        '高端亚洲货源，一站式服务。批发供应、货源采购、市场拓展、反向出口与温哥华本地配送——由驻扎亚洲各地的采购代理团队全程负责。',
      explore: '快速导航',
      contact: '联系方式',
      rights: '© 2026 Asia Direct Tradings LTD.',
      strapline: '高端亚洲货源——零食、食品与日用商品。',
    },
  },
  tc: {} as Dictionary,
  ja: {} as Dictionary,
  th: {
    nav: {
      home: 'หน้าแรก',
      services: 'บริการ',
      products: 'สินค้า',
      delivery: 'จัดส่ง',
      about: 'เกี่ยวกับเรา',
      contact: 'ติดต่อเรา',
      getInTouch: 'ติดต่อเรา',
    },
    home: {
      hero: {
        kicker: 'แวนคูเวอร์ — บริษัทการค้าเอเชีย',
        title: 'จัดหาสินค้าเอเชียคุณภาพสูง',
        titleAccent: 'แบบครบวงจร',
        subtitle:
          'จัดจำหน่ายแบบขายส่ง จัดหาสินค้า ขยายตลาด ส่งออกกลับ และจัดส่งในเขตแวนคูเวอร์ — ดูแลโดยตัวแทนของเราที่ประจำอยู่ทั่วเอเชีย',
        ctaPrimary: 'ติดต่อเรา',
        ctaSecondary: 'ดูบริการของเรา',
      },
      network: {
        kicker: 'เครือข่ายของเรา',
        title: 'ตัวแ���น���ระจำทั่วเอเชีย ส่งตรงถึงอเมริกาเหนือ',
      },
      whyUs: {
        kicker: 'ทำไมต้อง Asia Direct',
        title: 'ทีมงานเดียว ดูแลตั้งแต่โรงงานถึงหน้าประตูคุณ',
        items: [
          {
            n: '01',
            title: 'ลงพื้นที่จริง',
            body: 'ตัวแทนของเราตรวจสอบซัพพลายเออร์ด้วยตัวเองทั่วเอเชีย ไม่ใช่นายหน้าที่ส่งต่อข้อมูลมือสอง',
          },
          {
            n: '02',
            title: 'จัดการเรื่องมาตรฐานให้ครบ',
            body: 'พิธีการศุลกากรและมาตรฐานฉลากตาม CFIA และ FDA ได้รับการจัดการก่อนสินค้าถึงคลังของคุณ',
          },
          {
            n: '03',
            title: 'ทีมเดียว สองทิศทาง',
            body: 'ทีมเดียวกันดูแลทั้งการจัดห��สินค้าเข้าและการส่งออกกลับไปเอเชีย จึงไม่มีช่องว่างระหว่างผู้ให้บริการสองราย',
          },
        ],
      },
      whatWeDo: {
        kicker: 'สิ่งที่เราทำ',
        title: 'โครงสร้างการค้าสำหรับสินค้าเอเชียสู่อเมริกาเหนือ',
        body: 'เราทำหน้าที่เป็นตัวกลางระหว่างซัพพลายเออร์เอเชียและผู้ซื้อในอเมริกาเหนือ — ดูแลการจัดหาสินค้า มาตรฐานการนำเข้า การขนส่ง คลังสินค้า และการจัดส่งไมล์สุดท้าย ทั้งหมดประสานงานจากทีมเดียว',
      },
      servicesPreview: {
        kicker: 'บริการ',
        title: 'ห้าช่องทางที่เราเคลื่อนย้ายสินค้า และการค้าที่ตามมา',
        cta: 'ดูบริการทั้งหมด',
      },
      cta: {
        title: 'พร้อมเคลื่อนย้ายสินค้าแล้วหรือยัง?',
        body: 'บอกเราว่าคุณต้องการจัดหา จำหน่าย หรือขนส่งอะไร ทีมงานของเราจะประเมินให้ภายในหนึ่งวันทำการ',
        ctaPrimary: 'ติดต่อเรา',
        ctaSecondary: 'ดูสินค้าของเรา',
      },
    },
    services: {
      hero: {
        kicker: 'บริการ',
        title: 'ห้าช่องทางที่เราเคลื่อนย้ายสินค้า',
        subtitle:
          'จากการจัดจำหน่ายแบบขายส่งไปจนถึงการส่งออกกลับ ทุกบริการดำเนินการผ่านทีมเดียว โดยมีตัวแทนประจำทั่วเอเชียและทีมท้องถิ่นในแวนคูเวอร์',
      },
      learnMore: 'ดูรายละเอียดเพิ่มเติม',
      items: [
        { title: 'จัดจำหน่ายแบบขายส่ง B2B', short: 'สินค้าแห้งเอเชียคุณภาพสูง พร้อมนำเข้าและจำหน่าย', long: 'แคตตาล็อกสินค้าอาหารแห้งและอาหารพิเศษเอเชียคุณภาพสูงที่คัดสรรมาอย่างดี พร้อมนำเข้าและตั้งราคาสำหรับการขายส่ง โดยผ่านพิธีการศุลกากรและมาตรฐานฉลาก CFIA และ FDA' },
        { title: 'บริการจัดหาสินค้า', short: 'บอกสินค้าที่ต้องการ เราค้นหา ตรวจสอบ และนำเข้าให้', long: 'บอกเราว่าต้องการสินค้าและตลาดแบบใด ตัวแทนของเราทั่วเอเชียจะค้นหาซัพพลายเออร์ ตรวจสอบด้วยตัวเอง เจรจาเงื่อนไข และดูแลการขนส่ง ศุลกากร และมาตรฐานต่างๆ' },
        { title: 'ขยายตลาดให้แบรนด์เอเชีย', short: 'ทีมงานในแคนาดาสำหรับแบรนด์ที่ต้องการเข้าสู่อเมริกาเหนือ', long: 'สำหรับแบรนด์เอเชียที่พร้อมเข้าสู่อเมริกาเหนือ เราทำหน้าที่เป็นทีมในแคนาดา ดูแลการนำเข้า ฉลากตามมาตรฐาน คลังสินค้า การจัดจำหน่าย และความสัมพันธ์กับผู้ซื้อ' },
        { title: 'ส่งออกกลับไปเอเชีย', short: 'ส่งออกสินค้าจากแคนาดาไปยังผู้ซื้อทั่วเอเช���ย', long: 'เส้นทางการค้าดำเนินไปได้ทั้งสองทิศทาง เราส่งออกสินค้าจากแคนาดาไปยังผู้ซื้อที่ผ่านการตรวจสอบทั่วเอเชีย พร้อมดูแลเอกสาร การขนส่ง และมาตรฐานปลายทาง' },
        { title: 'จัดส่งท้องถิ่นในแวนคูเวอร์', short: 'จัดส่งเชิงพาณิชย์ทั่วเ���ตเม�����ทรแวนคูเวอร์ ตั้งแต่อาหารแช่แข็งถึงสินค้าขนาดใหญ่', long: 'บริการจัดส่งเชิงพาณิชย์ทั่วเขตเมโทรแวนคูเวอร์ ตั้งแต่อาหารแช่แข็งที่ควบคุมอุณหภูมิไปจนถึงสินค้าขนาดใหญ่ โดยทีมเดียวดูแลตั้งแต่ท่าเรือถึงหน้าประตู' },
      ],
    },
    products: {
      hero: {
        kicker: 'สินค้า',
        title: 'สินค้าที่เราจำหน่าย',
        subtitle:
          'แคตตาล็อกสินค้าอาหารแห้งและอาหา���พิเ���ษเอเชียคุณภาพสูงที่คัดสรรมาอย่างดี พร้อมนำเข้าและตั้งราคาสำหรับการขายส่ง',
      },
      categories: [
        {
          title: 'อาหารทะเลแห้ง',
          body: 'อาหา���ทะเลแห้งคุณภาพสูงที่คัดสรรโดยผู้เชี่ยวชาญ ผ่านพิธีการศุลกากรและมาตรฐานฉลาก CFIA และ FDA',
        },
        {
          title: 'ขนมพิเศษ',
          body: 'แบรนด์ขนมประจำภูมิภาคที่มีความต้องการสูง นำเข้าและตั้งราคาสำหรับการจัดจำหน่ายแบบขายส่งทั่วอเมริกาเหนือ',
        },
        {
          title: 'ของใช้ในครัวพื้นฐาน',
          body: 'ซอส อาหารแห้ง และของใช้ในครัวพื้นฐานที่จัดหาโดยตรงจากผู้ผลิตที่ผ่านการตรวจสอบทั่วเอเชีย',
        },
        {
          title: 'สินค้าตามฤดูกาลและสินค้าพิเศษ',
          body: 'สินค้ารุ่นจำกัดและตามฤดูกาลที่จัดหาตามคำขอผ่านตัวแทนของเราที่ประจำอยู่ทั่วเอเชีย',
        },
      ],
      cta: {
        title: 'กำลังมองหาสินค้าเฉพาะอยู่ใช่ไหม?',
        body: 'หากยังไม่มีในแคตตาล็อก ทีมจัดหาสินค้าของเราอาจสามารถหาให้ได้',
        button: 'พูดคุยกับทีมจัดหาสินค้าของเรา',
      },
      comingSoon: { kicker: 'รายการสินค้า', title: 'เร็ว ๆ นี้', body: 'แคตตาล็อกสินค้าของเรากำลังอยู่ระหว่างการจัดเตรียม ระหว่างนี้ ติดต่อทีมงานเพื่อพูดคุยเกี่ยวกับความต้องการจัดหาสินค้าและค้นพบสิ่งที่เรานำเสนอให้คุณได้', button: 'ติดต่อเรา' },
    },
    delivery: {
      hero: {
        kicker: 'จัดส่ง',
        title: 'บริการจัดส่งท้องถิ่นในแวนคูเวอร์ เพื่อธุรกิจของคุณ',
        subtitle:
          'นอกเหนือจากการจัดหาสินค้าและการค้า Asia Direct Tradings LTD. ยังให้บริการจัดส่งเชิงพาณิชย์ในเขตแวนคูเวอร์ ตั้งแต่อาหารแช่แข็งไปจนถึงสินค้าขนาดใหญ่ เราเคลื่อนย้ายสินค้าของคุณอย่างน่าเชื่อถือ โดยเชี่ยวชาญด้านการจัดส่งเชิงพาณิชย์สำหรับธุรกิจ',
      },
      whatWeMove: {
        title: 'สิ่งที่เราขนส่ง',
        subtitle:
          'ไม่ว่าจะเป็นพาเลทสินค้าแช่แข็ง การจัดส่งแบบแช่เย็นไปยังร้านอาหาร หรือสินค้าขนาดใหญ่ที่ต้องขนส่งข้ามเมือง ทีมของเราดูแลด้วยอุปกรณ์ที่เหมาะสมและความใส่ใจเดียวกันในทุกการจัดส่ง',
        items: [
          {
            title: 'สินค้าแช่แข็งและแช่เย็น',
            body: 'ขนส่งควบคุมอุณหภูมิสำหรับอาหารแช่แข็ง สินค้าแช่เย็น และของเสียง่าย เพื่อไม่ให้ห่วงโซ่ความเย็นขาดตอน',
          },
          {
            title: 'สินค้าขนาดใหญ่และเทอะทะ',
            body: 'ขนส่งสินค้าหนัก เทอะทะ หรือรูปทรงไม่สะดวก อย่างระมัดระวังทั่วเขตแวนคูเวอร์ด้วยยานพาหนะที่เหมาะสม',
          },
          {
            title: 'การจัดส่งเชิงพาณิชย์',
            body: 'ความเชี่ยวชาญของเรา — เส้นทาง B2B ตามกำหนดเวลา การส่งจากคลังถึงหน้าร้าน และการจัดส่งประจำตามเวลาทำการของธุรกิจคุณ',
          },
        ],
      },
      whyChoose: {
        kicker: 'จัดส่ง',
        title: 'ทำไมธุรกิจเลือกบริการจัดส่งของเรา',
        body: 'เราเคลื่อนย้ายสินค้าทั่วแวนคูเวอร์อยู่แล้วทุกวัน การจัดส่งท้องถิ่นจึงเป็นส่วนต่อขยายตามธรรมชาติของทีมเดียวกัน — พันธมิตรเดียวสำหรับการจัดหา การนำเข้า และไมล์สุดท้ายถึงหน้าประตูคุณ',
      },
      cta: {
        title: 'ต้องการบริการจัดส่งท้องถิ่นในแวนคูเวอร์หรือไม่?',
        body: 'บอกเราว่าคุณต้องการขนส่งอะไร ที่ไหน และบ่อยแค่ไหน เราจะกลับมาพร้อมแผนการจัดส่งและใบเสนอราคา',
        button: 'ติดต่อเราเพื่อข้อมูลเพิ่มเติม',
      },
    },
    about: {
      hero: {
        kicker: 'เกี่ยวกับเรา',
        title: 'บริษัทการค้าที่���ร้างจากการลงพื้นที่จริง ไม่ใช่แค่เอกสาร',
        subtitle:
          'Asia Direct Tradings LTD. เป็นบริษัทการค้าในแวนคูเวอร์ที่เชื่อมโยงซัพพลายเออร์เอเชียกับผู้ซื้อในอเมริกาเหนือ',
      },
      story: {
        kicker: 'เรื่องราวของเรา',
        title: 'ก่อตั้งโดยคนที่อยากให้การค้าเป็นไปอย่างถูกต้อง',
        body: [
          'Asia Direct Tradings LTD. ก่อตั้งขึ้นเพื่อลดช่องว่างระหว่างสิ่งที่ผู้ซื้อในอเมริกาเหนือได้รับการสัญญาไว้กับส���่งที่���ด้รับจริง ทั้งในด้านสภาพสินค้า มาตรฐาน และเวลา',
          'แทนที่จะเป็นนายหน้าที่ทำงานจากระยะไกล เราส่งตัวแทนของเราเองไปประจำทั่วเอเชียเพื่อตรวจสอบซัพพลายเออร์โดยตรง เจรจาเงื่อนไข และดูแลการขนส่งจากต้นทางถึงปลายทาง',
          'ปัจจุบันทีมเดียวกันนี้ดูแลการจัดจำหน่ายแบบขายส่ง การจัดหาสินค้า การขยายตลาดให้แบรนด์เอเชีย การส��งออกกลับไปเอเชีย และการจัดส่งไมล์สุดท้ายทั่วเขตแวนคูเวอร์',
        ],
      },
      process: {
        kicker: 'วิธีการทำงานของเรา',
        title: 'สามขั้นตอน ทีมเดียวรับผิดชอบ',
        steps: [
          {
            n: '01',
            title: 'กำหนดขอบเขต',
            body: 'เรายืนยันสินค้า ตลาด และข้อกำหนดด้านมาตรฐานก่อนเริ่มดำเนินการใดๆ',
          },
          {
            n: '02',
            title: 'จัดหาและตรวจสอบ',
            body: 'ตัวแทนในพื้นที่ตรวจสอบซัพพลายเออร์ เจรจาเงื่อนไข และยืนยันคุณภาพด้วยตัวเอง',
          },
          {
            n: '03',
            title: 'จัดส่งและสนับสนุน',
            body: 'การขนส่ง พิธีการศุลกากร และการจัดส่งไมล์สุดท้ายได้รับการดูแลอย่างครบวงจร โดยทีมเดียวรับผิดชอบตลอดกระบวนการ',
          },
        ],
      },
    },
    contact: {
      hero: {
        kicker: 'ติดต่อเรา',
        title: 'มาพูดคุยเรื่องการค้ากัน',
        subtitle:
          'บอกเราว่าคุณต้องการจัดหา จำหน่าย หรือขนส่งอะไร ทีมงานของเราจะประเมินให้ภายในหนึ่งวันทำการ',
      },
infoTitle: 'ติดต่อเราโดยตรง',
  formTitle: 'ส่งข้อความ',
  details: { office: 'สำนักงาน', phone: 'โทรศัพท์', email: 'อีเมล', response: 'การตอบกลับ', responseValue: 'ภายในหนึ่งวันทำการ', welcome: 'ยินดีต้อนรับทั้งลูกค้าขายส่งและค้าปลีก' },
  form: {
  phone: 'โทรศัพท์', inquiryType: 'ประเภทการสอบถาม', selectService: 'เลือกบริการ', serviceValues: ['จัดจำหน่ายแบบขายส่ง B2B', 'บริการจัดหาสินค้า', 'ขยายตลาดให้แบรนด์เอเชีย', 'ส่งออกกลับไปเอเชีย', 'จัดส่งท้องถิ่นในแวนคูเวอร์'],
  name: 'ชื่อ',
        email: 'อีเมล',
        company: 'บริษัท',
        message: 'ข้อความ',
        submit: 'ส่งข้อความ',
        submitting: 'กำลังส่ง…',
        success: 'ขอบคุณ เราได้รับข้อความของคุณแล้วและจะติดต่อกลับในเร็วๆ นี้',
        error: 'เกิดข้อผิดพลาด กรุณาลองใหม่หรือส่งอีเมลถึงเราโดยตรง',
      },
    },
    footer: {
      tagline:
        'จัดหาสินค้าเอเชียคุณภาพสูงแบบครบวงจร จัดจำหน่ายแบบขายส่ง จัดหาสินค้า ขยายตลาด ส่งออกกลับ และจัดส่งในเขตแวนคูเวอร์ — โดยตัวแทนจัดหาสินค้าที่ประจำอยู่ทั่วเอเชีย',
      explore: 'สำรวจ',
      contact: 'ติดต่อ',
      rights: '© 2026 Asia Direct Tradings LTD.',
      strapline: 'จัดหาสินค้าเอเชียคุณภาพสูง — ขนม อาหาร และสินค้าทั่วไป',
    },
  },
}

// Traditional Chinese and Japanese dictionaries keep the same complete shape
// while providing localized copy for every user-facing section.
dictionaries.tc = {
  ...dictionaries.zh,
  nav: { home: '首頁', services: '服務', products: '產品', delivery: '配送', about: '關於我們', contact: '聯絡我們', getInTouch: '聯絡我們' },
  home: {
    ...dictionaries.zh.home,
    hero: { kicker: '溫哥華 — 亞洲貿易商行', title: '高端亞洲貨源，', titleAccent: '一站式服務。', subtitle: '批發供應、貨源採購、市場拓展、反向出口與溫哥華本地配送——由駐紮亞洲各地的代理團隊全程負責。', ctaPrimary: '聯絡我們', ctaSecondary: '查看服務' },
    network: { kicker: '我們的網絡', title: '代理團隊駐紮亞洲，貨源直達北美。' },
    whyUs: { kicker: '為何選擇 Asia Direct', title: '一個團隊，從工廠到您的門口。', items: [{ n: '01', title: '實地把關', body: '我們的代理親赴亞洲各地實地考察供應商——不是轉達二手資訊的中間商。' }, { n: '02', title: '合規先行', body: '海關、CFIA 與 FDA 標籤合規工作，在貨物抵達您的倉庫之前已全部處理妥當。' }, { n: '03', title: '一個團隊，雙向貿易', body: '同一團隊同時負責進口貨源與對亞洲的反向出口，避免在兩個供應商之間出現脫節。' }] },
    whatWeDo: { kicker: '我們的業務', title: '連接亞洲貨源與北美市場的貿易基礎設施。', body: '我們是亞洲供應商與北美買家之間的連接層——貨源採購、合規、運輸、倉儲與最後一公里配送，均由同一團隊統籌協調。' },
    servicesPreview: { kicker: '服務', title: '五種貨物流通方式，及隨之而來的貿易機會。', cta: '查看全部服務' },
    cta: { title: '準備好開始貿易了嗎？', body: '告訴我們您需要採購、銷售或運輸的產品——我們的團隊將在一個工作日內給出方案。', ctaPrimary: '聯絡我們', ctaSecondary: '查看我們的產品' },
  },
  services: { ...dictionaries.zh.services, hero: { kicker: '服務', title: '五種貨物流通方式', subtitle: '從批發供應到反向出口，每一項服務都由同一團隊負責——代理駐紮亞洲各地，溫哥華本地團隊隨時支援。' }, learnMore: '了解更多', items: [{ title: 'B2B 批發供應', short: '精選高端亞洲乾貨，進口即可銷售。', long: '精選高端亞洲���貨與特色食品，���口即可上架，並以批發價格提供。每項產品均由品類專家挑選，完成清關並符合 CFIA 與 FDA 標籤標準。' }, { title: '採購服務', short: '告訴我們您要銷售的產品，我們負責尋找、核實並運達。', long: '告訴我們產品與市場需求。我們在亞洲各地的代���會尋找合適供應商、���自考察、協商條款，並管理運輸、清關與合規，讓您收到完全符合核准規格的產品。' }, { title: '協助亞洲品牌拓展市場', short: '為尚未需要設立辦公室的品牌提供加拿大團隊。', long: '對準備進入北美、但尚未需要自設辦公室的亞洲品牌，我們可作為您的加拿大團隊，負責進口、合規標籤、倉儲、分銷與買家關係。' }, { title: '反向出口至亞洲', short: '將加拿大商品出口給亞洲各地買家。', long: '貿易路線雙向運行。我��將加拿大產品出口給亞洲各地經審核的買家，並由同一團隊管理文件、運輸與目的地合規。' }, { title: '溫哥華本地配送', short: '覆蓋大溫地區，從冷凍食品到大型貨運。', long: '提供大溫哥華地區的商業配送，從冷凍食品到大型貨運皆可處理。最後一公里由我們的團隊負責，讓貨物從港口到門口始終由同一團隊跟進。' }] },
  products: { ...dictionaries.zh.products, hero: { kicker: '產品', title: '我們的產品', subtitle: '由品類專家精選的高端亞洲乾貨與特色食品，進口即可上架，價格適合批發。' }, categories: [{ title: '乾海產品', body: '由品類專家精選的高端乾海產品，完成清關並符合 CFIA �� FDA 標籤標準。' }, { title: '特色零食', body: '具備市場需求的地區零食品牌，進口後以批發價格供北美分銷。' }, { title: '日常食材', body: '醬料、乾貨與日常食材，直接採購自亞洲經審核的製造商。' }, { title: '季節及特色商品', body: '限量及季節性商品，可透過我們駐紮亞洲各���的���理按需採購。' }], cta: { title: '正在尋找特定產品？', body: '即使目錄中暫未列出，我們的採購團隊大多也能找到。', button: '聯絡我們的採購團隊' }, comingSoon: { kicker: '產品目錄', title: '即將推出', body: '我們的產品目錄目前正在整理中。在此期間，歡迎聯絡我們，討論您的採購需求，了解我們可以為您帶來的產品。', button: '聯絡我們' } },
  delivery: { ...dictionaries.zh.delivery, hero: { kicker: '配送', title: '溫哥華本地配送，專為企業打造。', subtitle: '除了貨源採購��貿易，Asia Direct Tradings LTD. 還提供大溫哥華地區的本地商業配送服務。從冷凍食品到大型及超尺寸貨物，我們都能可靠運送——尤其專精於企業商業配送。' }, whatWeMove: { title: '我們運送什麼', subtitle: '無論是一整托盤的冷凍產品、送往餐廳的冷藏貨物，還是跨城的大型超尺寸貨物，我們的團隊都會以合適的設備與同樣的用心妥善處理每一件貨物。', items: [{ title: '冷凍及冷藏貨品', body: '為冷凍食品、冷藏產品及易腐貨品提供溫控運輸——確保冷鏈全程不中斷。' }, { title: '大型及超尺寸貨物', body: '以合適的車輛，在大溫哥華地區妥善運送笨重、超重或形狀不規則的貨物。' }, { title: '商業配送', body: '我們的專長——排定的 B2B 路線、倉庫直送到店，以及圍繞您營業時間安排的定期配送。' }] }, whyChoose: { kicker: '配送', title: '企業為何選擇我們的配送服務', body: '我們每天都在溫哥華運送貨物。本地配送是同一團隊服務的自然延伸——一個合作夥伴，涵蓋採購、進口與最後一公里配送。' }, cta: { title: '需要在溫哥華本地配送嗎？', body: '告訴我們您要運送的貨物、地點與頻率，我們會提供配送方案與報價。', button: '聯絡我們了解更多' } },
  about: { ...dictionaries.zh.about, hero: { kicker: '關於我們', title: '以實地存在，而非紙面承諾，建立的貿易商行。', subtitle: 'Asia Direct Tradings LTD. 是一家總部位於溫哥華的貿易商行，連接亞洲供應商與北美買家。' }, story: { kicker: '我們的故事', title: '由希望把貿易做得踏實的人創辦。', body: ['Asia Direct Tradings LTD. 的成立，正是為了彌合北美買家所被承諾的與實際到貨之間的差距——無論是貨物狀態、合規性還是時效。', '我們沒有選擇遠程中介，而是將自己的代理派駐亞洲各地，直接考察供應商、協商條款，並全程管理從原產地到目的地的運輸。', '如今，同一團隊負責批發供應、貨源採購、協助亞洲品牌進入市場、對亞洲的反向出口，以及大溫哥華地區的最後一公里配���。'] }, process: { kicker: '合作方式', title: '三個步驟，一個團隊全程負責。', steps: [{ n: '01', title: '確認需求', body: '在啟動任何貨物之前，我們先確認產品、目標市場與合規要求。' }, { n: '02', title: '採購與核實', body: '當地代理實地考察供應商、協商條款，並親自確認產品品質。' }, { n: '03', title: '交付與支援', body: '運輸、清關與最後一公里配送均由同一團隊全程負責。' }] } },
  contact: { ...dictionaries.zh.contact, hero: { kicker: '聯絡我們', title: '讓我們談談貿易。', subtitle: '告訴我們您需要採購、銷售或運輸的產品——我們的團隊將在一個工作日內給出方案。' }, infoTitle: '直接聯絡我們', formTitle: '發送訊息', details: { office: '辦公室', phone: '電話', email: '電子郵件', response: '回覆時間', responseValue: '一個工作日內', welcome: '批發與零售客戶均歡迎。' }, form: { phone: '電話', inquiryType: '詢問類型', selectService: '選擇服務', serviceValues: ['B2B 批發供應', '採購服務', '協助亞洲品牌拓展市場', '反向出口至亞洲', '溫哥華本地配送'], name: '姓名', email: '電子郵件', company: '公司', message: '留言', submit: '發送訊息', submitting: '發送中…', success: '感謝您的留言，我們已收到並將盡快與您聯絡。', error: '出現問題，請重試或直接寄送電子郵件給我們。' } },
  footer: { ...dictionaries.zh.footer, tagline: '高端亞洲貨源，一站式服務。批發供應、貨源採購、市場拓展、反向出口與溫哥華本地配送——由駐紮亞洲各地的採購代理團隊全程負責。', explore: '快速導覽', contact: '聯絡方式', strapline: '高端亞洲貨源——零食、食品與日用品。' },
}

dictionaries.ja = {
  ...dictionaries.en,
  nav: { home: 'ホーム', services: 'サービス', products: '取扱商品', delivery: '配送', about: '会社案内', contact: 'お問い合わせ', getInTouch: 'お問い合わせ' },
  home: {
    ...dictionaries.en.home,
    hero: { kicker: 'バンクーバー — アジア貿易商社', title: '上質なアジア商品を、', titleAccent: '一貫してお届け。', subtitle: '卸売供給、商品調達、市場参入、アジアへの逆輸出、バンクーバー地域配送まで。アジア各地のスタッフが一貫して対応します。', ctaPrimary: 'お問い合わせ', ctaSecondary: 'サービスを見る' },
    network: { kicker: '私たちのネットワーク', title: 'アジア各地のスタッフが、北米へ商品を届けます。' },
    whyUs: { kicker: 'Asia Directが選ばれる理由', title: '工場からお客様のもとまで、一つの窓口で。', items: [{ n: '01', title: '現地スタッフが確認', body: 'アジア各地のスタッフが自ら仕入先を訪問し、現地で確認します。' }, { n: '02', title: 'コンプライアンス対応', body: '通関、CFIA、FDAの表示基準を倉庫到着前に確認します。' }, { n: '03', title: '一つの窓口で双方向', body: '輸入調達からアジアへの逆輸出まで、同じチームが管理します。' }] },
    whatWeDo: { kicker: '事業内容', title: 'アジアの商品を北米へ届ける貿易インフラ。', body: 'アジアの供給者と北米の買い手をつなぎ、調達、法令対応、輸送、保管、ラストマイル配送まで一つの窓口で調整します。' },
    servicesPreview: { kicker: 'サービス', title: '商品を動かし、その先の取引まで支える五つの方法。', cta: 'サービス一覧を見る' },
    cta: { title: '商品を動かす準備はできましたか？', body: '調達、販売、輸送したい商品をお聞かせください。1営業日以内にご提��します。', ctaPrimary: 'お問い合わせ', ctaSecondary: '取扱商品を見る' },
  },
  services: { ...dictionaries.en.services, hero: { kicker: 'サービス', title: '商品を動かす五つの方法', subtitle: '卸���供給から逆輸出まで、アジア各地のスタッフとバンクーバーのチームが一つの窓口で対応します。' }, items: [{ title: 'B2B卸売供給', short: '専門スタッフが選ぶ、輸入対応済みの上質なアジア乾物。', long: '専門スタッフが選んだ上質なアジアの乾物・食品を、輸入対応済みで卸売向けにご提供します。各商品は通関とCFIA・FDAの表示基準を確認してからお届けします。' }, { title: '商品調達サービス', short: '商品をお聞かせください。現地スタッフが探し、確認し、お届けします。', long: '商品と市場をお聞かせください。アジア各地のスタッフが候補となる仕入先を探し、現地で確認し、条件交渉から輸送、通関、法令対応まで管理します。' }, { title: 'アジアブランドの北米進出', short: '自社オフィスを持たないブランドのためのカナダ窓口。', long: '北米進出を目指すアジアブランドに代わり、カナダ側の窓口として輸入、表示対応、保管、流通、買い手との関係づくりを一貫して支援します。' }, { title: 'アジアへの逆輸出', short: 'カナダの商品をアジア各地の買い手へ輸出します。', long: '貿易は双方向です。カナダの商品をアジアの信頼できる買い手へ輸出し、書類、輸送、仕向地の法令対応まで一つの窓口で管理します。' }, { title: 'バンクーバー地域配送', short: '冷凍食品から大型貨物まで、メトロ・バンクーバー全域に配送。', long: '冷凍食品から大型貨物まで、メトロ・バンクーバーの商業配送に対応します。港からお届け先まで、同じチームが最後まで管理します。' }] },
  products: { ...dictionaries.en.products, hero: { kicker: '取扱商品', title: '私たちが扱う商品', subtitle: '専門スタッフが選んだ上質なアジアの乾物・食品を、卸売向けに輸入対応済みでご提供します。' }, categories: [{ title: '乾燥水産物', body: '専門スタッフが選んだ上質な乾燥水産物。通関を済ませ、CFIA・FDAの表示基準に対応しています。' }, { title: 'こだわりのスナック', body: '北米で需要のある地域ブランドのスナックを輸入し��卸売向けにご提供します。' }, { title: '日常の食材', body: 'ソース、乾物、日常の食材を、アジアの審査済みメーカーから直接調達します。' }, { title: '季節・特選商品', body: '季節限定商品や特選商品を、アジア各地のスタッフを通じてご要望に応じて調達します。' }], cta: { title: 'お探しの商品はありますか？', body: 'カタログにない商品も、調達チームが見つけられる可能性があります。', button: '調達チームに相談する' }, comingSoon: { kicker: '商品一覧', title: '近日公開', body: '商品カタログを現在準備しています。それまでの間、調達のご要望についてお問い合わせください。お探しの商品をご案内します。', button: 'お問い合わせ' } },
  delivery: { ...dictionaries.en.delivery, hero: { kicker: '配送', title: 'バンクーバー地域配送。ビジネスのために。', subtitle: '調達や貿易に加え、Asia Direct Tradings LTD. はメトロ・バンクーバー地域での商業配送サービスも提供しています。冷凍食品から大型・特殊サイズの商品まで、確実にお届けします。企業向けの商業配送を得意としています。' }, whatWeMove: { title: '取り扱う商品', subtitle: '冷凍商品のパレット、レストランへの冷蔵配送、あるいは市内を横断する大型・特殊サイズの荷物まで、私たちのチームは適切な機材と変わらぬ丁寧さで対応します。', items: [{ title: '冷凍・冷蔵商品', body: '冷凍食品、冷蔵商品、生鮮品向けの温度管理輸送——コールドチェーンを途切れさせません。' }, { title: '大型・特殊サイズの商品', body: 'かさばる、重い、扱いにくい荷物も、適切な車両でメトロ・バンクーバー全域を丁寧に運びます。' }, { title: '商業配送', body: '私たちの得意分野——スケジュール化されたB2Bルート、倉庫からの直接納品、営業時間に合わせた定期配送。' }] }, whyChoose: { kicker: '配送', title: '企業が私たちの配送を選ぶ理由', body: '私たちは毎日バンクーバーで商品を輸送しています。地域配送は同じチームによる自然な延長です——調達、輸入、そしてお届け先までのラストマイルを一つのパートナーで。' }, cta: { title: 'バンクーバーでの地域配送が必要ですか？', body: '何を、どこへ、どのくらいの頻度で運びたいかお知らせください。配送計画とお見積りをご案内します。', button: '詳細はお問い合わせください' } },
  about: { ...dictionaries.en.about, hero: { kicker: '会社案内', title: '書類ではなく、現地での存在感から生まれた貿易商社。', subtitle: 'Asia Direct Tradings LTD. は、アジアの供給者と北米の買い手をつなぐバンクーバーの貿易商社です。' }, story: { kicker: '私たちの歩み', title: '正しい貿易を実現したい人々によって設立されました。', body: ['Asia Direct Tradings LTD. は、北米の買い手が約束された商品と、実際に届く商品との間にある差を埋めるために設立されました。状態、法令対応、納期のすべてに責任を持ちます。', '遠隔で取引を仲介するのではなく、アジア各地に自社スタッフを配置し、仕入先を直接確認し、条件を交渉し、原産地から仕向地まで輸送を管理しています。', '現在も同じ窓口で、卸売供給、商品調達、アジアブランドの市場参入、アジアへの逆輸出、メトロ・バンクーバーのラストマイル配送まで対応しています。'] }, process: { ...dictionaries.en.about.process, kicker: '仕事の進め方', title: '三つのステップ、一つの責任ある窓口。', steps: [{ n: '01', title: '要件を確認', body: '商品、対象市場、法令対応の要件を確認してから、すべてを開始します。' }, { n: '02', title: '調達・確認', body: '現地スタッフが仕入先を訪問し、条件を交渉して品質を直接確認します。' }, { n: '03', title: '納品・サポート', body: '輸送、通関、ラストマイル配送まで、一つのチームが最後まで責任を持って管理します。' }] } },
  contact: { ...dictionaries.en.contact, hero: { kicker: 'お問い合わせ', title: '貿易についてお話ししましょう。', subtitle: '調達、販売、輸送したい商品をお聞かせください。1営業日以��にご提案します。' }, infoTitle: '直接お問い合わせ', formTitle: 'メッセージを送る', details: { office: 'オフィス', phone: '電話', email: 'メール', response: '返信', responseValue: '1営業日以内', welcome: '卸売・小売のお客様を歓迎します。' }, form: { phone: '電話', inquiryType: 'お問い合わせ内容', selectService: 'サービスを選択', serviceValues: ['B2B卸売供給', '商品調達サービス', 'アジアブランドの北米進出', 'アジ��への逆輸出', 'バンクーバー地域配送'], name: 'お名前', email: 'メールアドレス', company: '会社名', message: 'メッセージ', submit: '送信する', submitting: '送信中…', success: 'お問い合わせありがとうございます。確認後、担当者よりご連絡します。', error: '問題が発生しました。もう一度お試しいただくか、直接メールでお問い合わせください。' } },
  footer: { ...dictionaries.en.footer, tagline: '上質なアジ��商品を一貫して調達。卸売供給、商品調達、市場参入、アジアへの逆輸出、���ンクーバー地域配送まで、アジア各地のスタッフが対応します。', explore: 'メニュー', contact: 'お問い合わせ', strapline: '上質なアジア商品を一貫して調達 — 食品・スナック・日用���。' },
}
