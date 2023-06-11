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
-- Table structure for table `payment_details`
--

DROP TABLE IF EXISTS `payment_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment_details` (
  `o_id` bigint NOT NULL,
  `card_cvv` int DEFAULT NULL,
  `card_expiry` date DEFAULT NULL,
  `card_name` varchar(255) DEFAULT NULL,
  `card_no` bigint DEFAULT NULL,
  `debit_credit` bit(1) DEFAULT NULL,
  `cash` bit(1) DEFAULT NULL,
  `razorpay` bit(1) DEFAULT NULL,
  `total_amount` double NOT NULL,
  `upi` bit(1) DEFAULT NULL,
  `upi_id` varchar(255) DEFAULT NULL,
  `upi_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`o_id`),
  CONSTRAINT `FK8d57jy1lxe5o5apscthktrttf` FOREIGN KEY (`o_id`) REFERENCES `orders_details` (`o_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_details`
--

LOCK TABLES `payment_details` WRITE;
/*!40000 ALTER TABLE `payment_details` DISABLE KEYS */;
INSERT INTO `payment_details` VALUES (2,0,NULL,NULL,123,_binary '\0',_binary '',_binary '\0',7000,NULL,NULL,NULL),(4,NULL,NULL,NULL,NULL,NULL,_binary '\0',_binary '\0',7000,NULL,NULL,NULL),(5,NULL,NULL,NULL,NULL,NULL,_binary '\0',_binary '\0',7000,NULL,NULL,NULL),(6,NULL,NULL,NULL,NULL,NULL,_binary '\0',_binary '\0',7000,NULL,NULL,NULL),(7,NULL,NULL,NULL,NULL,NULL,_binary '\0',_binary '\0',7000,NULL,NULL,NULL),(11,NULL,NULL,NULL,NULL,NULL,_binary '\0',_binary '\0',10000,NULL,NULL,NULL),(13,NULL,NULL,NULL,NULL,NULL,_binary '\0',_binary '\0',10000,NULL,NULL,NULL),(14,NULL,NULL,NULL,NULL,NULL,_binary '\0',_binary '\0',2114000,NULL,NULL,NULL),(15,NULL,NULL,NULL,NULL,NULL,_binary '',_binary '\0',14600,NULL,NULL,NULL),(16,333,'2018-08-01','Sam',8888999944446666,_binary '',_binary '\0',_binary '\0',15900,NULL,NULL,NULL),(17,NULL,NULL,NULL,NULL,NULL,_binary '\0',_binary '\0',25200,_binary '','kewalbalte@sbi','Kewal Balte'),(18,NULL,NULL,NULL,NULL,NULL,_binary '\0',_binary '\0',8300,_binary '','sam@sbi','Sam'),(21,NULL,NULL,NULL,NULL,NULL,_binary '\0',_binary '\0',3800,_binary '','kkk@sbi','kkk'),(23,NULL,NULL,NULL,NULL,NULL,_binary '\0',_binary '\0',10600,_binary '','sam123@sbi','sam sharma'),(24,NULL,NULL,NULL,NULL,NULL,_binary '',_binary '\0',10600,NULL,NULL,NULL),(26,NULL,NULL,NULL,NULL,NULL,_binary '',_binary '\0',10600,NULL,NULL,NULL),(27,NULL,NULL,NULL,NULL,NULL,_binary '',_binary '\0',3800,NULL,NULL,NULL),(30,NULL,NULL,NULL,NULL,NULL,_binary '',_binary '\0',6600,NULL,NULL,NULL);
/*!40000 ALTER TABLE `payment_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-09 20:15:47
