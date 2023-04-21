function setNow() {
    $("[data-zone]").each(function (i, ele) {
        const zone = +ele.dataset.zone;
        ele.innerHTML = moment().utcOffset(zone).format("YYYY-MM-DD HH:mm:ss");
    });
}