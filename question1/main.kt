fun main() {
    val healthRecords = HealthRecords("Pt01","Severe typhiod","Average","26-04-2026")
    println(healthRecords)
    healthRecords.dateOfAppointment("23-01-2025")
    healthRecords.healthIdentifier("pt01")
    healthRecords.newHealthMetrics("Malaria")


}


data class HealthRecords(var id: String, var medicalHistory:String, var currentHealthStatus: String,var appointmentHistory:String){

    fun healthIdentifier(id: String){
        println(" Your medical History is$medicalHistory, and you curret health status is$currentHealthStatus,the appointment date is $appointmentHistory" )
    }

    fun newHealthMetrics(metrics:String){
        println("Your New Health Metrics is $metrics")
    }

    fun dateOfAppointment(appointment:String){
        println("Your appointment is scheduled to $appointment date")
    }


}