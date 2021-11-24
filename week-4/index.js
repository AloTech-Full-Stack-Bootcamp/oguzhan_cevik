import { series } from "./data.js";
import { fancyLogSeriesReport } from "./utils.js";

export function SeriesTracker(series) {
  this.numberOfWatched = 0;
  this.numberOfUnWatched = 0;
  this.series = [];
  this.lastSerie = undefined;
  this.currentSerie = undefined;
  this.nextSerie = undefined;

  this.add = function (serie) {
    this.series.push(serie);

    //Checks whether the serie has been watched ***
    if (serie.isWatched) {
      //increases numberOfWatched by one
      this.numberOfWatched++;

      //checks whether it is exist
      if (!this.lastSerie) {
        this.lastSerie = serie;
      }

      let serieFinishedDate = new Date(serie.finishedDate);
      let lastSerieFinishedDate = new Date(this.lastSerie.finishedDate);

      //Compares serie's date with lastSerie's date
      if (serieFinishedDate > lastSerieFinishedDate) {
        this.lastSerie = serie;
      }
    } else {
      //checks whether currentSerie is exist
      if (!this.currentSerie) {
        //assigns serie to currentSerie
        this.currentSerie = serie;

        //checks whether nextSerie is exist
      } else if (!this.nextSerie) {
        //assigns serie to nextSerie
        this.nextSerie = serie;
      }
      //increases numberOfUnWatched by one
      this.numberOfUnWatched++;
    }
  };

  //Handles adding series

  if (series.length > 0) {
      series.forEach((element)=>{
          this.add(element)

      })
   
  }

  this.finishSerie =  () =>{
    //finds and updates currently watching serie
    series.forEach((element)=>{
        if(element.isCurrent){
            element.isCurrent=false;
            element.isWatched=true;
            element.finishedDate=new Date();

        }

    })
    

    //Updates lastSerie with currentSerie, which has been watched
    this.lastSerie = this.currentSerie;

    //Updates currentSerie with nextSerie
    this.currentSerie = this.nextSerie;

    //Updates isCurrent property to true
    this.nextSerie.isCurrent = true;

    //Assigns null to nextSerie
    this.nextSerie = null;
     series.forEach((element)=>{
         if(!element.isCurrent && !element.isWatched && !this.nextSerie)
         this.nextSerie=element
         

     })
   
   
    // incrases numberOfWatched by one
    this.numberOfWatched++;
    // decreases numberOfUnWatched by one
    this.numberOfUnWatched--;
  };
  this.printSeriesReport =  ()=> {
    fancyLogSeriesReport(this);
  };
}