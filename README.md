# Upasthit
An attendance tracking system that uses face recognition

Visit the web application: [Upasthit](https://ishika-engage.netlify.app/)

Video Demo: [Link]()

## Table of contents
- [Technology Stack](#technology-stack)
- [Features of the Application](#features-of-the-application)
- [Face API Implementation](#face-api-implementation) 
- [Support and Contact](#support-and-contact)


## Technology Stack
<div>
      <p align ="left">
        <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/344/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png" style="float: left" alt="MongoDB" width="30px" /> <b> MongoDB</b><br><br>
        <img src="https://img.icons8.com/officel/2x/react.png" style="float: left" alt="ReactJS" width="30px" /><b> ReactJS</b><br><br>
        <img src="https://img.icons8.com/color/2x/nodejs.png" style="float: left" alt="NodeJS" width="30px" /><b> <t>NodeJS</b><br><br>
        <img src="https://img.icons8.com/ios-glyphs/2x/github.png" style="float: left" alt="Github" width="30px"/><b> Github</b><br><br>
        <img src="https://img.icons8.com/color/2x/graphql.png" style="float: left" alt="GraphQL" width="30px"/><b> GraphQL</b><br><br>
      </p>
</div>

[(Back to top)](#table-of-contents)

## Features of the Application

### <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-email-cyber-security-kiranshastry-solid-kiranshastry-1.png" width="30px" />&ensp;Register and Login with Email ID and Password
- User information is saved in the MongoDB Cloud.
- The password is hashed first and then stored.

### <img src="https://img.icons8.com/color/48/000000/gmail--v2.gif" width="30px" />&ensp;Login with Google
- Google API is used to implement the feature.
- User information is saved in the MongoDB Cloud.

### <img src="https://img.icons8.com/color/2x/open-book--v2.gif" style="float: left" width="30px" />&ensp;User - Student
- At least two images for facial recognition have to uploaded by each student.
- Using course ID students can enrol into courses.



### <img src="https://img.icons8.com/ultraviolet/2x/literature--v2.gif" style="float: left" width="30px" />&ensp;User - Lecturer
- Enlists a course that a student could enrol in.

### <img src="https://img.icons8.com/ios/2x/attendance-mark.png" style="float: left" width="30px" />&ensp;Attendance Room
- A lecturer opens the attendance list. 
- Students can mark their attendance using webcam. 
- Attendance is marked when the face matches with the images in the database.
- Attendance cannot be marked after the lecturer has closed the attendance sheet.

### <img src="https://img.icons8.com/color/2x/attendance-mark.png" style="float: left" width="30px" />&ensp;Attendance History
- Percentage and names of absentees can be seen by both the users.

### <img src="https://img.icons8.com/ios/2x/delete-sign--v3.gif" style="float: left" width="30px" />&ensp;Remove student from a course
- The lecturer can remove students from a course.

### <img src="https://img.icons8.com/ios-filled/2x/appointment-reminders--v2.gif" style="float: left" width="30px" />&ensp;Notification
- Students enroled in a course get notified when the attendance sheet is opened.

[(Back to top)](#table-of-contents)


## Face API Implementation

### Processes involved in Face Recognition
- Face registration: It is a process to store the features of a face into the file system or database.
- Face matching: It is a process to match the face between the detected features with the other existing features in our dataset either using a classifier or distance metric algorithm.

The process of face recognition includes face detection, face alignment, feature extraction and feature matching.

### Models Used

This project uses 3 pretrained models:
- Face Detection Model
- Facial Landmark Detection Model
- Feature Extraction Model

There is a total of 8 required weight files with the respective metadata file required. Each model had been quantized to a size less than 10 MB to improve the recognition speed.

<p align="center">
    <kbd><img src="README_Assets/Models/models.png" height='400' width='200'></kbd>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    
</p>

## Support and Contact
Email To: ishikapandey070@gmail.com
<br/>[(Back to top)](#table-of-contents)
