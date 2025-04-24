function autoZoomPage() {
  // Kích thước thiết kế gốc (ví dụ: 1920)
  const DESIGN_WIDTH = 1920;
  const w = window.innerWidth;

  // Tính tỷ lệ zoom
  let zoom = w / DESIGN_WIDTH;
  // Giới hạn zoom tối đa và tối thiểu để không bị vỡ giao diện
  zoom = Math.max(0.5, Math.min(zoom, 1));

  // Áp dụng zoom cho body
  document.body.style.zoom = zoom;
}

// Gọi hàm khi load và khi resize
window.addEventListener('load', autoZoomPage);
window.addEventListener('resize', autoZoomPage);