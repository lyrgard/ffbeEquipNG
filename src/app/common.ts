let wikiBaseUrl = "http://exvius.gamepedia.com/"

export const common = {
  escapeName: function(string) {
    return String(string).replace(/[+%&': \(\)]/g, function (s) {
      return "_";
    })},
  toUrl: function (item) {
      let baseName = item.name;
      if (item.wikiEntry) {
        baseName = item.wikiEntry;
      }
      return `${wikiBaseUrl}${encodeURIComponent(baseName.replace(/ /g, '_'))}`;
    }
}
