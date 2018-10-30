let wikiBaseUrl = "http://exvius.gamepedia.com/"

export const common = {
  escapeName: function(string) {
    return String(string).replace(/[+%&': \(\)]/g, function (s) {
      return "_";
    })},
  toUrl: function (name, wikientry = name) {
      return `${wikiBaseUrl}${encodeURIComponent(wikientry.replace(/ /g, '_'))}`;
    }
}
