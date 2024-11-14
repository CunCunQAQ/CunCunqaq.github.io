      // 定义变量
      let offset = 0;
      let maxOffset = 0;
      let minOffset = -3;
      // 获取所有卡片元素并存储在数组中
      const slides = Array.from(document.querySelectorAll(".slideshow-card"));

      // 向前切换卡片
      function slideToPrev() {
          // 更新偏移量，取最大值
          offset = Math.min(maxOffset, offset + 1);
          slides.forEach(slide => {
              // 根据偏移量设置卡片垂直偏移效果
              slide.style.transform = `translateY(${offset * 100}%)`;
          });
      }
      // 向后切换卡片
      function slideToNext() {
          offset = Math.max(minOffset, offset - 1);
          slides.forEach(slide => {
              slide.style.transform = `translateY(${offset * 100}%)`;
          });
      }
