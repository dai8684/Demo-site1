ScrollTrigger.create({
    trigger: '.main', 
    start: 'top center',
    end: 'bottom center', 
    toggleClass: {targets: ".nav", className: "nav-active"}, 
  });

gsap.fromTo('.news-content', { 
    autoAlpha: 0, 
    x: -100, 
    y: -200, 
},
{
    x: 0, 
    y: 0, 
    autoAlpha: 1, 
    delay: 0, 
    duration: 1.5, 
    
    scrollTrigger: {
    trigger: '.news-container',
    start: 'top center'
    },
    
    stagger: {
        from: "start", 
        amount: 0.5
    }
    }
);

gsap.fromTo('.news-title', { 
    autoAlpha: 0,
    x: -100, 
},
{   x: 0,
    autoAlpha: 1, 
    delay: 0, 
    duration: 1.2, 
    
    scrollTrigger: {
    trigger: '.news-title',
    start: 'top center'
    },
    }
);

gsap.fromTo('.service-title', { 
    autoAlpha: 0, 
},
{
    autoAlpha: 1, 
    delay: 0, 
    duration: 1.5, 
    
    scrollTrigger: {
    trigger: '.service-title',
    start: 'top center'
    },
    }
);

gsap.fromTo('.service-flex', { 
    autoAlpha: 0, 
    y: -100, 
},
{
    y: 0, 
    autoAlpha: 1, 
    delay: 0.7, 
    duration: 1, 
    
    scrollTrigger: {
    trigger: '.service-wrapper',
    start: 'top center'
    },

    stagger: {
        from: "start", 
        amount: 0.5
    }
    }
);

gsap.fromTo('.ach-title', { 
    autoAlpha: 0, 
    x: 100,
},
{
    autoAlpha: 1, 
    delay: 0, 
    duration: 1.5, 
    x: 0,
    
    scrollTrigger: {
    trigger: '.ach-title',
    start: 'top center'
    },
    }
);

ScrollTrigger.create({
    trigger: '.ach-wrapper', 
    start: 'top center',
    end: 'bottom center', 
    toggleClass: {targets: ".bar-active", className: "bar"},
    once: true, 
  });

gsap.fromTo('.ach-text', { 
    autoAlpha: 0, 
},
{
    autoAlpha: 1, 
    delay: 0.7, 
    duration: 1.5, 
    
    scrollTrigger: {
    trigger: '.ach-wrapper',
    start: 'top center'
    },
    }
);

gsap.fromTo('.con-title', { 
    autoAlpha: 0, 
    y: 100,
},
{
    autoAlpha: 1, 
    delay: 0, 
    duration: 1.5, 
    y: 0,
    
    scrollTrigger: {
    trigger: '.con-title',
    start: 'top center'
    },
    }
);

gsap.fromTo('.contact-flex', { 
    autoAlpha: 0, 
    y: -100, 
},
{
    y: 0, 
    autoAlpha: 1, 
    delay: 0.7, 
    duration: 1, 
    
    scrollTrigger: {
    trigger: '.contact-wrapper',
    start: 'top center'
    },

    stagger: {
        from: "start", 
        amount: 0.2
    }
    }
);