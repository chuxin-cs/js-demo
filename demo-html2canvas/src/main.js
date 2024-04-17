import html2canvas from "html2canvas";

/**
 * 当前样式是兼容A4纸
 * @param { dom } 截图的元素
 */
export function downloadDomToImage(dom) {
  console.log(dom.scrollHeight);
  html2canvas(dom, {
    backgroundColor: "#ffffff",
    useCORS: true,
    scale: 5,
    width: 1920,
    height: dom.scrollHeight,
    windowHeight: dom.scrollHeight,
    allowTaint: true,
  })
    .then((res) => {
      const url = res.toDataURL("image/png", 2.0);
      const a = document.createElement("a");
      a.href = url;
      a.download = `截图${1}.png`;
      a.click();
      alert("截图成功");
    })
    .catch(() => {
      alert("截图失败");
    });
}

document.getElementById("btn").onclick = function () {
  downloadDomToImage(document.getElementById("ifra"));
};
