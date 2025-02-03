import { defineConfig } from "vite";

export default defineConfig({
    base:'/meu-projeto',
    build:{
        rollupOptions:{
            input:{

           
        main:'/public/index.html',
        iphones:'/public/iphones.html',
        ipads:'/public/ipads.html',
        mac:'/public/mac.html',
        signup:'/public/signup.html',
    
    }, 
    },
    },
});