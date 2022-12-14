-- MariaDB dump 10.19  Distrib 10.4.21-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: TEC
-- ------------------------------------------------------
-- Server version	10.4.21-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tb_alumno`
--

DROP TABLE IF EXISTS `tb_alumno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_alumno` (
  `Id_Alumno` int(11) NOT NULL,
  `Id_Grupo` int(11) NOT NULL,
  `strNombre` varchar(30) NOT NULL,
  `strApellido` varchar(30) NOT NULL,
  `Str_Materia` varchar(15) NOT NULL,
  PRIMARY KEY (`Id_Alumno`),
  KEY `Tb_Alumno_Id_Grupo_tbGrupo_int_Grupo` (`Id_Grupo`),
  CONSTRAINT `Tb_Alumno_Id_Grupo_tbGrupo_int_Grupo` FOREIGN KEY (`Id_Grupo`) REFERENCES `tbgrupo` (`int_Grupo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_alumno`
--

LOCK TABLES `tb_alumno` WRITE;
/*!40000 ALTER TABLE `tb_alumno` DISABLE KEYS */;
INSERT INTO `tb_alumno` VALUES (1,1,'Jose Antonio','Rendon Cruz','Programacion '),(2,1,'Javier ','Olmos','Programacion '),(3,1,'Manuel de Jesus','Martinez ','Programacion'),(4,1,'Rodrigo ','Rodriguez Cruz','Programacion'),(5,1,'Jesus Felipe ','Martinez ','Programacion '),(6,2,'Felipe de Jesus ','Ortega ','Programacion '),(7,2,'Luis Eduardo ','Miranda ','Programacion '),(8,2,'Maria Teresa ','Rendon ','Programacion '),(9,2,'Yatana  ','Martinez ','Programacion '),(10,2,'Ivan Sebastian ','Ruiz ','Programacion ');
/*!40000 ALTER TABLE `tb_alumno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbadministrador`
--

DROP TABLE IF EXISTS `tbadministrador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbadministrador` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `strNombre` varchar(30) DEFAULT NULL,
  `strApellido` varchar(30) DEFAULT NULL,
  `Usuario` varchar(15) DEFAULT NULL,
  `Contrasena` varchar(50) DEFAULT NULL,
  `Activo` char(1) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbadministrador`
--

LOCK TABLES `tbadministrador` WRITE;
/*!40000 ALTER TABLE `tbadministrador` DISABLE KEYS */;
INSERT INTO `tbadministrador` VALUES (1,'Aldahir Antonio ','Sosa ','adminTec ','$2a$10$50n3dzPRQb8G0gnu6E.gPOhOPmcoWyWGybOJZRLh5Fp','S'),(5,'Jesus Azamar','Perez','TecAdmin','$2a$10$fwfwq7kfxDJJszTAuE1Z4OWWcIKZqLZTEoxj.y4.Rw4','N');
/*!40000 ALTER TABLE `tbadministrador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbasistencia`
--

DROP TABLE IF EXISTS `tbasistencia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbasistencia` (
  `Id_Alumno` int(11) DEFAULT NULL,
  `Fecha` date DEFAULT NULL,
  `Estatus` varchar(20) DEFAULT NULL,
  `Id_Grupo` int(11) DEFAULT NULL,
  KEY `Id_Alumno` (`Id_Alumno`),
  KEY `Id_Grupo` (`Id_Grupo`),
  CONSTRAINT `tbasistencia_ibfk_1` FOREIGN KEY (`Id_Alumno`) REFERENCES `tb_alumno` (`Id_Alumno`),
  CONSTRAINT `tbasistencia_ibfk_2` FOREIGN KEY (`Id_Grupo`) REFERENCES `tbgrupo` (`int_Grupo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbasistencia`
--

LOCK TABLES `tbasistencia` WRITE;
/*!40000 ALTER TABLE `tbasistencia` DISABLE KEYS */;
INSERT INTO `tbasistencia` VALUES (1,'2022-11-07','Asistencia',1),(2,'2022-11-07','Falta',1),(3,'2022-11-07','Asistencia',1),(4,'2022-11-07','Asistencia',1),(5,'2022-11-07','Asistencia',1);
/*!40000 ALTER TABLE `tbasistencia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbgrupo`
--

DROP TABLE IF EXISTS `tbgrupo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbgrupo` (
  `int_Grupo` int(11) NOT NULL,
  `strNombre` char(1) NOT NULL,
  PRIMARY KEY (`int_Grupo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbgrupo`
--

LOCK TABLES `tbgrupo` WRITE;
/*!40000 ALTER TABLE `tbgrupo` DISABLE KEYS */;
INSERT INTO `tbgrupo` VALUES (1,'A'),(2,'B');
/*!40000 ALTER TABLE `tbgrupo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbmaestro`
--

DROP TABLE IF EXISTS `tbmaestro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbmaestro` (
  `IntMaestro` int(11) NOT NULL,
  `StrNombre` varchar(30) NOT NULL,
  `StrApellido` varchar(30) NOT NULL,
  `IdGrupo` int(11) DEFAULT NULL,
  `UserM` varchar(15) NOT NULL,
  `Activo` char(1) NOT NULL,
  PRIMARY KEY (`IntMaestro`),
  KEY `TbMaestro_IdGrupo_tbGrupo_int_Grupo` (`IdGrupo`),
  CONSTRAINT `TbMaestro_IdGrupo_tbGrupo_int_Grupo` FOREIGN KEY (`IdGrupo`) REFERENCES `tbgrupo` (`int_Grupo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbmaestro`
--

LOCK TABLES `tbmaestro` WRITE;
/*!40000 ALTER TABLE `tbmaestro` DISABLE KEYS */;
INSERT INTO `tbmaestro` VALUES (1,'Jose Enrique ','Hernandez ',1,'JEHPROG22','S'),(2,'Jesus Alberto ','Rios ',2,'JARPROG22 ','S');
/*!40000 ALTER TABLE `tbmaestro` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-14 14:54:21
