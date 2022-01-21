function initialize() {
  $('#paragraph p').textillate({
    selector: '.texts',
    loop: false,
    minDisplayTime: 4000,
    initialDelay: 1,
    autoStart: true,
    inEffects: [],
    in: {
      effect: 'fadeInUp',
      scrub: 1.5,
      delayScale: 2,
      delay: 35,
      sync: false,
      shuffle: false,
    },
  });
  gsap.to('#paragraph', {
    opacity: 1,
  })
}
initialize()

if (window.screen.width > 500) {
  function mainScreen() {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#imgs',
        pin: true,
        start: 'top top',
        // end: '+=500',
        scrub: 1,
        // markers:true
      }
    })
    tl
      .to('#sm1,#med1', {
        left: '-50%',
        opacity: 0,
        duration: 2,
        ease: Expo.easeInOut
      }, 'abcd')

      .to('#sm2,#med2', {
        right: '-50%',
        opacity: 0,
        duration: 2,
        ease: Expo.easeInOut
      }, 'abcd')

      .to('#large', {
        width: '100%',
        duration: 2,
        ease: Expo.easeInOut
      }, 'abcd')
  }
  mainScreen()
}

function aboutPage() {
  let tl2 = gsap.timeline({
    onStart: function () {
      $('.show,.show1').textillate({
        selector: '.texts',
        loop: false,
        minDisplayTime: 4000,
        initialDelay: 1,
        autoStart: true,
        inEffects: [],
        in: {
          effect: 'fadeInUp',
          scrub: 1.5,
          delayScale: 2,
          delay: 50,
          sync: false,
          shuffle: false,
        },
      });
    },
    scrollTrigger: {
      trigger: '#about',
      // pin:true,
      start: 'top 50%',
      end: '+=500',
      scrub: 1.5,
      // markers:true
    }
  })
  tl2
    .to('.show', {
      opacity: 1,
    })
    .to('.show1', {
      opacity: 1,
      duration: 1
    })
    .to('hr', {
      width: '90%',
      duration: 1
    }, '-=1')

  let tl3 = gsap.timeline({
    onStart: function () {
      $('#lft>p').textillate({
        selector: '.texts',
        loop: false,
        minDisplayTime: 4000,
        initialDelay: 1,
        autoStart: true,
        inEffects: [],
        in: {
          effect: 'fadeInUp',
          scrub: 1.5,
          delayScale: 2,
          delay: 10,
          sync: false,
          shuffle: false,
        },
      });
    },
    scrollTrigger: {
      trigger: '#about',
      start: 'top top',
      // markers:true,
    }
  })
  tl3
    .to('#lft p', {
      opacity: 1,
    })
  let tl4 = gsap.timeline({
    onStart: function () {
      $('#lft>h6').textillate({
        selector: '.texts',
        loop: false,
        minDisplayTime: 4000,
        initialDelay: 3,
        autoStart: true,
        inEffects: [],
        in: {
          effect: 'fadeInUp',
          scrub: 1.5,
          delayScale: 1,
          delay: 50,
          sync: false,
          shuffle: false,
        },
      });

    },
    scrollTrigger: {
      trigger: '#about',
      start: 'top top',
      // markers:true,
    }
  })
  tl4
    .to('#lft h6', {
      opacity: 1,
      delay: 2
    })

    .to('#img', {
      scale: 1.2,
      delay: 1
    }, 'abc')

    .to('#img img', {
      scale: 0.5,
      delay: 1
    }, 'abc')
}
aboutPage()


