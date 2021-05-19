var pageNo = 0;

function setInfo(backText, nextText, infoText, imgSrc) {
    document.getElementById("change1").innerHTML = backText;
    document.getElementById("change2").innerHTML = nextText;
    document.getElementById("info").innerHTML = infoText;
    document.getElementById("book").src = imgSrc;
}


function forward() {
  pageNo++
  if (pageNo === 1) {
    document.getElementById('change1').style.display = 'inline';
    setInfo("Go to Cover", "Go to Page 2", "Ekansh Khaitan", "Ekansh Khaitan.jpg");
  } if (pageNo === 2) {
    setInfo("Go to Page 1", "Go to Page 3", "Nimesh Khaitan", "Nimesh Khaitan.jpg");
  } if (pageNo === 3) {
    setInfo("Go to Page 2", "Go to Page 4", "Sarita Khaitan", "Sarita Khaitan.jpg");
  } if (pageNo === 4) {
    setInfo("Go to Page 3", "Go to Page 5", "Suresh Khaitan", "Suresh Khaitan.jpg");
  } if (pageNo === 5) {
    setInfo("Go to Page 4", "Go to Page 6", "Sweta Khaitan", "Sweta Khaitan.jpg");
  } if (pageNo === 6) {
    setInfo("Go to Page 5", "Go to Cover", "Kavyansh Khaitan", "Kavyansh Khaitan.jpg");
    console.log(pageNo);
    document.getElementById('change2').style.display = 'none';
  }
  if (pageNo === 0) {
    document.getElementById('change1').style.display = 'none';
    console.log(pageNo);
    setInfo("", "Go to Page 1", "Book Cover", "Cover.png")
    document.getElementById('change2').style.display = 'inline';
  }
}

function back() {
  pageNo--
  if (pageNo === 1) {
    document.getElementById('change1').style.display = 'inline';
    setInfo("Go to Cover", "Go to Page 2", "Ekansh Khaitan", "Ekansh Khaitan.jpg");
  } if (pageNo === 2) {
    setInfo("Go to Page 1", "Go to Page 3", "Nimesh Khaitan", "Nimesh Khaitan.jpg");
  } if (pageNo === 3) {
    setInfo("Go to Page 2", "Go to Page 4", "Sarita Khaitan", "Sarita Khaitan.jpg");
  } if (pageNo === 4) {
    setInfo("Go to Page 3", "Go to Page 5", "Suresh Khaitan", "Suresh Khaitan.jpg");
  } if (pageNo === 5) {
    document.getElementById('change2').style.display = 'inline';
    setInfo("Go to Page 4", "Go to Page 6", "Sweta Khaitan", "Sweta Khaitan.jpg");
  } if (pageNo === 6) {
    setInfo("Go to Page 5", "Go to Cover", "Kavyansh Khaitan", "Kavyansh Khaitan.jpg");
    console.log(pageNo);
    pageNo = 5;
  }
  if (pageNo === 0) {
    document.getElementById('change1').style.display = 'none';
    console.log(pageNo);
    setInfo("", "Go to Page 1", "Book Cover", "Cover.png")
  }
}