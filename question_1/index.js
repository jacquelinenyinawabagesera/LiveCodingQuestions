// Create a program for managing personal health data. Users should input their unique health identifier and be able to view their medical records, 
// current health status, and appointment history. Additionally, 
// users should have the option to record new health metrics and schedule appointments.
const patients={
  details:[{id:12,name:"Anna",records:"Blood pressure",status:"hospitalized",history:["12th April", "30th April","1st May"]},
{id:10,name:"Jane",records:"Malaria",status:"Healed",history:["5th April", "21st April","7th May"]}],
checkDetails:function(medicalId){
  for(let i=0;i<this.details.length;i++){
 if(medicalId==this.details[i].id){
  console.log(`${this.details[i].name} had ${this.details[i].records} and status now is ${this.details[i].status}, had appointments on ${this.details[i].history}`)
 }}
},
newMetrics:function(healthMetrics){
  for(let i=0;i<this.details.length;i++){
  this.details=this.details.splice(this.details.at(-1),0,healthMetrics); 
}},
appointment:function(date){
  console.log(`Appointment scheduled on ${date}`);
}

}
console.log(patients);
patients.checkDetails(10);
patients.newMetrics("Blood pressure");
patients.appointment("21st May");