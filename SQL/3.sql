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
-- Table structure for table `car_details`
--

DROP TABLE IF EXISTS `car_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `car_details` (
  `car_model` int NOT NULL,
  `car_average` double NOT NULL,
  `car_capacity` int NOT NULL,
  `car_company` varchar(255) DEFAULT NULL,
  `car_fuel` varchar(255) DEFAULT NULL,
  `car_gear_type` varchar(255) DEFAULT NULL,
  `car_manufact_year` date DEFAULT NULL,
  `car_rent_per_day` double NOT NULL,
  `car_type` varchar(255) DEFAULT NULL,
  `insurance_no` varchar(255) DEFAULT NULL,
  `insuranceperiod` date DEFAULT NULL,
  PRIMARY KEY (`car_model`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car_details`
--

LOCK TABLES `car_details` WRITE;
/*!40000 ALTER TABLE `car_details` DISABLE KEYS */;
INSERT INTO `car_details` VALUES (101,15,5,'Volkswagen','disel','manual','2020-01-01',5000,'SUV','ino09098','2025-01-01'),(102,16,5,'toyato','petrol','auto','2021-01-01',6000,'HatchBack','ino09098','2025-01-01'),(103,17,5,'mahindra','disel','manual','2022-02-02',7000,'saloon','ino09098','2025-01-01'),(104,18,5,'TATA NEXON','Electric','auto','2020-02-02',8000,'SUV','ino09098','2025-01-01'),(106,16.8,5,'Creta Hyundai','','Manual','2022-01-22',5000,'SUV','S-56564','2025-11-30'),(107,25,5,'HYUNDAI i20','','Manual','2022-05-22',3000,'HatchBack','DSFDS7979','2025-05-27'),(108,19,5,'MAROTI SUZUKI SWIFT','','Semi-Auto','2022-04-14',3500,'HatchBack','SASF3453','2025-05-05'),(150,19,4,'tata','disel','auto','2020-01-01',5000,'HATCHBACK','inoas213','2026-01-01');
/*!40000 ALTER TABLE `car_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-09 20:15:49
