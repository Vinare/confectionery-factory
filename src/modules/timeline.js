export const timeline = () => {
  const box = document.querySelector('.timeline')

  const changeTimeline = () => {
    const rect = box.getBoundingClientRect()
    const centerTop = document.documentElement.clientHeight / 2 + 100
    const centerBottom = document.documentElement.clientHeight / 2 - 100
    const line = box.querySelector('.timeline__progress--line')
    const blocks = box.querySelectorAll('.timeline-item')
    const title = document.querySelector('.our-time-title')
    const array = [...blocks, title]

    const changeClassActive = (percent, start, idx) => {
      if (percent >= start && percent !== 0) {
        array[idx].classList.add('-active')
      } else {
        array[idx].classList.remove('-active')
      }
    }

    if (Math.ceil(rect.y) < centerTop && (Math.ceil(rect.y) + box.clientHeight) > centerBottom) {
      let percent = Math.ceil(((rect.y - document.documentElement.clientHeight / 2) * 100) / box.clientHeight) * -1

      if (percent < 0) {
        percent = 0
      } else if (percent > 100) {
        percent = 100
      }

      array.forEach((item, idx) => {
        changeClassActive(percent, parseInt(item.dataset.startAnimation), idx)
      })

      line.style.height = Math.abs(percent) + '%'
    }
  }

  if (box) {
    document.addEventListener('scroll', () => {
      changeTimeline()
    })
    
    changeTimeline()
  }


  // const timeline = document.querySelector(".timeline");

  // if (timeline) {
  //   const timelineItems = timeline.querySelectorAll(".timeline-item");
  //   const title = document.querySelector(".our-time-title");
  //   const items = [...timelineItems, title];

  //   let docRect = document.body.getBoundingClientRect();
  //   let isDownx = true;
  //   let activeIndex = 0;

  //   const checkActive = () => {
  //     const docRectTemp = document.body.getBoundingClientRect();

  //     if (docRectTemp.y > docRect.y) {
  //       isDownx = false;
  //     } else {
  //       isDownx = true;
  //     }

  //     docRect = document.body.getBoundingClientRect();

  //     items.forEach((i, idx) => {
  //       const rect = i.getBoundingClientRect();

  //       if (
  //         rect &&
  //         rect.y > 0 &&
  //         rect.y < document.documentElement.clientHeight / 2
  //       ) {
  //         if (isDownx) {
  //           if (idx > activeIndex) {
  //             activeIndex = idx;
  //           }
  //           i.classList.remove("-active");
  //         } else {
  //           if (idx < activeIndex) {
  //             activeIndex = idx;
  //           }
  //           i.classList.remove("-active");
  //         }
  //         items[activeIndex].classList.add("-active");
  //       } else {
  //           i.classList.remove("-active");
  //       }
  //     });
  //   };

  //   document.addEventListener("scroll", checkActive);
  //   checkActive();
  // }
};
