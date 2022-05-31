axios = require("axios");
fs = require('fs');

//ids should be array
const getLongTitleMap = (ids) => {
  const values = ids.map((i) => {
    return "<" + i + ">"
  })
  const query = [
    "SELECT ?resource ?longTitle ?authorTitle ",
    "{",
      "VALUES ?resource {" + values.join(" ") + "}", 
      "?resource <http://scta.info/property/longTitle> ?longTitle .",
      "?resource <http://scta.info/property/isPartOfTopLevelExpression> ?topLevel .",
      "?topLevel <http://www.loc.gov/loc.terms/relators/AUT> ?author .",
      "?author <http://purl.org/dc/elements/1.1/title> ?authorTitle .",
    "}"].join(' ');
    const sparqlEndpoint = "https://sparql-docker.scta.info/ds/query"
    const queryPromise = axios.get(sparqlEndpoint, { params: { "query": query, "output": "json" } }).then((d) => {
      console.log("d", d)
      idTitleMap = {}
      d.data.results.bindings.forEach((b) => {
        idTitleMap[b.resource.value] = {"longTitle": b.longTitle.value, "authorTitle": b.authorTitle.value}
      })
      return idTitleMap

    })
    return queryPromise
}


axios.get("https://scta-65c18-default-rtdb.firebaseio.com/4JJFO9TeeXRos4HII1qqsjsJtLm1/annotations.json").then((d) => {
      const ids = Object.keys(d.data).map((a) => {
        if (d.data[a] && d.data[a].tags && d.data[a].tags.d37projectQuotes){
          return d.data[a].target.esource
        }
      })
      const idTitleMapPromise = getLongTitleMap(ids)
      idTitleMapPromise.then((idTitleMapObject) => {
        console.log(idTitleMapObject)

        const annoObject = {}
        Object.keys(d.data).map((a) => {
          if (d.data[a] && d.data[a].tags && d.data[a].tags.d37projectQuotes){


            const text = "<section>\n<section data-markdown>\n'" + d.data[a].body.value + "'\n\n---\n" + idTitleMapObject[d.data[a].target.esource].authorTitle + ", " + idTitleMapObject[d.data[a].target.esource].longTitle + "\n\n(" + d.data[a].target.source + ")\n</section>\n<section data-background-iframe='https://scta.lombardpress.org/text?resourceid=" + d.data[a].target.source + "'>\n</section>\n</section>\n"
            annoObject[d.data[a].order] = text
          }

        })
        const sortAnnoObject = obj => Object.keys(obj).sort().reduce((res, key) => (res[key] = obj[key], res), {})
        const sortedAnnoObject = sortAnnoObject(annoObject)
        const annoArray = Object.keys(sortedAnnoObject).map((a) => {
          return sortedAnnoObject[a]
        })
        
        fs = require('fs');
        fs.writeFile('test.html',  annoArray.join(" "), function (err) {
          if (err) return console.log(err);
          //console.log('Hello World > helloworld.txt');
        });
      //setDictData(annoArray)
      })
    })