import { Injectable } from '@angular/core';

/*
 * Menu interface
 */
export interface Menu {
	state: string;
	name?: string;
	type?: string;
	icon?: string;
	children?: ChildrenItems[];
}

/*
 * Children menu interface
 */
export interface ChildrenItems {
  	state: string;
  	name: string;
  	type?: string;
}

const HEADERMENUITEMS = [
   {
      state: "home",
      name: "HOME",
      type:"link"
   },
   {
      state: "forum",
      name: "FORUMS",
      type:"link"
   },
   {
      state: "home",
      name: "CHATROOMS",
      type:"link"
   },
   {
      state: "home",
      name: "MARKET PLACE",
      type:"link"
   },
   {
      state: "login",
      name: "GET STARTED",
      type:"link"
   },
   // {
   //    state:"",
   //    name:"Pages",
   //    type:"sub",
   //    icon: 'fa fa-caret-down',
   //    children: [
   //       { state: 'about', name: 'About', type:"link"},
   //       { state: 'features', name: 'Features', type:"link"},
   //       { state: 'contact', name: 'Contact', type:"link"},
   //       { state: 'support', name: 'Support', type:"link"},
   //       { state: 'pricing', name: 'Pricing', type:"link"},
   //       { state: 'search', name: 'Search', type:"link"},
   //       { state: 'portfolio-v1', name: 'Portfolio V1', type:"link"},
   //       { state: 'portfolio-v2', name: 'Portfolio V2', type:"link"},
   //       { state: 'portfolio-v3', name: 'Portfolio V3', type:"link"},
   //       { state: 'testimonial-v1', name: 'Testimonial V1', type:"link"},
   //       { state: 'testimonial-v2', name: 'Testimonial V2', type:"link"}  
   //    ]
   // },
   // {
   //    state:"",
   //    name:"Features",
   //    type:"sub",
   //    icon: 'fa fa-caret-down',
   //    children: [
   //       { state: 'sidebar-widgets', name:'Widgets', type:"link"},
   //       { state: 'login', name:'Login', type:"link"},
   //       { state: 'sign-up', name: 'Sign Up', type:"link"},
   //       { state: 'thank-you', name: 'Thank You', type:"link"},
   //       { state: 'maintenance', name: 'Maintenance', type:"link"},
   //       { state: 'not-found', name: '404', type:"link"}
   //    ]
   // },
   // {
   //    state:"",
   //    name:"Shop",
   //    type:"sub",
   //    icon: 'fa fa-caret-down',
   //    children: [
   //       { state: 'product-list', name:'Product List', type:"link"},
   //       { state: 'product-cart', name: 'Product Cart', type:"link"},
   //       { state: 'product-checkout', name: 'Product Checkout', type:"link"},
   //       { state: 'product-detail', name: 'Product Detail', type:"link"}
   //    ]
   // },
   // {
   //    state:"",
   //    name:"Blog",
   //    type:"sub",
   //    icon: 'fa fa-caret-down',
   //    children: [
   //       { state: 'blog-listing-sidebar', name:'blog column ', type:"link"},
   //       { state: 'blog-column2', name: 'Blog Column2', type:"link"},
   //       { state: 'blog-column3', name: 'Blog Column3', type:"link"},
   //       { state: 'blog-masonry2', name: 'Blog Masonry2', type:"link"},
   //       { state: 'blog-masonry3', name: 'Blog Masonry3', type:"link"},
   //       { state: 'blog-sidebar', name: 'Blog Sidebar', type:"link"},
   //       { state: 'blog-no-sidebar', name: 'Blog No Sidebar', type:"link"},
   //       { state: 'blog-detail', name: 'Blog Detail', type:"link"}
   //    ]
   // }
   ];

const FOOTERMENU = [
   {
      state: "home",
      name: "Home",
      type:"link"
   },
   {
      state:"features",
      name:"Features",
      type:"link"
   },
   {
      state:"pricing",
      name:"Pricing",
      type:"link"
   },
   {
      state:"contact",
      name:"Contact",
      type:"link"
   },
   {
      state:"team",
      name:"Team",
      type:"link"
   },
   {
      state:"forum",
      name:"About",
      type:"link"
   }
]

const EXPLOREMENU = [
   {
      state: "home",
      name: "Home",
      type:"link"
   },
   {
      state: "forum",
      name: "Forums",
      type:"link"
   },
   {
      state: "home",
      name: "Chatroom",
      type:"link"
   },
   {
      state: "home",
      name: "Market Place",
      type:"link"
   },
   {
      state: "login",
      name: "Get Started",
      type:"link"
   },
];

const FOOTERMENU2 = [
   {
      state: "home",
      name: "Home",
      type:"link"
   },
   {
      state: "forum",
      name: "Forums",
      type:"link"
   },
   {
      state: "home",
      name: "Chatroom",
      type:"link"
   },
   {
      state: "home",
      name: "Market Place",
      type:"link"
   },
   {
      state: "login",
      name: "Get Started",
      type:"link"
   },
];

@Injectable()
export class MenuItems {

   /*
    * Get all header menu
    */
   getMainMenu(): Menu[] {
      return HEADERMENUITEMS;
   }

   /*
    * Get footer menu
    */
   getFooterMenu(): Menu[] {
      return FOOTERMENU;
   }

   /*
    * Get the explore menu
    */
   getExploreMenu(): Menu[] {
      return EXPLOREMENU;
   }

   /*
    * Get the footer2
    */
   getFooter2(): Menu[] {
      return FOOTERMENU2;
   }

}
