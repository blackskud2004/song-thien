function scalePage() {
    const DESIGN_WIDTH = 1920;
    const scaleRatio = window.innerWidth / DESIGN_WIDTH;
  
    const root = document.getElementById('scaled-root');
    if (root) {
      root.style.transform = `scale(${scaleRatio})`;
      root.style.transformOrigin = 'top left';
      root.style.width = `${DESIGN_WIDTH}px`;
  
      // ✅ Tính lại chiều cao thật của phần tử scale
      const realHeight = root.scrollHeight * scaleRatio;
      document.body.style.height = `${realHeight}px`;
      document.body.style.overflowX = 'hidden';
    }
  }
  