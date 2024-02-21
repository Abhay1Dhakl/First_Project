import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';

import './maincss.css'; // Import your local stylesheet

const Main = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
    const loadScripts = async () => {
      await import('gsap');
      await import('gsap/ScrollTrigger');
      await import('locomotive-scroll');

    };

    loadScripts();

    return () => {
      locoScroll.destroy();
    };
  }, []);

  useEffect(() => {
    gsap.to("#page1>video", {
      scrollTrigger: {
        trigger: '#page1>video',
        start: '0.1% top',
        end: 'bottom top',
        scroller: '#main'
      },
      onStart: () => {
        document.querySelector("#page1>video").play();
      }
    });

    gsap.to("#page1", {
      scrollTrigger: {
        trigger: '#page1',
        start: 'top top',
        end: 'bottom top',
        scroller: '#main',
        pin: true
      }
    });

    var t1 = gsap.timeline({
      scrollTrigger: {
        trigger: '#page2',
        start: 'top top',
        scrub: 1,
        scroller: '#main',
        pin: true
      }
    });

    t1.to('#page2>h1', {
      top: '-50%'
    });

    var t2 = gsap.timeline({
      scrollTrigger: {
        trigger: '#page3',
        start: 'top top',
        scrub: 1,
        scroller: '#main',
        pin: true
      }
    });

    t2.to('#page3>h1', {
      top: '-50%'
    });
  }, []);

  return (
    <div id="main">
      <div id="page1">
        <video src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/HGATaVJubj6casdeu/videoblocks-4198_skvnqufosu0gqu5hidqync0yoa_hbestufzzi__ade18173aec5e05f871d3ebcb3a42716__P360.mp4" muted></video>
      </div>
      <div id="page2">
        <h1>Visit and Enjoy</h1>
        <video src="https://static.vecteezy.com/system/resources/previews/003/559/068/mp4/car-travel-concept-aerial-view-of-mountain-road-near-sea-at-lefkada-island-free-video.mp4" autoPlay loop muted></video>
      </div>
      <div id="page3">
        <h1>We welcome you</h1>
        <video src="https://static.vecteezy.com/system/resources/previews/011/433/636/mp4/caucasian-woman-stand-on-rocky-deda-ena-viewpoint-carefree-tourist-woman-looking-at-sun-enjoying-landscape-girl-traveler-on-top-of-summit-deda-ena-enjoy-panorama-of-kazbegi-free-video.mp4" autoPlay loop muted></video>
      </div>
    </div>
  );
};

export default Main;
