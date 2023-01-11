export class Ajax {
  constructor() {
    this.ajax = new XMLHttpRequest();
  }
  getRequest() {
    return new Promise((resolve) => {
      this.ajax.open('GET', 'https://api.hnpwa.com/v0/news/1.json');
      resolve(
        new Promise((resolve) => {
          this.ajax.addEventListener('load', () => {
            resolve(JSON.parse(this.ajax.response));
          });
        })
      );
      this.ajax.send();
    });
  }
}

export class HTMLRender {
  constructor(jsonData) {
    this.jsonData = jsonData;
  }
  renderHTML() {
    const div = document.getElementById('list');
    const arr = [];
    for (const data of this.jsonData) {
      const { id, title, points, user, time_ago } = data;
      arr.push(`
        <ul>
          <li>${id}</li>
          <li>${title}</li>
          <li>${points}</li>
          <li>${user}</li>
          <li>${time_ago}</li>
        </ul>
      `);
      div.innerHTML = arr.join('');
    }
  }
}

// const btn = document.getElementById('btn_submit');
// btn.addEventListener('click', () => {
//   const ajax = new Ajax();
//   ajax.getRequest().then((res) => {
//     const html = new HTMLRender(res);
//     html.renderHTML();
//   });
// });
