import {  icoAutoTransmission, icoBorg, icoChangeCircle, iconAzm, iconConversionPath, iconDiversity2, imgPost1, imgPost2, imgPost3, patnerLogo1, patnerLogo2, patnerLogo3, patnerLogo4, patnerLogo5 } from "@assets/index";


export const navigation = [
    {title: 'home', url: '/', active: true},
    {title: 'about', url: '#about'},
    {title: 'services', url: '#services'},
    {title: 'blog', url: '#blog'},
    {title: 'testimonials', url: '#testimonials'},
    {title: 'contact', url: '#contact-us', onlyMobile: true},
];

export const patnerLogo = [
    {logo:"equals",alt:"Logo 1"},
    {logo:"graphcore",alt:"Logo 2"},
    {logo:"marvell",alt:"Logo 3"},
    {logo:"openai",alt:"Logo 4"},
    {logo:"openweb",alt:"Logo 5"},
    {logo:"tweag",alt:"Logo 6"},
]

export const cardAbout = [
    { id: "platform",icon: "airobot",title:'AI Robot Solutions',paragraph:'From smart industrial robotics to AI-powered systems, we offer comprehensive'},
    {id: "presentation",icon:"avanced-ai",title:'Advanced AI',paragraph:'From smart industrial robotics to AI-powered systems, we offer comprehensive'}
]

export const ServicesCardBig = [
    {id:"platform", icon:"platform", title:'AI Robotics Smarter, Faster Solutions.',paragraph:'Our platform delivers state-of-the-art AI-driven robotics solutions designed to streamline operations'},
    { id:"advancedAI", icon:"presentation", title:'Advanced AI and Robotics',paragraph:'Our platform delivers state-of-the-art AI-driven robotics solutions designed to streamline operations'},
]

export const ServicesCardMini = [
    {id:"innovation",icon:"future", title:'Future of Innovation: AI Robotics at Your Fingertips',paragraph:'From smart industrial robotics to AI-powered systems, we offer comprehensive solutions that integrate seamlessly into various industries.', type:"dark"},
    {id:"transformation",icon:"transform", title:'AI and Robotics Transforming Industries',paragraph:'From smart industrial robotics to AI-powered systems, we offer comprehensive solutions that integrate seamlessly into various industries.', type:"primary"},
]
export const ServicesCardRevolutions = [
    {id:"RoboticsInnovation",icon:"search", title:'AI Robotics Smarter, Faster Solutions.',paragraph:'Our platform delivers state-of-the-art AI-driven robotics solutions designed to streamline operations'},
    {id:"RoboticsTransformation",icon:"home-ia", title:'Advanced AI and Robotics',paragraph:'Our platform delivers state-of-the-art AI-driven robotics solutions designed to streamline operations'},
]

export const LatestBlog = [
    {id:'AutomationEra',img:imgPost1,title:'Explore New Era of Automation  AI & Robotics Technology',paragraph:'From smart industrial robotics to AI-powered systems, we offer comprehensive solutions that integrate seamlessly...',alt:'Rostro Robot'},
    {id:"RevolutionizeBusiness",img:imgPost2,title:'Revolutionize Your Business with AI Robotics Solutions.',paragraph:'From smart industrial robotics to AI-powered systems, we offer comprehensive solutions that integrate seamlessly...',alt:'Centro de Investigación'},
    {id:"SmartTechnology",img:imgPost3,title:'Step into the World of Smart Technology',paragraph:'From smart industrial robotics to AI-powered systems, we offer comprehensive solutions that integrate seamlessly...',alt:'Robot Trabajando'},
]


export const footerMenuData = [
  {
    id: "infoSection",
    title: "Información",
    links: [
      { id: "press", label: "Press Centre", href: "#" },
      { id: "blog", label: "Our Blog", href: "#" },
      { id: "terms", label: "Terms and Conditions", href: "#" },
    ],
  },
  {
    id: "menu",
    title: "Menú",
    links: [
      { id: "about", label: "About", href: "#" },
      { id: "services", label: "Services", href: "#" },
      { id: "blog", label: "Blog", href: "#" },
    ],
  },
  {
    id: "contact",
    title: "Contacto",
    links: [
      { id: "phone", label: "Phone", content: "+123 456 789" },
      { id: "email", label: "Email", content: "example@example.com" },
      { id: "address", label: "Address", content: "Address Line 01" },
    ],
  },
];
