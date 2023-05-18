export class setStatus {
  statusNew(statusNew) {
    if (!statusNew) return ``;
    return `<span class="vacancy__info-statusNew">NEW!</span>`;
  }

  statusFeatured(statusFeatured) {
    if (!statusFeatured) return ``;
    return `<span class="vacancy__info-statusFeatured">FEATURED</span>`;
  }
}
