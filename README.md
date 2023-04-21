# Practo MERN App

#### We have built a Practor website which is a MERN application using React , Redux Toolkit, Node , MongoDB, Express, Ant Design for the forms, Stripe for the payment. 

# Flow and Features :

#### 1. The application consists of three roles - admin, user, and doctor.
##### 2. The admin role is created by default in the database.
#### 3. Patients can create a user account through the subscription page, while the option to apply as a doctor is available for new doctor accounts.
##### 4. Upon creation, a doctor's account is pending approval. The admin will receive a notification to approve or reject the doctor.
##### 5. If the doctor is approved, their status in the database changes from pending to active.
##### 6. Once approved, patients can book appointments with the doctor. Patients can select an available time slot and submit a request for the appointment, which must be approved by the doctor.
#### 7. Doctors can enter vital signs such as heart rate, temperature, height, weight, and notes for prescriptions.
####  8. After the vitals are entered by the doctor, the user can view them.
#### 9. Users can view both doctor and user profiles within the application.
#### 10. A payment gateway using Stripe is available for users when creating a subscription.