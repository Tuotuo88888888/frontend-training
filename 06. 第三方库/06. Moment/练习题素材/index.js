function setNow() {
  $("[data-zone]").each(function (i, ele) {
    const zone = +ele.dataset.zone;
    ele.innerHTML = moment().utcOffset(zone).format("YYYY-MM-DD HH:mm:ss");
  });
}
function setBirthInfo() {
  const birthTxt = $("#birthInput").val();
  if (!birthTxt) {
    $("#birthInfo").empty(); // 不正确的日期文本
    return;
  }
  const birthday = moment(birthTxt);
  const now = moment();
  if (birthday > now) {
    // 生日有问题
    $("#birthInfo").html("生日不正确！"); // 不正确的日期文本
    return;
  }

  let targetDate;
  const thisYearBirth = birthday.clone().years(now.years());
  if (thisYearBirth < now) {
    targetDate = thisYearBirth.clone().add(1, "years");
  } else {
    targetDate = thisYearBirth.clone();
  }

  const cal = thisYearBirth.calendar(null, {
    sameDay: "今天",
    nextDay: "明天",
    nextWeek: "下个 dddd",
    lastDay: "昨天",
    lastWeek: "上个 dddd",
    sameElse: "YYYY年MM月DD",
  });
  const html = `<p>
      <strong>出生日期：</strong>
      <span>${birthday.format("yyyy年MM月DD日")}</span>
    </p>
    <p>
      <strong>年龄：</strong>
      <span>${now.diff(birthday, "years")}</span>
    </p>
    <p>
      你在这个世界上已存在了
      <strong>${now.diff(birthday, "seconds")}</strong>
      秒钟
    </p>
    <p>
      你还有
      <strong>${targetDate.diff(now, "days")}</strong>
      天就会迎来你 ${targetDate.diff(birthday, "years")} 岁的生日
    </p>
    ${
      thisYearBirth < now
        ? `<p>你已在
    <strong>${cal}</strong>
    过了生日</p>`
        : `<p>你将在
        <strong>${cal}</strong>
        迎来下一个生日</p>`
    }`;
  $("#birthInfo").html(html);
}
setInterval(() => {
  setNow();
}, 1000);
$("#birthInput").on("change", setBirthInfo);
