const data_path = path.join(path.app_root(), 'renderer', 'data', 'data.json');


// command
const fs = file.fs;


// doms
const mycontainer = document.querySelector('.mycontainer');
const search_container = document.querySelector('.search-container');
const result_container = document.querySelector('.result-container');
const select_year = document.querySelector('.select-year');
const search_input = document.querySelector('.search-input');
const notfound_alert = document.querySelector('.notfound');
const list_stock_code = document.querySelector('#list-stock-code');
const list_env = document.querySelector('#list-env');
const list_social = document.querySelector('#list-social');
const list_govern = document.querySelector('#list-govern');
const list_date = document.querySelector('#list-date');
const list_score = document.querySelector('#list-score');

//weight
const weights = {
  "Environmental": 0.48,
  "Social": 0.26,
  "Governance": 0.26
}

