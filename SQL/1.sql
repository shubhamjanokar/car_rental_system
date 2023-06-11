-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: testingproject
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account_details`
--

DROP TABLE IF EXISTS `account_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account_details` (
  `adhar_no` bigint NOT NULL,
  `b_no` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `pincode` int NOT NULL,
  `state` varchar(255) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `adhar_name` varchar(255) NOT NULL,
  `dob` date DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `gender` bit(1) NOT NULL,
  `license_no` varchar(255) DEFAULT NULL,
  `mob_no` bigint NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  PRIMARY KEY (`adhar_no`),
  UNIQUE KEY `UK_7e7h0wcgdwj5tjj5kkve2j7x8` (`mob_no`),
  UNIQUE KEY `UK_tohwk42tc4ouuc1n2vf97y1sd` (`password`),
  UNIQUE KEY `UK_mb3jp84m3fees45bf9lt1qmpp` (`username`),
  UNIQUE KEY `UK_hvub99wx29a0ce7eokk6lo17h` (`license_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account_details`
--

LOCK TABLES `account_details` WRITE;
/*!40000 ALTER TABLE `account_details` DISABLE KEYS */;
INSERT INTO `account_details` VALUES (32326262626,'b1','pune',44334,'maharashtr','mg road','Ram Bhide','1996-03-03','ram@gmail.com',_binary '','jskad86',995566448,'ram123','USER','ram'),(1234567812345673,'b3 tower3','nagpur',444003,'maharastra','fc road','somesh iramalle','1995-03-03','somesh@gmail.com',_binary '','L-345',1234567893,'somesh123','USER','somesh'),(1234567812345674,'b4 tower4','indore',444004,'mp','balewadi road','pratik thombare','1996-04-04','pratik@gmail.com',_binary '','L-456',1234567894,'pratik123','USER','pratik'),(1234567894569876,'S22','Pune',446655,'MH','FC Road','Kewal Balte','1998-12-28','kewal123@gmail.com',_binary '','L22',9977889977,'kewal123','USER','kewal'),(3232323232326545,'b4','pune',411057,'maharashtra','mJ road','Sam Pandey','1995-02-02','sam@gmail.com',_binary '','GP899',9977556696,'sam123','ADMIN','sam'),(3232323232326548,'b4','pune',440011,'maharashtra','mJ road','Sam Sharma','1995-02-02','sam@gmail.com',_binary '','js863',9977556698,'sam1234','USER','sam1'),(5555666644448888,'S34','Pune',4411057,'MH','TCG','Bharati Lande','1996-10-23','bharati123@gmail.com',_binary '\0','S334',9966554477,'bharati123','USER','bharati'),(9988998877889988,'S556','Pune',449988,'MH','FC ROad','Sajid Khan','2000-03-05','sajid123@gmail.com',_binary '','S773',9988779955,'sajid123','USER','sajid');
/*!40000 ALTER TABLE `account_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-09 20:15:48
