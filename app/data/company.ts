export interface Location {
  name: string
  address: string
  role: string
  description: string
}

export interface Service {
  slug: string
  title: string
  summary: string
  description: string
}

export interface CompanyInfo {
  legalName: string
  displayName: string
  yearsLegacy: string
  domain: string
  email: string
  phone: { display: string; tel: string }
  whatsapp: { display: string; link: string }
  socials: {
    facebook: string
    instagram: string
    linkedin: string
  }
  googleMapsEmbedUrl: string
  locations: Location[]
  stats: {
    products: string
    projects: string
    followers: string
    employees: string
    clients: string
  }
  services: Service[]
  clients: string[]
}

export const companyData: CompanyInfo = {
  legalName: "Instyle Creation Technical Works LLC",
  displayName: "Instyle Creation",
  yearsLegacy: "20+",
  domain: "https://www.instylecreation.me",
  email: "info@instylecreation.me",
  phone: { display: "+971 4 234 8373", tel: "+97142348373" },
  whatsapp: { display: "+971 52 258 0432", link: "https://wa.me/971522580432" },
  socials: {
    facebook: "https://www.facebook.com/instylecreation.me",
    instagram: "https://instagram.com/instylecreation.me",
    linkedin: "https://linkedin.com/company/instyle-creations-me"
  },
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.970146034177!2d55.1584882!3d24.933096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f1345efea68fb%3A0xc0d7831f28b4c062!2sInstyle%20Creation%20Technical%20Works%20LLC!5e0!3m2!1sen!2sae!4v1721470000000!5m2!1sen!2sae",
  locations: [
    {
      name: "Dubai, UAE — HQ",
      role: "Primary Headquarters & Turnkey Fit-Out Facility",
      address: "Warehouse No. 3, Jebel Ali Commercial Complex, Gate No. 2, Jebel Ali Industrial Area 2, Dubai, UAE",
      description: "Providing turnkey interior fit-out services for homes, offices, and commercial spaces across the UAE. Backed by in-house design and technical execution teams."
    },
    {
      name: "Calicut, Kerala",
      role: "Flagship Showroom",
      address: "Flagship Multi-Floor Home Furnishing Showroom, Calicut, Kerala, India",
      description: "Our premier home furnishing showroom exhibiting our exclusive collections of customized curtains, luxury upholstery, and premium home decor products."
    },
    {
      name: "Kochi, Kerala",
      role: "Design Studio & Furnishing Consultancy",
      address: "Home Furnishing & Interior Consultancy Studio, Kochi, Kerala, India",
      description: "Specialized consultancy offering tailored design advisory and curated selection of soft furnishings for upscale residential and commercial projects."
    }
  ],
  stats: {
    products: "20+",
    projects: "50+",
    followers: "100+",
    employees: "40+",
    clients: "786+"
  },
  services: [
    {
      slug: "customized-curtains-upholstery",
      title: "Customized Curtains & Upholstery",
      summary: "Bespoke drapery and premium furniture upholstery tailored to match your design aesthetics.",
      description: "We offer bespoke curtain and upholstery solutions designed to fit unique styles and preferences, aiming to provide elegance, comfort, and functionality to any room. From selecting premium fabrics to precise measuring and expert installation, we transform your furniture and windows into statements of luxury."
    },
    {
      slug: "blinds",
      title: "Blinds",
      summary: "Elegant and functional blinds designed for light control, privacy, and modern styling.",
      description: "Instyle Creations provides a wide range of stylish blinds tailored to meet specific needs, offering both aesthetic appeal and practical functionality, such as light control and privacy maintenance. Our collections include roller, vertical, roman, wooden, and venetian blinds crafted to integrate seamlessly with your interiors."
    },
    {
      slug: "carpets",
      title: "Carpets",
      summary: "Wall-to-wall carpeting and custom area rugs offering comfort, warmth, and sound absorption.",
      description: "Our premium carpeting solutions bring plush luxury and warmth to your floors. We supply and install high-quality wall-to-wall carpets, custom area rugs, and carpet tiles engineered for heavy foot traffic, sound dampening, and sophisticated visual styling in both residential and commercial spaces."
    },
    {
      slug: "wall-papers",
      title: "Wall Papers",
      summary: "Decorative wallcoverings featuring a rich variety of textures, patterns, and modern designs.",
      description: "Transform your walls with our curated collection of wallpapers. We offer a diverse selection ranging from subtle textures and classic patterns to bold modern graphics and custom murals. Our wallpaper installation is completed with high precision, ensuring seamless joints and long-lasting beauty."
    },
    {
      slug: "motorized-curtains",
      title: "Motorized Curtains",
      summary: "Smart home integrated automated drapery systems for ultimate modern convenience and luxury.",
      description: "Elevate your living experience with automated curtain systems. We design and install high-performance motorized tracks and smart controllers that integrate effortlessly with home automation systems, allowing you to open or close your drapery with a remote, voice commands, or scheduled timers."
    },
    {
      slug: "decor-products",
      title: "Decor Products",
      summary: "Curated interior accents, wall art, cushions, and decorative accessories to finish your space.",
      description: "Every interior project is completed with carefully chosen decorative accents. We offer a curated collection of home accessories, designer cushions, bespoke wall art, mirrors, and unique decorative items that bring personality, color, and texture to your finished space."
    },
    {
      slug: "bedroom-furnishing",
      title: "Bedroom Furnishing",
      summary: "Custom headboards, bedding, and bedroom layouts designed for luxury, rest, and comfort.",
      description: "Create a serene sanctuary with our custom bedroom furnishings. We design and manufacture bespoke headboards, bed bases, luxury bedding collections, wardrobes, and accent furniture, focusing on ergonomic comfort and refined aesthetics to ensure the ultimate sleeping environment."
    },
    {
      slug: "living-space",
      title: "Living Space",
      summary: "Turnkey living room design and custom furniture layouts made for gathering and relaxation.",
      description: "Our living room furnishing services focus on creating spaces that are both welcoming and highly functional. We design custom sofa sets, lounge chairs, media units, and integrated lighting layouts that maximize space, facilitate flow, and showcase premium craftsmanship."
    },
    {
      slug: "commercial-space",
      title: "Commercial Space",
      summary: "Turnkey fit-outs for retail, hospitality, showrooms, and commercial venues across the UAE.",
      description: "We deliver robust and visually stunning commercial fit-outs for retail outlets, showrooms, hotels, and public spaces. Our design and technical works focus on brand identity, customer flow, durability, and compliance with local authorities, ensuring a seamless journey from concept to handover."
    },
    {
      slug: "office-interior",
      title: "Office Interior",
      summary: "Productive, functional, and modern workspace layouts and corporate turnkey fit-outs.",
      description: "Boost collaboration and productivity with custom corporate interiors. We provide complete layout planning, partition walls, acoustic ceilings, workstation installations, ergonomic seating, and corporate branding integration, executing the technical works on tight timelines with minimal disruption."
    },
    {
      slug: "false-ceilings",
      title: "False Ceilings",
      summary: "Decorative gypsum, acoustic, and grid ceilings with integrated architectural lighting.",
      description: "Our false ceiling solutions are designed to elevate the aesthetic appeal of interiors while providing practical benefits, such as creating a clean, modern look and concealing services like HVAC ducts, electrical wiring, and fire systems. We specialize in decorative gypsum designs, linear wood layouts, and acoustic tile grids."
    },
    {
      slug: "light-partitions",
      title: "Light Partitions",
      summary: "Drywall, glass, and acoustic partition walls for flexible interior space division.",
      description: "Divide your interior spaces efficiently using our drywall and glass partition systems. Ideal for creating private offices, meeting rooms, or dividing residential layouts, our lightweight partitions offer excellent acoustic insulation, rapid installation, and a perfect finish ready for paint or wallcovering."
    },
    {
      slug: "glass-aluminium-works",
      title: "Glass & Aluminium Works",
      summary: "Architectural glass doors, windows, shower enclosures, and aluminium framing structures.",
      description: "We fabricate and install high-quality glass and aluminium elements. Our services include sleek aluminium window frames, slide-and-fold glass doors, office glass partitions, customized shower enclosures, and mirrors, blending durability with modern architectural transparency."
    },
    {
      slug: "plumbing-sanitary",
      title: "Plumbing & Sanitary",
      summary: "Professional water systems installation, drainage, sanitary fixtures, and technical plumbing.",
      description: "We provide complete plumbing and sanitary solutions for residential and commercial fit-outs. Our technical team handles piping layouts, water filtration system hookups, drainage lines, and the high-precision installation of luxury sanitaryware, prioritizing durability and water-efficient operation."
    },
    {
      slug: "painting",
      title: "Painting",
      summary: "High-quality interior and exterior painting, decorative finishes, and wall preparation.",
      description: "Our professional painting services ensure flawless finishes that protect and beautify your spaces. We specialize in premium wall preparation, high-quality emulsion coats, textured decorative finishes, stucco effects, and wood polishing, using premium, low-VOC paint brands suitable for the UAE climate."
    },
    {
      slug: "carpentry-flooring",
      title: "Carpentry & Flooring",
      summary: "Custom wood fit-outs, cabinets, joinery, parquet, luxury vinyl tiles, and laminate flooring.",
      description: "Experience premium joinery and woodwork. We design and manufacture custom cabinetry, wardrobes, kitchen units, and doors in our local facility. Additionally, we supply and lay a wide selection of premium flooring materials including hardwood parquet, luxury vinyl tiles (LVT), and durable laminate options."
    },
    {
      slug: "metal-parts-erection",
      title: "Metal Parts Erection & Steel Products",
      summary: "Structural and decorative steel fabrication, metal framing, and bespoke architectural metalworks.",
      description: "We provide specialized fabrication and erection of structural and decorative metal elements. From heavy-duty steel framing support to bespoke decorative brass, copper, and stainless steel screen dividers, our technical team ensures precise welding, finishing, and secure site installation."
    },
    {
      slug: "insulation-technical-works",
      title: "Insulation & Other Technical Works",
      summary: "Thermal, acoustic, and moisture insulation solutions along with general MEP works.",
      description: "Protect your space from noise, heat, and moisture with our comprehensive insulation services. We execute acoustic lining, under-slab thermal insulation, duct wrap, and waterproofing technical works, ensuring full compliance with Dubai Municipality green building codes and building regulations."
    }
  ],
  clients: [
    "Careem",
    "Jazal Engineering",
    "RK Gulf",
    "BAPS Hindu Mandir Abu Dhabi",
    "Marcopolo Holidays",
    "Maison Privée",
    "Fidelity United",
    "Qstay",
    "GeoChem",
    "Adport",
    "Carrefour",
    "CILA",
    "The Cove Rotana Resort",
    "Lifenity"
  ]
}
