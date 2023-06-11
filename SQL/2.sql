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
-- Table structure for table `after_return_form`
--

DROP TABLE IF EXISTS `after_return_form`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `after_return_form` (
  `o_id` bigint NOT NULL,
  `comments` varchar(255) DEFAULT NULL,
  `condition_after_return` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`o_id`),
  CONSTRAINT `FKcdu9mokj4a77eqiidvem14yul` FOREIGN KEY (`o_id`) REFERENCES `orders_details` (`o_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `after_return_form`
--

LOCK TABLES `after_return_form` WRITE;
/*!40000 ALTER TABLE `after_return_form` DISABLE KEYS */;
INSERT INTO `after_return_form` VALUES (2,'No damage','Good'),(4,'No damage','Good'),(5,'No damage','Good'),(6,'No damage','Good'),(7,'No damage','Good'),(11,'No damage','Good'),(13,'No damage','Good'),(14,'No damage','Good'),(15,'No damage','Good'),(16,'No damage','Good'),(17,'No damage','Good'),(18,'No damage','Good'),(21,'No deduction','Average'),(23,'Scratches and cleaning','Average'),(24,NULL,NULL),(26,NULL,NULL),(27,NULL,NULL),(30,NULL,NULL);
/*!40000 ALTER TABLE `after_return_form` ENABLE KEYS */;
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
