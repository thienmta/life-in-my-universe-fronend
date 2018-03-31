let UniverseModel = (function () {
    let model = {};

    model.universeMapNumber = [];
    model.universeString = '';
    model.x = 0;
    model.y = 0;

    model.createRandomMap = function (x, y) {
        model.x = x;
        model.y = y;

        for (let i = 0; i <= model.x; i++) {
            model.universeMapNumber[i] = [];
            for (let j = 0; j <= model.y; j++) {
                model.universeMapNumber[i][j] = Math.round(Math.random());
            }
        }
    };

    model.toHtmlString = function () {
        for (let i = 0; i < model.x; i++) {
            model.universeString += `<div class="grid">`;
            for (let j = 0; j < model.y; j++) {
                let cellType = model.universeMapNumber[i][j] === 1 ? 'planet' : 'space';
                model.universeString += `<div class="` + cellType + `"></div>`;
            }
            model.universeString += `</div>`;
        }

        return model.universeString;
    };

    return model;
})();
