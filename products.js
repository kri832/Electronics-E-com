// Electronic Products Data
const products = [
    // Mobile Phones 
    {
        id: 1,
        name: "iPhone 17",
        category: "mobile",  
        price : 82000, 
        image: "https://www.apple.com/v/iphone-17/b/images/overview/product-viewer/initial__dplc9g66mywm_large_2x.jpg", 
        description: "Latest iphone with A19 chip and designed with aluminum body and protectd with ceremic shield 2",
        rating: 4.8,
        inStock: true 
    }, 
    {
        id: 2,
        name: "iPhone Air",
        category: "mobile",
        price: 119900,
        image: "https://www.apple.com/v/iphone-17/b/images/overview/contrast/iphone_air__f0t56fef3oey_large_2x.jpg",
        description: "Latest iPhone with A19 pro chip and the thinnest Iphone ever with the power of pro.",
        rating: 4.5,
        inStock: true
    },
    {
        id: 3,
        name: "iPhone 17 pro",
        category: "mobile",
        price: 149000,
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-pro-model-unselect-gallery-2-202509_GEO_US?wid=5120&hei=2880&fmt=webp&qlt=90&.v=dU9qRExIQUlQTzVKeDd1V1dtUE1MUWFRQXQ2R0JQTk5udUZxTkR3ZVlpTEJBSVhDREVhQVF4eThVb2E3Y2VibUlYUWYrQkRLNitCbE9QRVRqNHErMkE3b3pFWnhZZ2g0M0pRR0pEdHVSRUVtYkFqYmVJbENIK1gycDVvVjJtTEZkWHlyQUZHM0VoZTBZR3diWjJXVERn&traceId=1",
        description: "Innovative design with the ultimate performance and the pro battery life." ,
        rating: 4.7,
        inStock: true
    },
    {
        id: 4,
        name: "Google Pixel 10",
        category: "mobile",
        price: 79999,
        image: "https://lh3.googleusercontent.com/0udrEfNYmIpHmSaNU6fWHp3S0YJ4faYdDghUveqZxK4CfJB54EqAuQhJ9KLzY8q0xtRIBFLAQNKPnongqMjW5ry9p4KMpE6Ay7c=s6000-w6000-e365-rw-v0-nu",
        description: "A Phone with new google tensor G5 chip with AI - Powered features" ,
        rating: 4.7,
        inStock: true
    },
    {
        id: 5,
        name: "Google Pixel 10 pro & Pro XL",
        category: "mobile",
        price: 109999,
        image: "https://lh3.googleusercontent.com/D93LpE5G1J_UNtPaod5Zr1dlJkRXi68DM6NVI-dRpmAV5P9BKAy8GW7Wn3jEnVyJWFJXYMkCWv3U15bvz8wQPTjSp8JbTZbz1g=s6000-w6000-e365-rw-v0-nu",
        description: "Latest AI - Powered google processing with pro-level triple camera system" ,
        rating: 4.6,
        inStock: true
    },
    {
        id: 6,
        name: "Google Pixel 9A",
        category: "mobile",
        price: 49999,
        image: "https://lh3.googleusercontent.com/i3m8R4Pc-lLgz2vJp9KDawXo06xLGpuV3_iJO-diojFtGivc7E-Nl01rafJ2qOxQRGc7cEdrgFd4JrpP9KEt4UEULW3yAoQRcwc=s6000-w6000-e365-rw-v0-nu",
        description: "Powerful Tensor G4 chip with long-lasting Adaptive battery life and IP68 water resistant" ,
        rating: 4.5,
        inStock: true
    },
    {
        id: 7,
        name: "Samsung Galaxy S25",
        category: "mobile",
        price: 74999,
        image: "https://images.samsung.com/is/image/samsung/p6pim/in/2501/gallery/in-galaxy-s25-s931-sm-s931bzscins-thumb-544656310?$216_216_PNG$",
        description: "A sleak premium deign with aluminium frame with an immersive screen and sophisticated camera.",
        rating: 4.6,
        inStock: true
    },
    {
        id: 8,
        name: "Samsung Galaxy S25 Edge",
        category: "mobile",
        price: 104999,
        image: "https://images.samsung.com/is/image/samsung/p6pim/in/ps_2504/gallery/in-galaxy-s25-s937-sm-s937bzsbins-thumb-546082683?$216_216_PNG$",
        description: "Powered by AI, the next-gen ProVisual Engine gets an extra boost from Galaxy S25 Edge's high-speed processor.",
        rating: 4.6,
        inStock: true
    },
    {
        id: 9,
        name: "Samsung Galaxy S25 Ultra",
        category: "mobile",
        price: 123499,
        image: "https://images.samsung.com/is/image/samsung/p6pim/in/2501/gallery/in-galaxy-s25-s938-sm-s938bztbins-thumb-544702948?$216_216_PNG$",
        description: "Galaxy S25 Ultra's rounded design expresses a unified identity for the Galaxy S series. With its sleek and strong titanium frame and a built-in S Pen, it's an ultra-modern, vision of bold design.",
        rating: 4.8,
        inStock: true
    },

    //Laptops 
    {
        id: 10,
        name: "MacBook Pro 16",
        category: "laptop",
        price: 169900,
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mbp16-silver-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=RUxsSUMzRmI4bXo5ZmFvUjQ1MnRlbWd4R2cxNzZhWDBDYmdmTDE5MDg3NXBXalhMVU5sWTJOK1MxYmlTTi9sTmdsbGZlRHV0Q3JlbHJxWXRlWjZpMnNvUjh6cDBGVEp0bUpHdmtvdzVka1E",
        description: "The most advanced Mac Laptop with M4 MAX chip with phenominal single - multithreaded CPU performance, faster Unified Memory.",
        rating: 4.9,
        inStock: true
    },
    {
        id: 11,
        name: "Lenovo Yoga Slim 9",
        category: "laptop",
        price: 195999,
        image: "https://p3-ofp.static.pub//fes/cms/2025/08/29/2xrqo533yqelrd2c2qrce00xnb50eu709623.png",
        description: "It has Intel Core Ultra 7 processor and it can in creased upto 32GB DDRS and 1TB SSD, The peak Brighntness can extend upto 750 Nits.",
        rating: 4.9,
        inStock: true
    },
    {
        id: 12,
        name: "ASUS ProArt P16",
        category: "laptop",
        price: 240000,
        image: "https://dlcdnwebimgs.asus.com/gain/6e18d750-7a62-4bd8-9053-e60385eaaef5/w800",
        description: "The ultimate creator laptop built for studio and the on-the-go production Powered by AMD Ryzen AI 9 HX370 processor with OLED display in it.",
        rating: 4.7,
        inStock: true
    },
    {
        id:25,
        name: "DELL AlienWare 18 Area-51 gaming laptop",
        category: "laptop",
        price: 412690,
        image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/alienware-notebooks/aa18250/media-gallery/laptop-alienware-aa18250nt-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=486&qlt=100,1&resMode=sharp2&size=486,402&chrss=full",
        description: "Experience AlienWare's flagship 18-inch gaming laptop, built with innovation that brings performance to the most passionate.",
        rating: 4.5,
        inStock: false
    },
    {
        id:26,
        name: "Microsoft surface laptop studio 2",
        category: "laptop",
        price: 330199,
        image: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-FR-FR-Device2-RW1c5v1",
        description: "Its an convertable 2-in-1 laptop, with 14.4 inch touch screen with 2400 x 1600 pixel resolution,",
        rating: 4.5,
        inStock: true
    },
    {
        id:27,
        name: "Microsoft Surface Pro (11th Edition)",
        category: "laptop",
        price: 102990,
        image: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/render-13-black-product-comparison-fy25?scl=1",
        description: "Its tablet-to-laptop flexible in one powerful PC with AI-Accelerated Copilot+, with all-day battery life experience. ",
        rating: 4.4,
        inStock: true
    },

     // Wireless Earphones
     {
        id: 13,
        name: "AirPods Pro 2",
        category: "earphones",
        price: 25900,
        image: "https://www.apple.com/v/airpods-pro/q/images/overview/contrast/explore_airpods_pro_3_open__e4dxk8zpalkm_large_2x.jpg",
        description: "Premium wireless earbuds with active noise cancellation",
        rating: 4.8,
        inStock: true
    },
    {
        id: 14,
        name: "Sony WF-1000XM5",
        category: "earphones",
        price: 29990,
        image: "https://img.tatacliq.com/images/i17//658Wx734H/MP000000022064023_658Wx734H_202404262147221.jpeg",
        description: "Industry-leading noise canceling wireless earbuds",
        rating: 4.7,
        inStock: true
    },
    {
        id: 15,
        name: "Samsung Galaxy Buds Pro 3",
        category: "earphones",
        price: 19999,
        image: "https://images.samsung.com/is/image/samsung/p6pim/in/2407/gallery/in-galaxy-buds3-pro-r630-sm-r630nzwainu-542134837?$684_547_PNG$",
        description: "Premium sound quality with intelligent ANC",
        rating: 4.5,
        inStock: true
    },
    {
        id:28,
        name: "Realme Buds Air 7 Pro",
        category: "earphones",
        price: 5499,
        image: "https://image01.realme.net/general/20250519/1747633988406ef120377e0d14fc68f95246e96625de1.png.webp?width=1440&height=1440&size=813046",
        description: "It has new AI live translator with 53db and 6-mic. upto 48-hours playback with 45ms ultra low latency.",
        rating: 4.2,
        inStock: true
    },
    {
        id:29,
        name: "MOTO buds Loop",
        category: "earphones",
        price: 6999,
        image: "https://motorolain.vtexassets.com/arquivos/ids/161092-1200-auto?width=1200&height=auto&aspect=true",
        description: "Rich sound tied up with BOSE, 12mm ironless drivers with CrystalTalk AI and voice pickup sensor to sharpen the sound.",
        rating: 4.1,
        inStock: false
    },
    {
        id:30,
        name: "JBL Tour Pro 3",
        category: "earphones",
        price: 19999,
        image: "https://in.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwafe2c667/01.LS_JBL_Tour%20Pro%203_Product%20Image_Case%20Open_Black.png?sw=535&sh=535",
        description: "It has Smart charging case with JBL spatial sound and True Adaptive noise cancelling with 6-mics and upto 44 hours playback.",
        rating: 4.7,
        inStock: true
    },

    // Smart Watches
    {
        id: 16,
        name: "Apple Watch Series 11",
        category: "watch",
        price: 46900,
        image: "https://www.apple.com/v/apple-watch-series-11/b/images/overview/contrast/contrast_s11__dkui1dgfuwcy_large_2x.png",
        description: "Advanced health monitoring and fitness tracking",
        rating: 4.8,
        inStock: true
    },
    {
        id: 17,
        name: "Samsung Galaxy Watch 8",
        category: "watch",
        price: 35999,
        image: "https://images.samsung.com/is/image/samsung/p6pim/in/f2507/gallery/in-galaxy-watch8-l330-sm-l330ndaains-547660147?$684_547_PNG$",
        description: "Comprehensive health and fitness companion",
        rating: 4.6,
        inStock: true
    },
    {
        id: 18,
        name: "Google Pixel watch 4",
        category: "watch",
        price: 39900,
        image: "https://lh3.googleusercontent.com/jiUfGc4k-Yytjm7uEfVOqjQC2RGdEdSgcUyXAlTSi8UCpDr08vavfhhfC56qV2_xM6eLosgR97cnXieuJzadaMxwBylIKbwpIDwr=s6000-w6000-e365-rw-v0-nu",
        description: "Next-level health and fitness tools on a bigger, stunning display.",
        rating: 4.7,
        inStock: true
    },
    {
        id:31,
        name: "HUAWEI Watch GT 6",
        category: "watch",
        price: 28999,
        image: "https://xmartifydubai.com/wp-content/uploads/2025/10/HUAWEI-Watch-GT6-46mm-Black.jpg",
        description: "Advanced outdoor Sports rugged smart watch with upto 21 days battery-life, it is build with sapphire glass and titanium alloy. ",
        rating: 4.7,
        inStock: true
    },
    {
        id:32,
        name: "Noise Endeavour Pro",
        category: "watch",
        price: 9999,
        image: "https://www.gonoise.com/cdn/shop/files/2_341f92d3-2df9-479b-b738-4935fead73ec.webp?v=1754739537",
        description: "Full Amoled display with upto 21-days battery-life and built in GPS, it comes with accurate health monitoring system.",
        rating: 4.5,
        inStock: false
    },
    {
        id:33,
        name: "TITAN Celestor",
        category: "watch",
        price: 9995,
        image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw4a8553d8/images/Titan/Catalog/90206AP03_1.jpg?sw=600&sh=600",
        description: "It Comes with 3.6CM Amoled display with AOD and 466*466 resolution, with functional crown, SingleSyncTM Bt calling and many more advance features.",
        rating: 4.7,
        inStock: true
    },

    // Headphones
    {
        id: 19,
        name: "Apple AirpPods Max",
        category: "earphones",
        price: 59900,
        image: "https://www.apple.com/v/airpods-max/j/images/overview/contrast/airpods_max_midnight__ddy8oa1y3y4i_large_2x.png",
        description: "The ultimate over ear listening experience",
        rating: 4.9,
        inStock: true
    },
    {
        id: 20,
        name: "Bose QuietComfort Ultra",
        category: "earphones",
        price: 24900,
        image: "https://www.boseindia.com/cdn/shop/files/SF_QCUH_lunarblue_gallery_1_816x612_x2_279183a6-c6e3-41bb-9af2-c36bfdb55454.png?v=1747822521",
        description: "Legendary comfort and world-class noise cancellation",
        rating: 4.7,
        inStock: true
    },
    {
        id: 21,
        name: "JBL Tour One M3 Smart TX",
        category: "earphones",
        price: 45449,
        image: "https://uk.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw0c63aceb/LS_JBL_Tour_One_M3-Smart-Tx_Product-Image_Hero_Mocha_Friends.png?sw=680&sh=680",
        description: "Best-sounding and most feature-rich over-ear headphones ever",
        rating: 4.8,
        inStock: false
    },

    // TVs
    {
        id: 22,
        name: "Samsung Neo QLED 8k (85)",
        category: "tv",
        price: 783490,
        image: "https://images.samsung.com/is/image/samsung/p6pim/in/qa85qn950fuxxl/gallery/in-qled-qn950f-qa85qn950fuxxl-545965034?$Q90_684_547_JPG$",
        description: "8K OLED display with Real quantum dot display technology",
        rating: 4.9,
        inStock: true
    },
    {
        id: 23,
        name: "LG Signature OLED (88) 8k ",
        category: "tv",
        price: 589699,
        image: "https://www.lg.com/content/dam/channel/wcms/in/images/tvs/oled88z3psa_atrz_eail_in_c/gallery/OLED88Z3PSA-DZ-01-V.jpg/jcr:content/renditions/thum-1600x1062.jpeg?w=800",
        description: "Perfect blacks and infinite contrast for gaming",
        rating: 4.9,
        inStock: true
    },
    {
        id: 24,
        name: "Sony Bravia 9 Mini LED (85)",
        category: "tv",
        price: 828000,
        image: "https://sony.scene7.com/is/image/sonyglobalsolutions/TVFY24_UP_PrimaryTout_0pt-image01-d?$originalDimensions$&fmt=png-alpha",
        description: "Large screen with exceptional picture processing",
        rating: 4.6,
        inStock: true
    },

    //Camera
    {
        id: 33,
        name: "Nikon D6",
        category: "camera",
        price: 519995,
        image: "https://www.nikon.co.in/media/catalog/product/d/6/d6-body-only_0000_hero-image-page-view-_grey_.png?optimize=high&fit=bounds&height=690&width=690&canvas=690:690&format=jpeg",
        description: "The D6 is a 20.8 MP Flagship DSLR for professional photographers who need the ultimate camera to perform their job in the field or studio.",
        rating: 4.9,
        inStock: true
    },
    {
        id: 34,
        name: "Canon EOS R5 Mark II",
        category: "camera",
        price: 505995,
        image: "https://in.canon/media/image/2024/07/17/3d47abeaf9574a9ba9401c6ff2ca7bb1_EOS+R5+Mark+II+%26+RF24-105mm+f4L+IS+USM+Front+Slant.png",
        description: "The EOS R5 Mark II has sets benchmark for videography and photography, with new AF features made by the new Accelerated Capture System.",
        rating: 4.9,
        inStock: true
    },
    {
        id: 35,
        name: "Sony Aplha ILCE-1M2",
        category: "camera",
        price: 579995,
        image: "https://www.sony.co.in/image/6c5b1b963315cb73b32f88b18f5de2be?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
        description: "It has Sony's flagship α1 mirrorless interchangeable-lens camera. With enhanced AI-based subject recognition and high resolution.",
        rating: 4.9,
        inStock: true
    }
    
];

// Category Mapping
const category = {
    all: "All Products",
    mobile: "Mobile Phones",
    laptop: "Laptops",
    earphones: "True Wireless Earphones",
    watch: "Smart Watch",
    tv: "Television",
    camera: "Camera"
};

//Transform products to match the expected structure.
const transformedProducts = products.map(product => ({
    id: product.id,
    title: product.name,
    description: product.description,
    price: product.price,
    originalPrice: product.price > 70000 ? Math.round(product.price * 1.3) : null,
    category: product.category,
    rating: product.rating,
    inStock: product.inStock,
    image: product.image,
    icon: getProductIcon(product.category),
    badge: product.price > 150000 ? "premium" : product.price < 90000 ? "Best Deal" : null
}));

//Function to get appropriate icon for each category
function getProductIcon(category) {
    const iconMap = {
        'mobile' : 'fas fa-mobile-alt',
        'laptop' : 'fas fa-laptop',
        'earphones' : 'fas fa-headphones',
        'watch' : 'fas fa-clock',
        'tv' : 'fas fa-tv',
        'camera': 'fas fa-camera'
    };
    return iconMap[category] || 'fas fa-box';
}

window.products = transformedProducts;