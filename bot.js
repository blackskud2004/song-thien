(function autoScaleBot() {
    const DESIGN_WIDTH = 1920;
  
    function scalePage() {
      const scaleRatio = window.innerWidth / DESIGN_WIDTH;
  
      const body = document.body;
      body.style.transform = `scale(${scaleRatio})`;
      body.style.transformOrigin = 'top left';
      body.style.width = `${DESIGN_WIDTH}px`;
      body.style.overflowX = 'hidden';
    }
  
    window.addEventListener('load', scalePage);
    window.addEventListener('resize', scalePage);
  })();
  