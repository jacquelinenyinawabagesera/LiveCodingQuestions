// Sample list of users
const users = [
    {
      userId: "user1",
      medicalRecords: ["Blood test - Normal"],
      currentHealthStatus: "Good",
      appointmentHistory: ["2025-05-01: Dentist"]
    },
    {
      userId: "user2",
      medicalRecords: ["X-ray - Clear"],
      currentHealthStatus: "Fair",
      appointmentHistory: ["2025-04-20: General Checkup"]
    }
  ];
  
  // Function to find and return user data by userId
  function getUserData(users, userId) {
    for (let user of users) {
      if (user.userId === userId) {
        return user;
      }
    }
    console.log("User not found");
    return null;
  }
  
  // Function to add new health metric to a user's medical records
  function addHealthMetric(users, userId, newMetric) {
    const user = getUserData(users, userId);
    if (user) {
      user.medicalRecords.push(newMetric);
      console.log("New health metric added.");
    }
  }
  
  // Function to schedule a new appointment for a user
  function scheduleAppointment(users, userId, newAppointment) {
    const user = getUserData(users, userId);
    if (user) {
      user.appointmentHistory.push(newAppointment);
      console.log(`Appointment '${newAppointment}' scheduled.`);
    }
  }
  
  // Example usage:
  const userId = "user1";
  
  // View user data
  console.log("User Data:", getUserData(users, userId));
  
  // Add a new health metric
  addHealthMetric(users, userId, "Blood Pressure: 120/80");
  
  // Schedule a new appointment
  scheduleAppointment(users, userId, "2025-06-15: Cardiologist");
  
  // View updated user data
  console.log("Updated User Data:", getUserData(users, userId));
  