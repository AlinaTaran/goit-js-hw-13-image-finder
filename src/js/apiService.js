import axios from 'axios';

const baseUrl = `https://pixabay.com/api/`;

// const https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ

export default {
  searchQuery: '',
  page: 1,

  apiKey: `18692705-ed4727d48f1212ef902c664a7`,
  async searchImages() {
    const result = await axios.get(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${this.apiKey}`,
    );
    this.incrementPage();
    return result.data.hits;
  },
  resetPage() {
    this.page = 1;
  },
  incrementPage() {
    this.page += 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};
