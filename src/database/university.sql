create database `university`;
use `university`;

create table `students` (
    `student_id` int(11) primary key auto_increment,
    `first_name` varchar(50) not null,
    `last_name` varchar(50) not null,
    `email` varchar(100) not null,
    `date_of_birth` date not null,
    `address` varchar(200) not null,
    `city` varchar(50) not null,
    `state` varchar(50),
    `postal_code` varchar(10) not null,
    `phone` varchar( 20) not null
);

create table `courses` (
    `course_id` int(11) primary key auto_increment,
    `cource_name` varchar(100) not null,
    `course_desc` text not null,
    `gpa` varchar(4) not null,
    `credits` int(11) not null
)

create table `enrollments` (
    `enrollment_id` int(11) primary key not null auto_increment,
    `student_id` int(11) not null,
    `course_id` int(11) not null,
    `semester` varchar(20) not null,
    `year` int(11) not null,
    `grade` varchar(10) not null,
    Foreign Key (`student_id`) REFERENCES `students`(`student_id`),
    Foreign Key (`course_id`) REFERENCES `courses`(`course_id`)
)

create table `major` (
    `major_id` int(11) not null primary key auto_increment,
    `major_name` varchar(100) not null
);

create table `student_majors` (
    `student_id` int(11) not null primary key auto_increment,
    `major_id` int(11) not null,
    Foreign Key (`student_id`) REFERENCES `students`(`student_id`),
    Foreign Key (`major_id`) REFERENCES `major`(`major_id`)
)