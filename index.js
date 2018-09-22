function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
<<<<<<< HEAD
  if (string === string.toLowerCase()) {
    return "I can\'t hear you!";
  }
  if (string === string.toUpperCase()) {
    return "YES INDEED!";
  }
  if (string === "I love you, Grandma.") {
=======
  if (string = string.toLowerCase()) {
    return "I can\'t hear you!";
  } else if (string = string.toUpperCase()) {
    return "YES INDEED!";
  } else if (string = "I love you, Grandma.") {
>>>>>>> a25a218f150ab65bf3c34487cb5abede2540d3f7
    return "I love you, too.";
  }
}