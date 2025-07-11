import { onUnmounted } from 'vue';
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
gsap.config({ nullTargetWarn: false });

export function useGsap() {
  const ctx = [];

  onUnmounted(() => {
    ctx.forEach((c) => c.revert());
  });

  function add(fn, scope) {
    let newCtx = gsap.context(fn, scope);
    ctx.push(newCtx);
    return newCtx;
  }

  return { add };
}

export function imageZoomInOut(container, image) {
  if (image) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        scrub: 1,
        markers: false,
      },
    });
    tl.fromTo(
      image,
      { scale: 1 },
      {
        scale: 1.3,
        duration: 3.5,
        ease: "expoScale(1, 1.15)",
        transformOrigin: "50% 50%",
        z: 0.1,
        rotationZ: "0.01",
      },
      "<"
    );
    return tl;
  }
}

export function borderAnimation(border, start, end) {
  if (border) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: border,
        start: "top 90%",
        end: "bottom 10%",
        scrub: 0.5,
        markers: false,
      },
    });

    tl.fromTo(
      border,
      {
        width: `${start}%`,
      },
      {
        width: `${end}%`,
      }
    );
    return tl;
  }
}

export function foodMenuHr(food_menu_hr) {
  const tl6 = gsap.timeline({
    scrollTrigger: {
      trigger: food_menu_hr,
      start: "top 90%",
      end: "bottom 10%",
      scrub: 0.1,
      markers: false,
    },
  });
  tl6.fromTo(
    food_menu_hr,
    {
      width: "0px",
    },
    {
      duration: 0.3,
      width: "200px",
    }
  );
}

export function overImageShows(menuListSection) {
  if (menuListSection) {
    menuListSection.addEventListener("mouseleave", function () {
      gsap.to(menuListSection.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.8,
      });
    });

    menuListSection.addEventListener("mousemove", function (dets) {
      const diff = dets.clientY - menuListSection.getBoundingClientRect().top;
      const dilf = dets.clientX - menuListSection.getBoundingClientRect().left;
      gsap.to(menuListSection.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dilf + 50,
      });
    });
  }
}

export function commonTitleAnimation(title) {
  gsap.fromTo(
    title,
    { y: 100, opacity: 0 },
    {
      opacity: 1,
      y: 0,
      delay: 1,
      ease: "power4.out",
      duration: 0.8,
      stagger: {
        amount: 0.3,
      },
    }
  );
}

export function scrollButton() {
  gsap.to(window, {
    scrollTo: 0,
    duration: 0.3,
  });
}

export function footerAnimation(
  footerContainer,
  footerHrTop,
  footerHrBottom,
  footerTimeBorder
) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: footerContainer,
      start: "top 90%",
      end: "bottom 10%",
      markers: false,
    },
  });

  tl.fromTo(
    footerHrTop,
    {
      width: "0%",
    },
    {
      delay: 0.3,
      duration: 0.5,
      width: "100%",
    }
  )
    .fromTo(
      footerHrBottom,
      {
        width: "0%",
      },
      {
        duration: 0.8,
        width: "100%",
      }
    )
    .to(footerTimeBorder, {
      width: "100%",
    });
}

export function scrollUpShow(scrollup) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: scrollup,
      scrub: true,
      duration: 0.2,
      markers: false,
      start: "top 90%",
      end: "bottom 80%",
    },
  });
  tl.to(scrollup, { top: "85%" });
}
