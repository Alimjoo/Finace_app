var jsonData = undefined;
function findIndexByStockCode(stockCode, data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i]["Stock Code"] === stockCode) {
            return i;
        }
    }
    return -1; // Return -1 if not found
}

function set_result(score, code, env, social, govern, date){
    list_score.innerHTML = score;
    list_stock_code.innerHTML = code;
    list_env.innerHTML = env;
    list_social.innerHTML = social;
    list_govern.innerHTML = govern;
    list_date.innerHTML = date;
}

function calculate(stock_code, select_year, jsonData){
    const index = findIndexByStockCode(stock_code, jsonData);
    if (index == -1){
        notfound_alert.style.display = "block";
        set_result('?','?', '?', '?', '?', '?');
    }else{
        notfound_alert.style.display = "none";
        const environ = jsonData[index]["Data"]["ENVIRON_DISCLOSURE_SCORE"][select_year];
        const social = jsonData[index]["Data"]["SOCIAL_DISCLOSURE_SCORE"][select_year];
        const govnce = jsonData[index]["Data"]["GOVNCE_DISCLOSURE_SCORE"][select_year];
        const weighted_scores = {
            "Environmental": environ * weights["Environmental"],
            "Social": social * weights["Social"],
            "Governance": govnce * weights["Governance"]
        }
        const total_esg_score = weighted_scores["Environmental"] + weighted_scores["Social"] + weighted_scores["Governance"];
        console.log(total_esg_score);
        set_result(total_esg_score, stock_code, environ, social, govnce, select_year);
    }
}

function CalculateESG(event){
    const [stock_code, select_year] = CalculateSingleESG(event);
    if (jsonData == undefined){
        fs.readFile(data_path, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        jsonData = JSON.parse(data);
        calculate(stock_code, select_year, jsonData); 
        });
    }else{
        calculate(stock_code, select_year, jsonData);
    }
    
}