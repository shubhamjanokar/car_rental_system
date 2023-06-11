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
-- Table structure for table `driver_details`
--

DROP TABLE IF EXISTS `driver_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `driver_details` (
  `license_no` varchar(255) NOT NULL,
  `b_no` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `pincode` int NOT NULL,
  `state` varchar(255) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `adhar_name` varchar(255) NOT NULL,
  `adhar_no` bigint NOT NULL,
  `dob` date DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `gender` bit(1) NOT NULL,
  `mob_no` int NOT NULL,
  PRIMARY KEY (`license_no`),
  UNIQUE KEY `UK_87bxa7l6v8naueytd6nwn9u34` (`adhar_no`),
  UNIQUE KEY `UK_bn97381noh72fh2ye8vfeodjq` (`mob_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `driver_details`
--

LOCK TABLES `driver_details` WRITE;
/*!40000 ALTER TABLE `driver_details` DISABLE KEYS */;
INSERT INTO `driver_details` VALUES ('L-221','b6tower','pune',442201,'maharastra','mj road','suyash gokhale',1234567812345612,'1990-01-21','suyash@gmail.com',_binary '',1234567801),('L-222','b7tower','solapur',442202,'maharastra','nashik road','mayur solanki',1234567812345613,'1992-04-10','mayur@gmail.com',_binary '',1234567802),('L-223','b8tower','nashik',442203,'maharastra','hawamahal road','shubham ghute',1234567812345614,'1994-02-21','shubham@gmail.com',_binary '',1234567803),('L-224','b9tower','satara',442204,'maharastra','lofy street road','akshay nandurkar',1234567812345615,'1996-05-11','akshay@gmail.com',_binary '',1234567804),('L-235','b7tower','solapur',442225,'maharastra','nashik road','Sandy solanki',1234567812345619,'1992-04-10','mayur@gmail.com',_binary '',1234567809);
/*!40000 ALTER TABLE `driver_details` ENABLE KEYS */;
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
