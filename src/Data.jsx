const DATA = [
    {
        id: 0,
        title: "Nike Air Max 97",
        price: 1550,
        desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e196cd9a-e12b-4529-8ba2-a0333c08befc/precision-6-basketball-shoes-h5907m.png'
   
        , rating: '{"rate":9.9,"count":120}',
video:' https://static.nike.com/a/videos/q_90/65a5d203-10e9-4f47-b9d3-54d9cd606d8f/video.mp4',       category: "Man's Category"

   
    },
   
    {
        id: 1,
        title: "Nike Dunk Low Retro Premium",
        price: 800,
        desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d1acc841-5bd4-4a06-811a-95711e9c7a73/full-force-low-shoes-w2MKmW.png'        , rating: '{"rate":3.9,"count":120}',
        video:'https://static.nike.com/a/videos/q_90/aecff913-14de-49cc-b1e5-4ecb85473503/video.mp4',
        category: "Man's Category"

    },
    {
        id: 2,
        title: "Jordan One Take 4 PF",
        price: 950,
        desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b212e5bf-ec2f-4b0d-b759-37e893003043/air-max-97-shoes-EBZrb8.png"
        , rating: '{"rate":3.9,"count":120}',
        video:'https://static.nike.com/a/videos/q_90/17981ae3-808a-4fbd-8093-c793d4dd2de5/video.mp4',
        category: "Man's Category"

    },
    {
        id: 3,
        title: "Air Jordan 1 'Next Chapter'",
        price: 1050,
        desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/53f44f04-f9a1-439e-82bd-1fabea198a2a/court-vision-low-next-nature-shoes-N2fFHb.png"
        , rating: '{"rate":3.9,"count":120}',
         video:'https://static.nike.com/a/videos/q_90/66dc9847-12f1-426b-a763-62e5e72b64e8/video.mp4',
        category: "Man's Category"


    },
    {
        id: 4,
        title: "Jumpman MVP",
        price: 1150,
        desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/zjrheo7cjgrv6opt8txu/air-force-1-07-wb-shoe-j46FxX.png"
    
        , rating: '{"rate":9.9,"count":120}',
       video:'https://static.nike.com/a/videos/q_90/e561f28f-cb22-48e0-a882-8dfaa47b481c/video.mov',
       category: "Man's Category"

    
    },
    
    {
        id: 5,
        title: "Paris Saint-Germain Jumpman MVP",
        price: 1250,
        desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cbc944f4-d58d-49a1-8a7a-3a8a075448a8/air-max-97-shoes-EBZrb8.png"
    
        , rating: '{"rate":3.9,"count":120}',
video:' https://static.nike.com/a/videos/q_90/17981ae3-808a-4fbd-8093-c793d4dd2de5/video.mp4',       category: "Man's Category"

    },
    {
        id: 6,
        title: "Nike Air Force 1'07",
        price: 750,
        desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/air-force-1-07-shoes-WrLlWX.png"
        , rating: '{"rate":3.9,"count":120}',
        video: 'https://static.nike.com/a/videos/q_90/d58e9afa-e042-497c-917d-d625c432b72b/video.mp4',
        category: "Man's Category"

    },
    
    {
        id: 7,
        title: "Nike Dunk High Retro SE",
        price: 1750,
        desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f685abe-510a-4599-bb28-69859836bf88/air-max-pulse-roam-shoes-NSfkP0.png'
   
   
        , rating: '{"rate":3.9,"count":120}',
        video:'https://static.nike.com/a/videos/q_90/c0b003ac-256f-4740-8f37-620993545b56/video.mp4',
       category: "Man's Category"

    }
]

export default DATA;