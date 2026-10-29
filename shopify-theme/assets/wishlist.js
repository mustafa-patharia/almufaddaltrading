/**
 * Al Mufaddal Client-Side Wishlist System
 * Stores favorite product handles in localStorage. Zero third-party fees.
 */
(function initWishlist() {
  const STORAGE_KEY = 'almufaddal_wishlist';

  function getWishlist() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch (e) {
      return [];
    }
  }

  function setWishlist(items) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {}
    updateWishlistUI();
  }

  function toggleWishlist(handle) {
    let list = getWishlist();
    const idx = list.indexOf(handle);
    if (idx > -1) {
      list.splice(idx, 1);
    } else {
      list.push(handle);
    }
    setWishlist(list);
  }

  function updateWishlistUI() {
    const list = getWishlist();
    // Update all buttons on page
    document.querySelectorAll('[data-wishlist-handle]').forEach(btn => {
      const handle = btn.getAttribute('data-wishlist-handle');
      if (list.includes(handle)) {
        btn.classList.add('is-wishlisted');
        btn.setAttribute('aria-label', 'Remove from wishlist');
      } else {
        btn.classList.remove('is-wishlisted');
        btn.setAttribute('aria-label', 'Add to wishlist');
      }
    });

    // Update global counter badges if present
    document.querySelectorAll('.wishlist-counter-badge').forEach(badge => {
      badge.textContent = list.length;
      badge.style.display = list.length > 0 ? 'inline-flex' : 'none';
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    updateWishlistUI();

    document.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-wishlist-handle]');
      if (!btn) return;
      e.preventDefault();
      e.stopPropagation();
      const handle = btn.getAttribute('data-wishlist-handle');
      if (handle) {
        toggleWishlist(handle);
      }
    });
  });

  window.AlMufaddalWishlist = {
    get: getWishlist,
    toggle: toggleWishlist,
    update: updateWishlistUI
  };
})();

