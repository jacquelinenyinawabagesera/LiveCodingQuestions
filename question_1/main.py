
users = [
    {
        "user_id": "user1",
        "medical_records": ["Blood test - Normal"],
        "current_health_status": "Good",
        "appointment_history": ["2025-05-01: Dentist"]
    },
    {
        "user_id": "user2",
        "medical_records": ["X-ray - Clear"],
        "current_health_status": "Fair",
        "appointment_history": ["2025-04-20: General Checkup"]
    }
]

def get_user_data(users, user_id):
    for user in users:
        if user["user_id"] == user_id:
            return user
        else:
             print("User not found")   

def add_health_metric(users, user_id, new_metric):
    user = get_user_data(users, user_id)
    if user:
        user["medical_records"].append(new_metric)
        print("New health metric added.")

def schedule_appointment(users, user_id, new_appointment):
    user = get_user_data(users, user_id)
    if user:
        user["appointment_history"].append(new_appointment)
        print(f"Appointment '{new_appointment}' scheduled.")

user_id = "user1"

print("User Data:", get_user_data(users, user_id))

add_health_metric(users, user_id, "Blood Pressure: 120/80")

schedule_appointment(users, user_id, "2025-06-15: Cardiologist")


print("Updated User Data:", get_user_data(users, user_id))
