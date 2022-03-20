console.log("Initializing Case Study cards... (it may take a few seconds)")
body = document.getElementsByTagName("body")[0]
print = console.log

try {
  if (c != null) {
    print("Config found...")
  }
}
catch(err) {
  location.reload()
  alert(`ALERT!
         Config not found and/or invalid config.
         If you are the owner of this webpage,
         please populate the ~/config.js file, initial
         config can be found at ~/customize/index.html
         -----------------------------------------------------
         If you are a visitor, please wait a
         few mimutes or contact the webpage owner`)
}

print("Looks like the config is loaded!")
print({Config:c})
cardnamelist = []
for (let index = 0; index < c.cards.length; index++) {
  const i = c.cards[index];
  cardnamelist.push(i.topic)
}
print({Cards:c.cards})

for (let i = 0; i < cardnamelist.length; i++) {
  element = cardnamelist[i]
  document.getElementById("shortcuts").innerHTML += "<li><a href='#card-"+i+"'>Here</a> for "+element+"</li>"
  template = document.querySelector("template#card-template").innerHTML
  template = template.replaceAll("{card-topic}", c.cards[i].topic)
  template = template.replaceAll("{detail1 header}", c.cards[i].details[0][0])
  template = template.replaceAll("{detail1 description}", c.cards[i].details[0][1])
  template = template.replaceAll("{detail2 header}", c.cards[i].details[1][0])
  template = template.replaceAll("{detail2 description}", c.cards[i].details[1][1])
  template = template.replaceAll("{card-result}", c.cards[i].result)
  if(c.cards[i].imagePath) {
    template = template.replaceAll("{card-image-alt}", c.cards[i].topic)
    template = template.replaceAll("{card-image}", c.cards[i].imagePath)
  } else {
    template = template.replaceAll("{card-image-alt}", "")
    template = template.replaceAll("{card-image}", "")
  }
  body.innerHTML += template;
}
